import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import AgentSide from './AgentSide';

const EditAgentpropertyinquiryresponse = () => {
    var [username,setusername] = useState("");
    var [userid,setuserId] = useState("");

    var [propertyid,setpropertyid] = useState("");
  var [inquiry,setinquiry] = useState("");
  var [contact,setcontact] = useState("");
  var [status,setstatus] = useState("");
  var [inquiry_date,setinquiry_date] = useState("");
    var [status,setstatus] = useState("");
    var [statusError,setstatusError] = useState("");
   
    var [successMessage,setSuccessMessage] = useState("");

    var [formvalid,setformvalid] = useState(true);  

    
    
    
     
     
    const handleForm = (e) => {
        e.preventDefault();
        if(status=="")
        {
            setformvalid(false);
            setstatusError("Please Enter Title")
        }
        
        if(status!=="" )
        {
       
      setformvalid(true)
        var postParams = new FormData();
        postParams.append("status",status);
       
        postParams.append("id",id);

          
 
        axios.post(configData.SERVER_URL+"update/updateuserpropertyinquiryresponse.php",postParams).then((response)=>{
           
        if(response.status == 200)
            {
                var result = response.data;
                alert(result)
                if(result=="Yes")
                { 
                    window.scrollTo(0, 0);
                    setSuccessMessage("Your Respone Send!");
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
    else
        {

            window.scrollTo(0, 0);
        }
    }; 
    let {id} =useParams();
    useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);
        

        axios.post(configData.SERVER_URL+"getSinglepropertyinquiry.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                setuserId(result["firstname"]);
                setusername(result["lastname"]);
                setpropertyid(result["property_title"]);
                setinquiry(result["inquiry_text"]);
                setcontact(result["contact"]);
                setstatus(result["status"]);
                setinquiry_date(result["inquiry_date"]);
                window.scrollTo(0,0)


            }


        }); 
    },[]); 
  return (
    <div>
       <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <AgentSide/>
                    <div className="col-lg-9">
                        <div className="dashboard-content">
                            <div className="my-profile" id="profile">
                                <div className="profile-info">
                                    <div className="common-card">
                                        <div className="user-name media">
                                            <div className="media-body">
                                                
                                            </div>
                                            <div className="row">
                                            <center>
                                            <h2>Response To Inquiry</h2>&nbsp;</center>
                                            <div className="card-body admin-form">
                                            {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                           
                                            <form method='POST' onSubmit={handleForm} className="row gx-3">
                                                <div className="form-group col-md-12 col-sm-6">
                                                        <label>Status<span className="font-danger">*</span></label>
                                                        <input type="text" value={status} onChange={(e) => setstatus(e.target.value)} className="form-control" placeholder="enter your Status"  required=""></input>
                                                        {(formvalid===false && status=="")&&(<><p className="error">{status}</p></>)}   

                                                    </div>
                                                   
                                            
                                            <div className="form-btn">
                                                    <button type="submit" className="btn btn-pill btn-gradient color-4">Submit</button>
                                                    &nbsp;<button type="button" className="btn btn-pill btn-dashed color-4">Cancel</button>
                                                </div>
                                                 </form>
                                                
                                            </div>
                                        </div>

                                        </div>
                                        
                                       
                                    </div>
                                    {/* <div className="common-card">
                                        <div className="row">
                                            <div className="col-xxl-6 col-xl-7">
                                                <div className="information-detail">
                                                    <div className="common-header">
                                                        <h5>About</h5>
                                                    </div>
                                                    <div className="information">
                                                        <ul>
                                                            <li>
                                                                <span>Gender :</span>
                                                                <p>{gender}</p>
                                                            </li>
                                                            <li>
                                                                <span>Is Verify :</span>
                                                                <p>{verify}</p>
                                                            </li>
                                                            <li>
                                                                <span>Phone number :</span>
                                                                    {contact}
                                                               
                                                            </li>
                                                            <li>
                                                                <span>Address :</span>
                                                                <p>{address},{citiesId},{pincode},{stateId}</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                 
                                            </div>
                                            <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-0">
                                                <div className="about-img d-xl-block d-none">
                                                    <img src="../assets/images/inner-pages/2.png" className="img-fluid" height="20" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    </div>
  )
}

export default EditAgentpropertyinquiryresponse
