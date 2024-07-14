import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useParams } from "react-router-dom";
import configData from '../config.json';

const Architectside = () => {
    

    var [firstName,setFirstName] = useState("");
    var [lastName,setLastName] = useState("");
    var [phone,setPhone] = useState("");
    var [email,setEmail] = useState("");  
    var [password,setPassword] = useState("");
    var [confirmpassword,setConfirmPassword] = useState("");
    var [aboutArchitech,setAboutArchitech] = useState("");
    var [address,setAddress] = useState("");
    var [pincode,setPinCode] = useState("");
    var [landmark,setLandMark] = useState("");
    var [qualification,setQualification] = useState("");
    var [latitude,setLatitude] = useState("");
    var [longitude,setLongitude] = useState("");
    var [verify,setVerify] = useState("");
    var [block,setBlock] =useState("");
    var [aadhar,setAadhar] =useState("");
    var [aadhar_photo,setaadhar_photo] =useState("");
    var [gender,setGender] = useState("");
    var [photo_file,setphoto_file] = useState("");

    var [citiesId,setCitiesId] = useState("");  
    var [stateId,setStateId] = useState("");
    var [imagename,setimagename] = useState("");
    var [imagenames,setimagenames] = useState("");
 

    
    let {id} =useParams();
    useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",localStorage.getItem("userid"));

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
                setLandMark(result["landmark"]);
                setQualification(result["qualification"]);
               
                
                setAadhar(result["aadhar"]);
                setGender(result["gender"]);
                setAddress(result["address"]);
                setCitiesId(result["city_name"]);
                setStateId(result["state_name"]);
                setimagename(result["photo_file"]);
                window.scrollTo(0, 0);
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
                                    <td>
                                        <img src={configData.ARCHITECH_IMAGE + imagename} ></img></td>
                                        <div className="change-hover">
                                            <button type="button" className="btn"><i data-feather="camera"></i></button>
                                            <input className="updateimg" type="file" name="img" onchange=""></input>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <h5>{firstName} {lastName}</h5>
                                        <h6 className="font-roboto">{email}</h6>
                                        <h6 className="font-roboto mb-0">{phone}</h6>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="dashboard-list">
                                <ul className="nav nav-tabs right-line-tab">
                                    <li className="nav-item"><Link to="/architechmyprofile" className="nav-link">My Profile</Link></li>
                                           
                                    <li className="nav-item"><Link to="/architectportfolio" className="nav-link" >Architect Portfolio</Link></li>
                                    <li className="nav-item"><Link to="/architectportfolioimage" className="nav-link" >Portfolio Images</Link></li>

                                    <li className="nav-item"><Link to="/architectplans" className="nav-link" >My Plans</Link></li>
                                    <li className="nav-item"><Link to="/architectplansfiles" className="nav-link" >My Plans Files</Link></li>
                                    <li className="nav-item"><Link to="/architectplanpurchase"className="nav-link">My Plan Purchase</Link></li>
                                    <li className="nav-item"><Link to="/architectproject" className="nav-link" >My Project</Link></li>
 
                                            
                                    
                                    <li className="nav-item"><Link to="/architectarticles" className="nav-link" >My Articles</Link></li>

                                    <li className="nav-item"><Link to="/architectcustomerinquiry" className="nav-link" >Customer Inquiry</Link></li>

                                    <li className="nav-item"><Link to="/architectchangepassword" className="nav-link">Change Password</Link></li>
                                    <li className="nav-item"><Link to="/architectlogout" className="nav-link">Log Out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>



    
    </>
    )
}
   
export default Architectside
