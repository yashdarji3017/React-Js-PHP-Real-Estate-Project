import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import { Link,useParams } from "react-router-dom";

import configData from '../config.json';
import { type } from '@testing-library/user-event/dist/type';
const PropertyDetails =()  =>{
    var [firstName,setfirstName] = useState("");
    var [lastName,setlastName] = useState("");
    var [ucontact,setucontact] = useState("");
    var [email,setemail] = useState("");
    var [profile,setprofile] = useState("");
    var [ucity,setucity] = useState("");
    var [ustate,setustate] = useState("");
   

    var [successMessage,setSuccessMessage] = useState("");
   
    var [inquiry,setinquiry] = useState("");
    var [contact,setcontact] = useState("");
    var [iemail,setiemail] = useState("");
    var [subjectError,setSubjectError] = useState("");
    var [contactError,setContactError] = useState("");
   var [emailError,setEmailError] = useState("");
   var [formvalid,setformvalid] = useState(true);

    var [status,setstatus] = useState("");


    var [property_title,setproperty_title] = useState("");
    var [description,setdescription] = useState("");
    var [bedroom,setbedroom] = useState("");
    var [hall,sethall] = useState("");
    var [kitchen,setkitchen] = useState("");
    var [master,setmaster] = useState("");
    var [price,setprice] = useState("");
    var [address,setaddress] = useState("");
    var [landmark,setlandmark] = useState("");
    var [pincode,setpincode] = useState("");
    var [latitude,setlatitude] = useState("");
    var [longitude,setlongitude] = useState("");
    var [area,setarea] = useState("");
    var [furnished,setfurnished] = useState("");
    var [floors,setfloors] = useState("");
    var [numbers,setnumbers] = useState("");
    var [property,setproperty] = useState("");
    var [available,setavailable] = useState("");
    var [parking,setparking] = useState("");
    var [isavailable, setisavailable] = useState("");
    var [isapprove,setisapprove] = useState("");
    var [isactive,setisactive] = useState("");
    var [build_date,setbuild_date] = useState("");
    var [projectid,setprojectid] = useState("");
    var [categoriesid,setcategoriesId] = useState("");
    var [citiesId,setCitiesId] = useState("");  
    var [stateId,setStateId] = useState("");
    var [userid,setuserId] = useState("");
    var [username,setusername] = useState("");
    var [photo_file,setphoto_file] = useState("");
    var [pdf_file,setpdf_file] = useState("");  
    var [imagename,setimagename] = useState("");
    var [imagenames,setimagenames] = useState("");
    
        var [exit,setexit] = useState("");
        var [cctv,setcctv] = useState("");  
        var [wifi,setwifi] = useState("");
         var [air,setair] = useState("");
        var [security,setsecurity] = useState("");
        var [terrace,setterrace] = useState("");
        var [lift,setlift] = useState("");
        var [balcony,setbalcony] = useState("");

        const [Propertyfacility,setPropertyfacility] = useState([]);
    
        const getPropertyfacility = () => {
            var postParams = new FormData();
            postParams.append("id",id);
            axios.post(configData.SERVER_URL+"getPropertywisefacilities.php",postParams).then((response)=>{
                console.log(response);
                if(response.status==200)
                {
                    setPropertyfacility(response.data);
                }
            });
        }


    


    let {id} =useParams();
    useEffect(() =>{
    var postParams = new FormData();
    postParams.append("id",id);

    axios.post(configData.SERVER_URL+"getSingleproperty.php",postParams).then((response)=>{
        if(response.status == 200)
        {
            var result = response.data;
           
            setproperty_title(result["property_title"]);
            setfirstName(result["firstname"]);
            setlastName(result["lastname"]);
            setemail(result["email_user"]);
            setprofile(result["photo_file"]);
            setucontact(result["contact"]);
            setucity(result["city_name"]);
            setustate(result["state_id"]);
           

            setdescription(result["description_property"]);
            setbedroom(result["bedroom"]);
            sethall(result["hall"]);
            setkitchen(result["kitchen"]);
            setmaster(result["master"]);
            setprice(result["price"]);
            setaddress(result["address_property"]);
            setlandmark(result["landmark_property"]);
            setpincode(result["pincode_property"]);
            setlatitude(result["latitude_property"]);
            setlongitude(result["longitude_property"]);
            setarea(result["area_property"]);
            setfurnished(result["furnished"]);
            setfloors(result["floors"]);
            setnumbers(result["numbers"]);
            setparking(result["parking_property"]);
             setproperty(result["property"]);
            setisavailable(result["available"]);
             setisapprove(result["approve"]);
            setisactive(result["active"]);
            setbuild_date(result["build_date"]);
            setprojectid(result["project_id"]);
            setuserId(result["user_id"]);
            setcategoriesId(result["categories_id"]);
            setCitiesId(result["city_name"]);
             setStateId(result["state_name"]);
            setuserId(result["user_id"]);
            setimagename(result["property_photo"]);
            setimagenames(result["pdf_property"]);
             setexit(result["eexit"]);
            setcctv(result["cctv"]);
            setwifi(result["wifi"]);
            setair(result["air"]);
            setsecurity(result["security"]);
            setterrace(result["terrace"]);
            setlift(result["lift"]);
            setbalcony(result["balcony"]);
            getMedia();
            getPropertyfacility();
            window.scrollTo(0,0)

            

         }
    });


},[]);


const validateEmail = (iemail) => {
    return iemail.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

const handleForm = (e) => {
    e.preventDefault();
    
    //API
    if(inquiry=="")
    {
        setformvalid(false);
        setSubjectError("Please Enter Your Subject")
    }
    
    if(contact=="")
    {
        setformvalid(false);
        setContactError("Please Enter Your Contact Number")
    }
    if(contact.length!=10)
    {
        setformvalid(false);
        // setcontactError("Please Enter Contact Number")
    }
    if(iemail=="")
    {
        setformvalid(false);
        setEmailError("Please Enter Email");
    }
    if(!validateEmail(iemail))
    {
        setformvalid(false);
        //setEmailError("Please Enter Email");
    }
    if(inquiry!=="" && contact!=="" &&  email!=="" )
            {
  setformvalid(true)
     var postParams = new FormData();
     postParams.append("userid",localStorage.getItem("userid"));
     postParams.append("propertyid",id);
     postParams.append("inquiry",inquiry);
     postParams.append("contact",contact);
     postParams.append("iemail",iemail);

     postParams.append("name",localStorage.getItem("name"));

     postParams.append("status",status);
     postParams.append("inquiry_date",'');

     axios.post(configData.SERVER_URL+"addpropertyinquiry.php",postParams).then((response)=>{
     
     

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
            }
};

const [allmedia,setMedia] = useState([]);

    const getMedia = () => {
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getMediapropertywise.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                  setMedia(response.data);
            }
        });
    }



  return (
     <>
     <section className="without-top property-main small-section">
        <div className="single-property-section">
            <div className="container">
                <div className="single-title">
                    <div className="left-single">
                        <div className="d-flex">
                            <h2 className="mb-0">{property_title}</h2>
                            <span className="label label-shadow ms-2">{property}</span>
                        </div>
                        <p className="mt-1">{address}
                            {citiesId},
                            {stateId}</p>
                        <ul>
                            <li>
                                <div>
                                    <img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt=""></img>
                                    <span>{bedroom} Bedrooms</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt=""></img>
                                    <span>{hall} Hall</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/sofa.svg" className="img-fluid" alt=""></img>
                                    <span>{master} Matser</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt=""></img>
                                    <span>{area} sq Area</span>
                                </div>
                            </li>
                            
                        </ul>
                       
                    </div>
                    <div className="right-single">
                        
                        <h2 className="price">{price} ₹<span>/ start From</span></h2>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
       <section className="single-property mt-0 pt-0">
<div className="container">
    <div className="row ratio_55">
        <div className="col-xl-9 col-lg-8">
            <div className="description-section tab-description">
                <div className="description-details">
                <div className="">
                    <div className="image_section row zoom-gallery-multiple gx-3">
                       
                    <div className="col-sm-6">
                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="img-property">

                            <a target="_blank" href={configData.PROPERTY_IMAGE + imagename}>
                            <img src={configData.PROPERTY_IMAGE + imagename} className="img-fluid bg-img"/>
                            </a>
                            </div>
</div>
</div>                    </div>       
                        
                    <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="img-property">
                                                <a href={configData.PROPERTY_IMAGES + imagenames}>
                                                <img src={configData.PROPERTY_IMAGES + imagenames} className="img-fluid bg-img"  />
                                                </a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                    {/* <div className="col-sm-4"> 
                    <div className="row">
                        <div className="col-lg-12">    
                        <div className="img-property">   
                            <a target="_blank" href={configData.PROPERTY_IMAGES + imagenames}>
                            <img src={configData.PROPERTY_IMAGES + imagenames} />
                            </a>
                            </div>
                        </div>
                        </div>
                        </div> */}

                       </div>
                       
                    </div>
                    <div className="desc-box">
                        <ul className="nav nav-tabs line-tab" id="top-tab" role="tablist">
                            <li className="nav-item"><a className="nav-link active"
                                    href="#about">about</a></li>
                            
                        </ul>
                        <div className=" tab-content" id="top-tabContent">
                            <div className="tab-pane fade show active about page-section" id="about">
                                <h4 className="content-title">Property Details
                                    </h4>
                                <div className="row">
                                    <div className="col-md-6 col-xl-4">
                                        <ul className="property-list-details">
                                            <li><span>Property Type :</span>{property_title}</li>
                                            <li><span>Property status :</span>{property}</li>
                                            <li><span>Build Date :</span>{build_date}</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-xl-4">
                                        <ul className="property-list-details">
                                            <li><span>Price :</span>₹ {price}</li>
                                            <li><span>Property Size :</span> {area} sq / ft</li>
                                            <li><span>Balcony :</span> {numbers}</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-xl-4">
                                        <ul className="property-list-details">
                                            <li ><span>City :</span><ul style={{marginTop:'-11%'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{citiesId},{stateId}</ul></li>
                                            <li><span>Bedrooms :</span> {bedroom}</li>
                                            <li><span>Master :</span> {master}</li>
                                        </ul>
                                    </div>
                                </div>
                                <h4 className="content-title mt-4">Attachments</h4>
                               
                                    <i className="far fa-file-pdf fa-lg">&nbsp;</i><a target="_blank" className="attach-file" href={configData.PROPERTY_IMAGES + imagenames}>Download Property Document</a>

                                <h4 className="mt-4">Property Brief</h4>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="font-roboto">{description}</p>
                                    </div>
                                    
                                </div>
                                <br></br>
                                <h4 className="content-title">features</h4>
                                <div className="single-feature row">
                                    <div className="col-xl-3 col-6">
                                        <ul>
                                            <li>  {wifi==="FreeWi-Fi" &&  (<>
                                                 {wifi} <i className="fas fa-wifi"></i>
                                                 </> )} 
                                            </li>
                                            
                                            <li>  {parking==="FreeParking" &&  (<>
                                                <i className="fas fa-car"></i> {parking}
                                            </>)}
                                            </li>
                                            <li>  {air==="Aircondition" &&  (<>
                                                <i className="fas fa-fan"></i> {air}
                                                </>)}
                                                </li>
                                            
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-6">
                                        <ul>
                                            <li>{security==="SecurityGuard" &&  (<>
                                                <i className="fas fa-user-shield"></i> {security}
                                                </>)}
                                            </li>
                                            <li>
                                            {exit==="EmergencyExit" &&  (<>
                                                <i className="fas fa-video"></i> {cctv}
                                            </>)}
                                            </li>

                                            <li>

                                                    {exit==="EmergencyExit" &&  (<>
                                                        <i className="fa-solid fa-door-open"></i> {exit}
                                                    </>)}
                                                    </li>
                                           
                                        </ul>
                                    </div>
                                    <div className="col-xl-3 col-6">
                                        <ul>
                                        <li>

                                            {terrace==="Terrace" &&  (<>
                                                <i className="fa-solid fa-door-open"></i> {terrace}
                                            </>)}
                                            </li><li>

                                            {lift==="ElevatorLift" &&  (<>
                                                <i className="fa-solid fa-elevator"></i>       {lift}
                                                                                     </>)}
                                            </li><li>

                                            {balcony==="Balcony" &&  (<>
                                                <i className="fa fa-city"></i>{balcony}
                                                                                            </>)}
                                            </li>
                                           
                                           
                                        </ul>
                                    </div>
                                </div>
                                <br></br>
                                <h4 className="content-title">Extra Facilities</h4>
                                <div className="single-feature row">
                                {
                                            Propertyfacility.map((row,index)=>{
                                                return(

                                                    <ul>
                                                    <li>
                                                    <i className="fa fa-arrow-right"></i>{row.facilities_name}
                                                </li>
                                                </ul>

                                                    
                                                    
                                                   
                                                    
                               
                                                   

                                );
                            })
                        }

                            </div>
                            </div>
                           
                            <div className="page-section" id="feature">
                              <center>  <h2>Property Images</h2></center>
                               <div className='col-lg-12 mt-2'>
                              


    
                              

         <div className="image_section row zoom-gallery-multiple gx-3 mt-3">                
         { 
         allmedia.map((row,index)=>{
    return(
            <div className="col-sm-6 mt-3">    
                                        <div className="row">
                                        <div className="col-lg-12">
                                            <div className="img-property">        
            <a target="_blank" href={configData.MEDIA_IMAGE + row.media_file}>
                            <img target="_blank" src={configData.MEDIA_IMAGE + row.media_file}  className="img-fluid bg-img" alt=""/>
                            </a>
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
                    </div>
                   
                </div>
            </div>
           
        </div>
        {localStorage.getItem("isclientlogin") &&  <div className="col-xl-3 col-lg-4">
            <div className="left-sidebar sticky-cls single-sidebar">
                <div className="filter-cards">
                    <div className="advance-card">
                        <h6>Contact Info</h6>
                        <div className="category-property">
                            <div className="agent-info">
                                <div className="media">
                                    <img src={configData.USER_IMAGE + profile}  className="img-50"/>

                                    <div className="media-body ms-2">
                                        <h6>{firstName} {lastName}</h6>
                                        <p>{email}</p>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <i className="fa fa-map-pin"></i>{ucity}{ustate}
                                </li>
                                <li>
                                    Contact: <i className="fa fa-phone-call"></i>{ucontact}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="advance-card">
                                <h6>Request exploration</h6>
                                <div className="category-property">
                                            {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                            
                                            <form method='POST' onSubmit={handleForm}  className="row gx-3">
                                            
                                    <div className="form-group col-md-12 col-sm-6">
                                                    <label>Subject</label>
                                                        <input type="text" className="form-control" value={inquiry} onChange={(e) => setinquiry(e.target.value)} placeholder="enter your subject"  ></input>
                                                        {(formvalid===false && inquiry=="")&&(<><p className="error">{subjectError}</p></>)}

                                                    </div>
                                                   
                                                    <div className="form-group col-md-12 col-sm-6">
                                                        <label>Contact</label>
                                                        <input type="tel" className="form-control" placeholder="enter your Contact" value={contact} onChange={(e) => setcontact(e.target.value)} maxLength={10}></input>
                                                        {(formvalid===false && contact=="")&&(<><p className="error">{contactError}</p></>)}
                                                {(formvalid===false && contact!="" && contact.length<10)&&(<><p className="error">Please Enter valid mobile number</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-12 col-sm-6">
                                                        <label>Email</label>
                                                        <input type="email" className="form-control" placeholder="enter your Email" value={iemail} onChange={(e) => setiemail(e.target.value)} ></input>
                                                        {(formvalid===false && iemail=="")&&(<><p className="error">{emailError}</p></>)}
                                                {(formvalid===false && iemail!="" && !validateEmail(iemail))&&(<><p className="error">Please Enter Valid Email</p></>)}

                                                    </div>
                                       
                                       
                                        <button type="submit" className="btn btn-gradient color-1 btn-block btn-pill">Submit
                                            Request</button>
                                    </form>
                                </div>
                            </div>
                 
                </div>
            </div>
        </div>
}</div>
</div>
</section>
      </>
  )
}


export default PropertyDetails