import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';

const Side = () => {
    

    var [firstName,setfirstName] = useState("");
    var [lastName,setlastName] = useState("");
    var [contact,setcontact] = useState("");
    var [email,setemail] = useState("");  
    
    var [imagename,setimagename] = useState("");
     
    

     
       
        useEffect(()=>{
        var postParams = new FormData();
        postParams.append("id",localStorage.getItem("userid"));

        axios.post(configData.SERVER_URL+"getSingleuser.php",postParams).then((response)=>{
            if(response.status == 200)
            
            {
                var result = response.data;
                setfirstName(result["firstname"]);
                setlastName(result["lastname"]);
                setcontact(result["contact"]);
                setemail(result["email_user"]);
              
                setimagename(result["photo_file"]);
                
                 
            }
        });


    })


   
       


   
     
  

return (

    <>
     <div className="col-lg-3">
                        <div className="sidebar-user sticky-cls">
                            <div className="user-profile">
                                <div className="media">
                                    <div className="change-pic">
                                    <td><img src={configData.USER_IMAGE + imagename} ></img></td>
                                        <div className="change-hover">
                                            <button type="button" className="btn"><i data-feather="camera"></i></button>
                                            <input className="updateimg" type="file" name="img" onchange="readURL(this,0)"></input>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <h5>{firstName} {lastName}</h5>
                                        <h6 className="font-roboto">{email}</h6>
                                        <h6 className="font-roboto mb-0">{contact}</h6>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="dashboard-list">
                                <ul className="nav nav-tabs right-line-tab">
                                    <li className="nav-item"><Link to="/usermyprofile" className="nav-link">My Profile</Link></li>
                                           
                                    <li className="nav-item"><Link to="/userproperty" className="nav-link" >Your Property</Link></li>
                                    
                                    <li className="nav-item"><Link to="/userpropertymedia" className="nav-link" >Your Property Media</Link></li>
                                    <li className="nav-item"><Link to="/userpropertyfacilitites" className="nav-link" >Add Property Facilitites</Link></li>
                                           
                                    <li className="nav-item"><Link to="/usercomments" className="nav-link" >Your Commnets</Link></li>
                                            
                                    <li className="nav-item"><Link to="/userpackage"className="nav-link">My Package</Link>
                                    </li>
                                    <li className="nav-item"><Link to="/userplan"className="nav-link">My Plan Purchase</Link></li>

                                    <li className="nav-item"><Link to="/userinquiry" className="nav-link" >My Inquiry</Link></li>

                                    <li className="nav-item"><Link to="/userarchitectinquiry" className="nav-link" >My Architect Inquiry</Link></li>

                                    <li className="nav-item"><Link to="/userpropertyinquiry" className="nav-link" >My Property Inquiry</Link></li>

                                    <li className="nav-item"><Link to="/userchangepassword" className="nav-link">Change Password</Link></li>
                                    <li className="nav-item"><Link  to="/userlogout" className="nav-link">Log Out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>



    
    </>
    )
}
   
export default Side
