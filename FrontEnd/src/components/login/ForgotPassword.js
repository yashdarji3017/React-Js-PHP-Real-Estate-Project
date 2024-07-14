import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';

const ForgotPassword = () => {
    var [emailid,setemailid] = useState("");
    var [password,setpassword] = useState("");

    var [successMessage,setSuccessMessage] = useState("");
    var navigate = useNavigate()


    const handleclick=(e)=>{
        e.preventDefault();
        var postParams = new FormData();
        postParams.append("emailid",emailid); 
        postParams.append("password",password); 
        axios.post(configData.SERVER_URL+"forgotpassword.php",postParams).then((response)=>{
            
        if(response.status == 200)
        {
            var result = response.data;

           
           
            if(result=="Yes")
            { 
                alert("Password Was Sent Your Email Account");
                navigate("/login");
               // alert("Data Inserted");
            }
            else
            {
                alert("Email Id Not Found In Database!!!");
            }
        }
        });
        //API
    
            window.scrollTo(0, 0);
        
    };  
     useEffect(() =>{
        window.scrollTo(0,0);
       
       
    },[]);
  
    return (
        <>
           
                     <section className="agent-section property-section">
                      <div className="container">
                         <div className="col-lg-12">
                             <div className="filter-panel">
                                  <div className="top-panel">
                                       <div>
                                   <h2>Enter Email</h2>
                        
                                 </div>
                                    </div>
                                 </div>

                    <div className="container-fluid">
                        <div className="row">
                            <center>
                            <div className="col-lg-6">
                                <div className="card">
                                   
                                    <div className="card-body admin-form">
                                    

                                    <form method='POST' onSubmit={handleclick}  className="row gx-3">
                                            <div className="form-group col-sm-12">
                                                <label>Enter Your Email</label>
                                                <input type="email" value={emailid} onChange={(e) => setemailid(e.target.value)} className="form-control" placeholder="enter Your Email"  ></input>
                                            </div>
                                            <div className="form-btn">
                                            <button type="submit" className="btn btn-pill btn-gradient color-1">Submit</button>&nbsp;
                                            
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
</section>


<br></br>

        </>

  )
}

export default ForgotPassword;
