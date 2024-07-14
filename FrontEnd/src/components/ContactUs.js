import React, { useEffect, useState} from 'react'
import axios  from 'axios';
import { Link, useParams } from "react-router-dom";
import configData from '../config.json';

const ContactUs = ()=> {
    var [name,setname] = useState("");  
    var [contact,setContact] = useState("");
    var [email,setemail] = useState("");
   
    var [feedback,setfeedback] = useState("");

    var [nameError,setnameError] = useState("");  
    var [contactError,setContactError] = useState("");
    var [emailError,setemailError] = useState("");
    var [formvalid,setformvalid] = useState(true);  

    var [feedbackError,setfeedbackError] = useState("");    var [successMessage,setSuccessMessage] = useState("");
    var [feedback_date,setfeedback_date] = useState("");

    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
const handleForm = (e) => {
    e.preventDefault();
    
    //API
    if(name=="")
        {
            setformvalid(false);
            setnameError("Please Enter Content")
        }
        if(email=="")
        {
            setformvalid(false);
            setemailError("Please Enter Email")
        }
        if(!validateEmail(email))
        {
            setformvalid(false);
            //setemailError("Please Enter Email");
        }
        if(feedback=="")
        {
            setformvalid(false);
            setfeedbackError("Please Enter Content");
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
        if(name!==""  && contact=="" && contact!==""  && email!=="" && email=="" && feedback!=="")
         {  
            setformvalid(true)

     var postParams = new FormData();

     postParams.append("name",name);
     postParams.append("contact",contact);
     postParams.append("email",email);
     postParams.append("feedback",feedback);
     postParams.append("feedback_date",feedback_date);

     postParams.append("userid",localStorage.getItem("userid"));
    //  postParams.append("architechid",localStorage.getItem("architectid"));
     

     axios.post(configData.SERVER_URL+"addfeedback.php",postParams).then((response)=>{
     if(response.status == 200)
        {
            var result = response.data;
             alert(result)
            if(result=="Yes")
                { 
                    window.scrollTo(0, 0);
                    setSuccessMessage("Feedback Inserted successfully!");
                   // alert("Data Inserted");
                }
            else
            {
                alert("Error");
            }
        }
     
    });

      

} 
};
    

  return (
    <>
    <section className="small-section contact-2">
<div className="container">
    <div className="row gx-3">
        <div className="col-xl-6 col-lg-5">
            <div className="log-in px-xxl-5 px-lg-4">
                <div className="mb-4 text-start">
                    <h2>Let's Get In Touch</h2>
                </div>
                {successMessage!=="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                <form method='POST' onSubmit={handleForm}  className="row gx-3">
                                        <div className="form-group col-md-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i data-feather="user"></i>
                                </div>
                            </div>
                            <input type="text" className="form-control" placeholder="Enter your name" value={name} onChange={(e) => setname(e.target.value)}required=""></input>

                        </div>
                        {(formvalid===false && name=="")&&(<><p className="error">{nameError}</p></>)}

                    </div>
                    <div className="form-group col-md-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i data-feather="phone" ></i>
                                </div>
                            </div>
                            <input 
                                    placeholder="phone number"
                                    className="form-control" 
                                   
                                    // onkeypress="javascript:return isNumber(event)"
                                  
                                    required=""value={contact} onChange={(e) => setContact(e.target.value)} maxLength={10}>
                                       
                                        </input>
                                      
                        </div>
                        {(formvalid===false && contact=="")&&(<><p className="error">{contactError}</p></>)}
                                                        {(formvalid===false && contact!="" && contact.length!=10 && <><p className="error">Please Valid Mobile Number</p></>)}

                    </div>
                    <div className="form-group col-md-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i data-feather="mail"></i>
                                </div>
                            </div>
                            <input type="email" className="form-control" placeholder="email address" value={email} onChange={(e) => setemail(e.target.value)} required=""></input>
                           
                        </div>
                        {(formvalid===false && email=="")&&(<><p className="error">{emailError}</p></>)}
                                                        {(formvalid===false && email!="" && !validateEmail(email))&&(<><p className="error">Please Enter Valid Email</p></>)}

                    </div>
                    <div className="form-group col-md-6">
                        <textarea className="form-control" placeholder="Write Something Here" value={feedback} onChange={(e) => setfeedback(e.target.value)}   rows="3">
                        </textarea>
                        {(formvalid===false && feedback=="")&&(<><p className="error">{feedbackError}</p></>)}

                    </div>
                   
                    &nbsp;&nbsp;&nbsp;
                    <div className="form-group col-md-6">
                        <button className="btn btn-gradient color-2 btn-flat" type="submit">Send Your Message</button>
                                 </div>     
                </form>
            </div>
        </div>
        <div className="col-xl-6 col-lg-7 contact_section contact_wrap_2">
            <div className="row contact-detail theme-card">
                <div className="col-lg-12 p-0">
                    <div className="contact-content">
                        <h2>Welcome to Alacto !!</h2>
                        <p className="font-roboto">Connected residences might be owned by a single entity and leased out, 
                            or owned separately with an agreement covering the relationship between units and common areas and concerns.</p>
                    </div>
                </div>
                
                <div className="col-sm-12 p-0">
                    <div className="contact_wrap shadow-none text-start ps-0">
                        <i data-feather="mail"></i>
                        <h4>Online Contact</h4>
                        <ul>
                            <li><b>Inquiries</b>: therealalacto103@gmail.com</li>
                        
                            <li><b>Site</b> :www.alacto.com</li>
                            <li><b>Contact</b>: +91 7069603017</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
       
        



    </div>
</div>
</section>
    
    </>
  )
}

export default ContactUs