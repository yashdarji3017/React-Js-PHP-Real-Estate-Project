import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';

const Otp = () => {
    var [otp,setotp] = useState("");
    var [successMessage,setSuccessMessage] = useState("");
    var navigate = useNavigate()


    const handleclick=(e)=>{
        e.preventDefault();
        var postParams = new FormData();
        var uid = localStorage.getItem("uid");
        postParams.append("otp",otp); 
        postParams.append("uid",uid); 
        postParams.append("email",localStorage.getItem("email")); 



        axios.post(configData.SERVER_URL+"checkotp.php", postParams).then((response)=>{
            
        if(response.status == 200)
            {
                var result = response.data;
                alert(result)
                if(result=="Yes")
                { 
                 window.scrollTo(0, 0);
                 alert("Your Registration  successfully!");
                // alert("Data Inserted");
                navigate("/");
                 }
                else
                {
                    alert("Error");
                }
            }
        });
        //API
    
            window.scrollTo(0, 0);
        
    }; 
        

   
   
   
    return (
        <>
           
                     <section className="agent-section property-section">
                      <div className="container">
                         <div className="col-lg-12">
                             <div className="filter-panel">
                                  <div className="top-panel">
                                       <div>
                                   <h2>Enter OTP</h2>
                        
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
                                                <label>OTP</label>
                                                <input type="text" value={otp} onChange={(e) => setotp(e.target.value)} className="form-control" placeholder="enter your OTP"  ></input>
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

export default Otp;
