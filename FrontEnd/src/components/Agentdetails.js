import React, { useEffect, useState} from 'react'
import axios  from 'axios';
import { Link, useParams } from "react-router-dom";


import configData from '../config.json';

  const AgentDetails = () =>{
    var [firstName,setfirstName] = useState("");
    var [lastName,setlastName] = useState("");
    var [acontact,setacontact] = useState("");
    var [aemail,setaemail] = useState("");  
    var [password,setpassword] = useState("");
    var [confirm_password,setconfirm_password] = useState("");
    var [about,setabout]= useState("");
    var [aadhar_no,setaadhar_no] = useState("");
    var [gender,setgender] = useState("");
    var [verify,setverify] = useState("");
    var [type,settype] = useState("");
    var [citiesId,setcitiesId] = useState("");  
    var [stateId,setstateId] = useState("");
    var [address,setaddress] = useState("");
    var [pincode,setpincode] = useState("");
    var [photo_file,setphoto_file] = useState("");
    var [aadhar_photo,setaadhar_photo] = useState("");
    var [imagename,setimagename] = useState("");
    var [imagename1,setimagename1] = useState("");
    
    var [imagename,setimagename] = useState("");
   
    var [subject,setSubject] = useState("");
    var [contact,setContact] = useState("");
    var [Email,setemail] = useState("");
    var [subjectError,setSubjectError] = useState("");
    var [contactError,setContactError] = useState("");
    var [EmailError,setemailError] = useState("");
    var [successMessage,setSuccessMessage] = useState("");
    var [formvalid,setformvalid] = useState(true);  


    const [allproperty,setProperty] = useState([]);
    const validateEmail = (Email) => {
        return Email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
    
     const handleForm = (e) => {
        e.preventDefault();
        
        //API
        if(subject=="")
        {
            setformvalid(false);
            setSubjectError("Please Enter Content")
        }
        if(Email=="")
        {
            setformvalid(false);
            setemailError("Please Enter Email")
        }
        if(!validateEmail(Email))
        {
            setformvalid(false);
            //setemailError("Please Enter Email");
        }
        if(contact=="")
        {
            setformvalid(false);
            setContactError("Please Enter Contact Number");
        }
        if(contact.length!=10)
        {
            setformvalid(false);
            // setcontactError("Please Enter Contact Number")
        }
        if(subject!==""  && contact=="" && contact!==""  && Email!=="" && Email=="")
        setformvalid(true)
         var postParams = new FormData();

         postParams.append("subject",subject);
             postParams.append("contact",contact);
          postParams.append("email",Email);
          postParams.append("inquiry_date",'');
         postParams.append("userid",localStorage.getItem("userid"));
          postParams.append("architechid",id);
          postParams.append("name",localStorage.getItem("name"));


         axios.post(configData.SERVER_URL+"addInquiry.php",postParams).then((response)=>{
         if(response.status == 200)
            {
                var result = response.data;
                 alert(result)
                if(result=="Yes")
                    { 
                        window.scrollTo(0, 0);
                        setSuccessMessage("Inquiry Request successfully!");
                       // alert("Data Inserted");
                    }
                else
                {
                    alert("Error");
                }
            }
           
        });
        //API
    
    };
    let {id} =useParams(); 
    
    const getproperty = () => {
        var postParams = new FormData();
        postParams.append("id",id);

       
        axios.post(configData.SERVER_URL+"getUserProperty.php",postParams).then((response)=>{
            console.log(response.data);
            if(response.status == 200)
            
            {
              
                setProperty(response.data);
              
            }
        });
    }


    

    useEffect(()=>{
    var postParams = new FormData();
    postParams.append("id",id);

    axios.post(configData.SERVER_URL+"getSingleuser.php",postParams).then((response)=>{
        if(response.status == 200)
        {
            var result = response.data;
            setfirstName(result["firstname"]);
            setlastName(result["lastname"]);
            setacontact(result["contact"]);
            setaemail(result["email_user"]);
            setpassword(result["password"]);
            setconfirm_password(result["confirm_password"]);
            setabout(result["about"]);
            setaadhar_no(result["aadhar_no"]);
            setgender(result["gender"]);
            setaddress(result["address"]);
            setverify(result["verify"]);
            settype(result["type"]);
            setcitiesId(result["city_name"]);
            setstateId(result["state_name"]);
            setpincode(result["pincode"]);
            setimagename(result["photo_file"]);
            setimagename1(result["aadhar_photo"]);
            getproperty();
            window.scrollTo(0, 0);
            
             
        }
    });


},[]);


    
   
   
  return (
     <>
         <section className="agent-section property-section agent-profile-wrap">
          
        <div className="container">
        <div className="filter-panel">
                <div className="top-panel">
                    <div>
                        <h2>Agent Details</h2>
                        
                    </div>
                   
                </div>
            </div>
          
            <div className="row ratio_55">
                <div className="col-xl-12 col-lg-8 property-grid-2">
                    <div className="our-agent theme-card">
                        <div className="row">
                            <div className="col-sm-6 ratio_landscape">
                                <div className="agent-image">
                                <img src={configData.USER_IMAGE + imagename} style={{width:"100%"}} height="350"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="our-agent-details">
                                    <h3 className="f-w-600">{firstName} {lastName}</h3>
                                    <h6>Real estate Property Agent</h6>
                                    <ul>
                                        
                                        <li>
                                            <div className="media">
                                            <b>Contact</b>&nbsp;
                                                <div className="media-body">
                                                    <h6>{acontact}</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                            <b>Email:</b>&nbsp;
                                                <div className="media-body">
                                                    <h6>{aemail}</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                            <b>Gender:</b>&nbsp;
                                                <div className="media-body">
                                                    <h6>{gender}</h6>
                                                </div>
                                            </div>
                                        </li>
                                       
                                        
                                        <li>
                                            <div className="media">
                                               <b>Address:</b>&nbsp;
                                                <div className="media-body">
                                                    <h6> {address} {pincode}</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="with-link">
                                            <div className="media">
                                            <b>State:</b>&nbsp;
                                                <div className="media-body">
                                                    <h6>{citiesId},{stateId}</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="with-link">
                                            <div className="media">
                                            <b>About Agent:</b>&nbsp;
                                                <div className="media-body">
                                                    
                                                </div>
                                            </div>
                                        </li>
                                        <h6>{about}</h6>
                                    </ul>
                                </div>
                               
                                
                            </div>
                            
                        </div>
                    </div>
                    <section className="property-section">
        <div className="">
    <div className="row ratio_55 zoom-gallery property-box-flat">
        <div className="col-lg-12">
        <div className="filter-panel">
                <div className="top-panel">
                    <div>
                        <h2>Agent Property Listing</h2>
                        
                    </div>
                </div>
            </div>
            <div className="row column-space no-slider-property">
                <div className=''>
               
                </div>
                 {
                                                       allproperty.map((row,index)=>{
                                                return(
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"style={{
                                                                     
                                                                        
                                                                    }}>
                    <div className="property-box"style={{
                                                                        
                                                                    }}>
                        <div className="property-image">
                            
                            <div className="property-slider color-3">
                                <a href="#!">
                                <img src={configData.PROPERTY_IMAGE+ row.property_photo } style={{width:'100%'}} width="290" height="300"/>
                                    
                                </a>
                               
                            </div>
                           
                            <span className="label label-white label-lg label-flat color-3">₹{row.price}</span>
                            
                        </div>
                        <div className="property-details">
                           
                            <ul className="icon-property">
                                <li>
                                    <div className="d-flex">
                                        
                                        <span>Title: {row.property_title}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        
                                        <span>Area: {row.area_property} sq ft</span>
                                    </div>
                                </li>
                            </ul>
                                           
                            <ul className="icon-property mb-0">
                                <li>
                                    <div className="d-flex">
                                        
                                        <span>Rooms: {row.master}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        
                                       Build-Date:
                                       <span>{row.build_date}</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-3 text-start">
                                <Link to={"/propertydetails/"+row.property_id} className="btn btn-light-bg btn-flat color-3">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                 );
                })
}
            </div>
        </div>
    </div>
</div>
</section>
                        
                    
                </div>
               
  </div>
        </div>
       
</section>

      </>
  )
}


export default AgentDetails