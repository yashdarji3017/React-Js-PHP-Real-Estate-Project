import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import Side from './Side';

const Myprofile = () => {

    var [firstName,setfirstName] = useState("");
    var [lastName,setlastName] = useState("");
    var [contact,setcontact] = useState("");
    var [email,setemail] = useState("");  
    var [password,setpassword] = useState("");
    var [confirm_password,setconfirm_password] = useState("");
    var [about,setabout]= useState("");
    var [aadhar_no,setaadhar_no] = useState("");
    var [gender,setgender] = useState("");
    var [verify,setverify] = useState("");
    var [type,settype] = useState("");
    var [citiesId,setcitiesId] = useState("");  
    var [stateId,setstateId] = useState("");
    var [address,setaddress] = useState("");
    var [pincode,setpincode] = useState("");
    var [photo_file,setphoto_file] = useState("");
    var [aadhar_photo,setaadhar_photo] = useState("");
    var [imagename,setimagename] = useState("");
    var [imagename1,setimagename1] = useState("");
    var [userid,setuserid] = useState("");
    

     
       
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
                setpassword(result["password"]);
                setconfirm_password(result["confirm_password"]);
                setabout(result["about"]);
                setaadhar_no(result["aadhar_no"]);
                setgender(result["gender"]);
                setaddress(result["address"]);
                setverify(result["verify"]);
                settype(result["type"]);
                setcitiesId(result["city_name"]);
                setstateId(result["state_name"]);
                setpincode(result["pincode"]);
                setimagename(result["photo_file"]);
                setimagename1(result["aadhar_photo"]);
                setuserid(result["user_id"]);
                window.scrollTo(0,0);
                 
            }
        });


    },[]);


  return (
    <div>
       <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <Side/>
                    <div className="col-lg-9">
                        <div className="dashboard-content">
                            <div className="my-profile" id="profile">
                                <div className="profile-info">
                                    <div className="common-card">
                                        <div className="user-name media">
                                            <div className="media-body">
                                                <h5>{firstName} {lastName}&nbsp;<span className="label label-success">Real estate {type}</span></h5>
                                               
                                            </div>
                                            <div className='text-end'>
                                                <Link to={"/edituserprofile/"+localStorage.getItem("userid")} className='label label-light label-flat color-4' style={{fontSize:'20px',color:''}}>Edit Profile</Link>
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
