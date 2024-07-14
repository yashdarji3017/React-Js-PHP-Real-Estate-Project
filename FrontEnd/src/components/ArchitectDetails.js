import React, { useEffect, useState} from 'react'
import axios  from 'axios';
import { Link, useParams } from "react-router-dom";


import configData from '../config.json';

  const ArchitectDetails = () =>{
    var [firstName,setFirstName] = useState("");
    var [lastName,setLastName] = useState("");
    var [phone,setPhone] = useState("");
    var [email,setEmail] = useState("");  
   
    var [aboutArchitech,setAboutArchitech] = useState("");
    var [address,setAddress] = useState("");
    var [pincode,setPinCode] = useState("");
    var [qualification,setQualification] = useState("");
    var [gender,setGender] = useState("");


    var [citiesId,setCitiesId] = useState("");  
    var [stateId,setStateId] = useState("");
    var [imagename,setimagename] = useState("");
   
    var [subject,setSubject] = useState("");
    var [contact,setContact] = useState("");
    var [Email,setemail] = useState("");
    var [successMessage,setSuccessMessage] = useState("");
    var [subjectError,setSubjectError] = useState("");
    var [contactError,setContactError] = useState("");
   var [emailError,setEmailError] = useState("");
   var [formvalid,setformvalid] = useState(true);

    const [allportfolio,setAllPortfolio] = useState([]);
    const [allimage,setAllImage] = useState([]);
    
    const gettAllImage = () => {
        var postParams = new FormData();
        postParams.append("id",id);
        axios.post(configData.SERVER_URL+"getporfoliowiseimage.php",postParams).then((response)=>{
            console.log(response);
            if(response.status==200)
            
            {
                setAllImage(response.data);
               
            }
        });
    }
    const getAllPortfolio = () => {
        var postParams = new FormData();
        postParams.append("id",id);
        axios.post(configData.SERVER_URL+"getPortfolioByArchi.php",postParams).then((response)=>{
           
            if(response.status==200)
            {
                setAllPortfolio(response.data);
               
            }
        });
    } 
    const [allproject,setProject] = useState([]);

    const getproject = () => {
        var postParams = new FormData();
        postParams.append("id",id);
        
        axios.post(configData.SERVER_URL+"getProjectByArchitect.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                setProject(response.data);
               
            }
        });
    }
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
            setEmailError("Please Enter Email")
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
        if(subject!==""   && contact!=="" && contact.length==10  && Email!=="" )
       
       {
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
                        alert("Inquiry Request successfully!");
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


    let {id} = useParams();
    useEffect(() =>{
        
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getSinglearchitech.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                console.log(response.data)
                setFirstName(result["first_name"]);
                setLastName(result["last_name"]);
                setPhone(result["phone_no"]);
                setEmail(result["email"]);
               
                setAboutArchitech(result["about_architech"]);
                setPinCode(result["pincode"]);
              
                setQualification(result["qualification"]);
                
                setGender(result["gender"]);
                setAddress(result["address"]);
                setCitiesId(result["city_name"]);
                setStateId(result["state_name"]);
                setimagename(result["photo_file"]);
                getAllPortfolio();
                gettAllImage();
                getproject();
                gettAllImage();
                window.scrollTo(0,0);
        
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
                        <h2>Architect Details</h2>
                        
                    </div>
                   
                </div>
            </div>
          
            <div className="row ratio_55">
                <div className="col-xl-9 col-lg-8 property-grid-2">
                    <div className="our-agent theme-card">
                        <div className="row">
                            <div className="col-sm-6 ratio_landscape">
                                <div className="agent-image">
                                <img src={configData.ARCHITECH_IMAGE + imagename} style={{width:'100%'}}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="our-agent-details">
                                    <h3 className="f-w-600">{firstName} {lastName}</h3>
                                    <h6>Real estate Property Architect</h6>
                                    <ul>
                                        
                                        <li>
                                            <div className="media">
                                            <b>Contact</b>&nbsp;
                                                <div className="media-body">
                                                    <h6>{phone}</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                            <b>Email:</b>&nbsp;
                                                <div className="media-body">
                                                    <h6>{email}</h6>
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
                                       
                                        <li className="with-link">
                                            <div className="media">
                                            <b>Qualification:</b>&nbsp;
                                                <div className="media-body">
                                                    <h6>{qualification}</h6>
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
                                            <b>About Architect:</b>
                                           
                                                <div className="media-body">
                                                    
                                                </div>
                                            </div>
                                        </li>
                                        <h6>{aboutArchitech}</h6>
                                    </ul>
                                </div>
                               
                                
                            </div>
                            
                        </div>
                    </div>
                        
                        <div className="row mt-05">
                        <section className="portfolio-creative odd-even ratio_55">
        <div className="container">
             <div className="filter-panel">
                <div className="top-panel">
                    <div>
                        <h2>Architect Portfolio</h2>
                        
                    </div>
                   
                </div>
                
            </div>
            <div className="column-sm row grid ratio2_3  zoom-gallery-multiple">
                    {
                                            allportfolio.map((row,index)=>{
                                                return(
                        <div className="col-lg-4 col-sm-6 sale grid-item wow fadeInUp" data-className="sale">
                            <div className="grid-box">
                                <div className="overlay">
                                    <div className="portfolio-image">
                                        <a href={configData.PORTFOLIO_IMAGE + row.photo_file}>
                                            <img src={configData.PORTFOLIO_IMAGE + row.photo_file} className="bg-img" alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div className="property-text">
                                    <center><h3>{row.title_portfolio}</h3></center>
                                </div>
                                <center>
                                <div className="agent-content me-5" style={{marginTop:'-10%'}}>
                               
                                <Link to={"/architectportfoliodetails/"+row.portfolio_id}>View Portfolio <i className="fas fa-arrow-right"></i></Link>
                                
                                </div>
                                </center>

                            </div>
                        </div>
                        );
                    })
                } 
                        
                        
                    </div>
        </div>

</section>
                           
                        </div>

                       

                        <div className="row">
                        <section className="portfolio-creative odd-even ratio_55">
        <div className="container">
             <div className="filter-panel">
                <div className="top-panel">
                    <div>
                        <h2>Architect Project</h2>
                        
                    </div>
                </div>
            </div>
            {
                                            allproject.map((row,index)=>{
                                                return(
            <div className="row">
                
                <div className="col-lg-6 mt-2">
               
                    <div className="wow zoomIn">
                  
                    <img src={configData.PROJECT_IMAGE + row.photo_file_project}  className="agent-image" width="300" height="300" style={{borderRadius:'2%',width:'100%'}}/>
                    </div>
                   
                </div>
                <div className="col-lg-6 mt-2">
                <div className="grid-box" style={{height:'100%'}}>
                <div className="property-text" >
                                    <center><h3>{row.project_title}</h3></center>
                                   
                                </div>
                                <center>
                                <div className="agent-content me-5" style={{marginTop:'%'}}>
                               
                                <Link to={"/architectprojectdetails/"+row.project_id} >View Project <i className="fas fa-arrow-right"></i></Link>
                               
                                </div>
                                </center>
                                </div>
                                </div>
                
                {/* <div className="col-lg-6 mt-2">
                    <div className="advance-card">
                        
                            <center>
                            <h3>{row.project_title}</h3>
                            <p className="font-roboto">
                            {row.description}</p>
                            <Link to='' className="btn btn-gradient btn-pill color-1">Read More</Link>
                            </center>
                        
                    </div>
                </div> */}
               
            </div>
           );
        })
    } 
        </div>

</section>
                           
                        </div>
                    
                </div>
                {localStorage.getItem("isclientlogin") && <div className="col-xl-3 col-lg-4">
                    <div className="left-sidebar single-sidebar sticky-cls">
                        <div className="filter-cards">
                            <div className="advance-card">
                                <h6>Request exploration</h6>
                                <div className="category-property">
                                            {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                            
                                            <form method='POST' onSubmit={handleForm}  className="row gx-3">
                                            
                                    <div className="form-group col-md-12 col-sm-6">
                                                    <label>Subject</label>
                                                        <input type="text" className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="enter your subject"  ></input>
                                                        {(formvalid===false && subject=="")&&(<><p className="error">{subjectError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-12 col-sm-6">
                                                        <label>Email</label>
                                                        <input type="email" className="form-control" value={Email} onChange={(e) => setemail(e.target.value)} placeholder="enter your Email"  ></input>
                                                        {(formvalid===false && Email=="")&&(<><p className="error">{emailError}</p></>)}
                                                {(formvalid===false && Email!="" && !validateEmail(Email))&&(<><p className="error">Please Enter Valid Email</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-12 col-sm-6">
                                                        <label>Contact</label>
                                                        <input type="tel" className="form-control" placeholder="enter your Contact" value={contact} onChange={(e) => setContact(e.target.value)} maxLength={10}></input>
                                                        {(formvalid===false && contact=="")&&(<><p className="error">{contactError}</p></>)}
                                                {(formvalid===false && contact!="" && contact.length!=10)&&(<><p className="error">Please Enter valid mobile number</p></>)}

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


export default ArchitectDetails