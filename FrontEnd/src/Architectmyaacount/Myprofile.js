import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import Architectside from './Architectside'

const Myprofile = () => {
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
                setPassword(result["password"]);
                setConfirmPassword(result["confirm_password"]);
                setAboutArchitech(result["about_architech"]);
                setPinCode(result["pincode"]);
                setLandMark(result["landmark"]);
                setQualification(result["qualification"]);
                setLatitude(result["latitude"]);
                setLongitude(result["longitude"]);
                setVerify(result["verify"]);
                setBlock(result["block"]);
                setAadhar(result["aadhar"]);
                setGender(result["gender"]);
                setAddress(result["address"]);
                setCitiesId(result["city_name"]);
                setStateId(result["state_name"]);
                setimagename(result["photo_file"]);
                setimagenames(result["aadhar_photo"]);
                window.scrollTo(0, 0);
              }
        });


    })
   
  return (
    <div>
     <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <Architectside/>
                    <div className="col-lg-9">
                        <div className="dashboard-content">
                            <div className="my-profile" id="profile">
                                <div className="profile-info">
                                    <div className="common-card">
                                        <div className="user-name media">
                                            <div className="media-body">
                                                <h5>{firstName} {lastName}&nbsp;<span className="label label-success">Real estate Architect</span></h5>
                                               
                                            </div>
                                            <div className='text-end'>
                                                <Link to={"/editarchitectprofile/"+localStorage.getItem("userid")} className='label label-light label-flat color-4' style={{fontSize:'20px',color:''}}>Edit Profile</Link>
                                            </div>
                                        </div>
                                        
                                       
                                    </div>
                                    <div className="common-card">
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
                                                                <span>Email :</span>
                                                                <p>{email}</p>
                                                            </li>
                                                            <li>
                                                                <span>Phone number :</span>
                                                                    {phone}
                                                               
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
                                    </div>
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

export default Myprofile
