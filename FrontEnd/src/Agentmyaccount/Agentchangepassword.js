import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
 import AgentSide from './AgentSide';

const Agentchangepassword = () => {

    var [userid,setuserid] = useState("");
    var [oldpassword,setoldpassword] = useState("");
    var [newpassword,setnewpassword] = useState("");
    var [newconfirmpassword,setnewconfirmassword] = useState("");

    var [successMessage,setSuccessMessage] = useState("");
    const [errorMessages,setErrorMessages]=useState([]);


const handleForm = (e) => {
        e.preventDefault();
       
        var postParams = new FormData();
        postParams.append("userid", localStorage.getItem("userid"));
        postParams.append("oldpassword",oldpassword);
        postParams.append("newpassword",newpassword);
        postParams.append("newconfirmpassword",newconfirmpassword);
       
        axios.post(configData.SERVER_URL+"changepassword.php",postParams).then((response)=>{
               
            if(response.status == 200)
                {
                    var result = response.data;
                    alert(result)
                   console.log(response)
                     if(result=="Yes")
                     { 
                        window.scrollTo(0, 0);
                        setSuccessMessage("Password Updated successfully!");
                       // alert("Data Inserted");
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

  
        useEffect(()=>{
            window.scrollTo(0, 0);
    
         
         },[]);    
           
        return (
        <div>
            <div className="user-dashboard small-section">
                <div className="container">
                    <div className="row">
                        <AgentSide/>
                        <div className="col-lg-9">
                            <div className="dashboard-content">
                                <div className="sidebar-user sticky-cls">
                                    <div className="">
                                        <div className="">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Change password</h5>
                                               
                                            </div>
                                            
                                            <div className="modal-body">
                                            {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                            {errorMessages.length > 0 && <div className="alert alert-danger" role="alert">
                                        
                                            <div><span>Validation Summary</span></div>
                                            <ul className="errorlist">
                                                {errorMessages.map(error => <li key={error}>{error}</li>)}
                                            </ul>
                                            </div> }
                                            <form method='POST' onSubmit={handleForm}  className="row gx-3">
                                                    <div className="row gx-3">
                                                        <div className="form-group col-12">
                                                            <label for="p-o">Current Password</label>
                                                            <input type="password" value={oldpassword} onChange={(e) =>  setoldpassword(e.target.value)} className="form-control" />
                                                        </div>
                                                        <div className="form-group col-12">
                                                            <label for="p-n">Enter New Password</label>
                                                            <input type="password" value={newpassword} onChange={(e) =>  setnewpassword(e.target.value)} className="form-control" />
                                                        </div>
                                                        <div className="form-group col-12">
                                                            <label for="p-c">Confirm Your Password</label>
                                                            <input type="password" value={newconfirmpassword} onChange={(e) =>  setnewconfirmassword(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                               
                                            
                                            <center>
                                            <div className="modal-footer">
                                                <button type="submit" className="btn btn-gradient color-2 btn-pill" data-bs-dismiss="modal">Save changes</button>
                                                <button type="button" className="btn btn-dashed color-2 btn-pill" data-bs-dismiss="modal">Cancel</button>

                                            </div>
                                            </center>
                                            </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>




    )
}

export default Agentchangepassword
