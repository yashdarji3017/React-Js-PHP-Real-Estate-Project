import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import Side from './Side';

const Editprofile = () => {

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
    var [imagenames,setimagenames] = useState("");
    var [oldimage,setoldimage] = useState("");
    var [oldimages,setoldimages] = useState("");
    
    var [successMessage,setSuccessMessage] = useState("");
    var [firstNameError,setfirstNameError] = useState("");
    var [lastNameError,setlastNameError] = useState("");
    var [contactError,setcontactError] = useState("");
    var [emailError,setemailError] = useState("");  
    var [aboutError,setaboutError]= useState("");
    var [aadhar_noError,setaadhar_noError] = useState("");
    var [genderError,setgenderError] = useState("");
    var [typeError,settypeError] = useState("");
    var [citiesIdError,setCitiesIdError] = useState("");  
    var [stateIdError,setStateIdError] = useState("");
    var [addressError,setaddressError] = useState("");
    var [pincodeError,setpincodeError] = useState("");
    
    var [formvalid,setformvalid] = useState(true);  
    const [allcities,setCities] = useState([]);
    const [allstates,setStates] = useState([]);

    const getAllCities = (stateid) => {
        //alert(stateid);
        var postParams = new FormData();
        postParams.append("id",stateid);

        axios.post(configData.SERVER_URL+"getCityByState.php",postParams).then((response)=>{
            if(response.status==200)
            {
                setCities(response.data);
            }
        });
    }
    
     const handleCitiesChange = (e) =>{
        var  citiesid = e.target.value;
         setcitiesId(citiesid);
         getAllStates(citiesid);
     };


    

     const getAllStates = () => {
        axios.get(configData.SERVER_URL+"getState.php").then((response)=>{
             if(response.status==200)
             {
                 setStates(response.data);
             }
         });
     }
     const handleStateChange = (e) =>{
        var stateid = e.target.value;
        setstateId(stateid);
        getAllCities(stateid);
     };
     const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
 
    const handleForm = (e) => {
        e.preventDefault();
        if(firstName=="")
        {
            setformvalid(false);
            setfirstNameError("Please Enter First Name")
        }
        if(lastName=="")
        {
            setformvalid(false);
            setlastNameError("Please Enter Last Name")
        }
        if(contact=="")
        {
            setformvalid(false);
            setcontactError("Please Enter Contact Number")
        }
        if(contact.length!=10)
        {
            setformvalid(false);
            // setcontactError("Please Enter Contact Number")
        }
        if(email=="")
        {
            setformvalid(false);
            setemailError("Please Enter Email");
        }
        if(!validateEmail(email))
        {
            setformvalid(false);
            //setemailError("Please Enter Email");
        }
       
        if(about=="")
        {
            setformvalid(false);
            setaboutError("Please Enter About User")
        }
        if(gender=="")
        {
            setformvalid(false);
            setgenderError("Please Select User")
        }
       
        if(type=="")
        {
            setformvalid(false);
            settypeError("Select Type Of User")
        }
        if(citiesId=="")
        {
            setformvalid(false);
            setCitiesIdError("Please Select City")
        }
        if(stateId=="")
        {
            setformvalid(false);
            setStateIdError("Please Select State") 
        }
        if(address=="")
        {
            setformvalid(false);
            setaddressError("Please Enter Address")
        }
        if(pincode=="")
        {
            setformvalid(false);
            setpincodeError("Please Enter Pincode")
        }
        
        if(aadhar_no=="")
        {
            setformvalid(false);
            setaadhar_noError("Please Enter Aadhar No")
        }
        if(aadhar_no.length!=12)
        {
            setformvalid(false);
            // setcontactError("Please Enter Contact Number")
        }
        if(firstName!=="" && lastName!=="" && contact!=="" && contact.length==10 && email!=="" &&   about!=="" && aadhar_no!==""  && gender!==""
        && type!=="" && citiesId!=="" && stateId!=="" && address!=="" && aadhar_no.length==12)
        {
        setformvalid(true)
        var postParams = new FormData();
        postParams.append("firstName",firstName);
        postParams.append("lastName",lastName);
        postParams.append("contact",contact);
        postParams.append("email",email);
        postParams.append("password",password);
        postParams.append("confirm_password",confirm_password);
        postParams.append("about",about);
        postParams.append("aadhar_no",aadhar_no);
        postParams.append("gender",gender);
        postParams.append("verify",verify);
        postParams.append("type",type);              
        postParams.append("citiesId",citiesId);                 
        postParams.append("stateId",stateId);               
        postParams.append("address",address);                
        postParams.append("pincode",pincode);                
        postParams.append("photo_file",photo_file);    
        postParams.append("aadhar_photo",aadhar_photo);     
        postParams.append("id",id);
        postParams.append("oldimage",oldimage)
        postParams.append("oldimages",oldimages);
         
        axios.post(configData.SERVER_URL+"update/updateuser.php", postParams).then((response)=>{
            
        if(response.status == 200)
            {
                var result = response.data;
                  if(result=="Yes")
                  { 
                    window.scrollTo(0, 0);
                    setSuccessMessage("User Update successfully!");
                   // alert("Data Inserted");
                    }
                else
                {
                    alert("Error");

                }
            }
        });
    }
    else
        {
           
            window.scrollTo(0, 0);
        }
    }; 
        let {id} =useParams(); 

        useEffect(()=>{
        var postParams = new FormData();
        postParams.append("id",id);

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
                setcitiesId(result["city_id"]);
                setstateId(result["state_id"]);
                setpincode(result["pincode"]);
                setimagename(result["photo_file"]);
                setimagenames(result["aadhar_photo"]);
                setoldimage(result["photo_file"]);
                setoldimages(result["aadhar_photo"]);
                getAllStates();
                getAllCities(result["state_id"]);
                 window.scrollTo(0,0);
            }
        });


    },[]);


        
       
       
        //API
   
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
                                                
                                            </div>
                                            <div className="row">
                                            <h5>Edit Profile</h5>&nbsp;
                                            <div className="card-body admin-form">
                                            {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                                                                      <form method='POST' onSubmit={handleForm}  className="row gx-3">
                                                    <div className="form-group col-md-4 col-sm-6">
                                                        <label>First Name</label>
                                                        <input type="text" value={firstName} onChange={(e) => setfirstName(e.target.value)} className="form-control" placeholder="enter your firstname"   ></input>
                                                        {(formvalid===false && firstName=="")&&(<><p className="error">{firstNameError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-6">
                                                        <label>Last Name </label>
                                                        <input type="text" value={lastName} onChange={(e) => setlastName(e.target.value)} className="form-control" placeholder="enter your lastname"   ></input>
                                                        {(formvalid===false && lastName=="")&&(<><p className="error">{lastNameError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-6">
                                                        <label>Contact</label>
                                                        <input type="tel" value={contact} onChange={(e) => setcontact(e.target.value)} className="form-control" placeholder="enter your contact"   maxLength={10} ></input>
                                                        {(formvalid===false && contact=="")&&(<><p className="error">{contactError}</p></>)}
                                                        {(formvalid===false && contact!="" && contact.length!=10 && <><p className="error">Please Enter Valid Mobile Number</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-12 col-sm-6">
                                                        <label>Email</label>
                                                        <input type=" email" value={ email} onChange={(e) => setemail(e.target.value)} className="form-control" placeholder="enter your email"   ></input>
                                                        {(formvalid===false && email=="")&&(<><p className="error">{emailError}</p></>)}
                                                        {(formvalid===false && email!="" && !validateEmail(email))&&(<><p className="error">Please Enter Valid Email</p></>)}

                                                    </div>
                                                   
                                                    <div className="form-group col-md-4 col-sm-6">
                                                        <label>Photo</label>
                                                        <input type="file" className="form-control"  onChange={(e) => setphoto_file(e.target.files[0])}></input>
                                                        <img src={ configData.USER_IMAGE + imagename} width="100"/>

                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-6">
                                                <label  >User Type  </label>
                                                <select value={type} className="form-control" onChange={(e)=>settype(e.target.value)}>
                                                    <option>Please select Tyep</option>
                                                    <option value="Agent" >Agent</option>
                                                    <option value="User">User</option>
                                                </select>
                                                {(formvalid===false && type=="")&&(<><p className="error">{typeError}</p></>)}

                                            </div>
                                            <div className="form-group col-md-4 col-sm-6">
                                                <label  >Gender  </label>
                                                <select value={gender} className="form-control" onChange={(e)=>setgender(e.target.value)}>
                                                    <option >Please select gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                                {(formvalid===false && gender=="")&&(<><p className="error">{genderError}</p></>)}

                                            </div>
                                                     
                                                    <div className="form-group col-sm-6">
                                                <label>State</label>
                                                <div>
                                                <select value={stateId} onChange={handleStateChange} className="form-control"  >
                                                            <option>Please Enter State</option>
                                                            {
                                            allstates.map((row,index)=>{
                                                return(  
                                                    <option value={row.state_id}>{row.state_name}</option>
                                                 );
                                            })
                                        }
                                                        </select>
                                                        {(formvalid===false && stateId=="")&&(<><p className="error">{stateIdError}</p></>)}

                                                    </div>
                                             </div>
                                             <div className="form-group col-sm-6">
                                                <label>City</label>
                                                <div>
                                                       <select value={citiesId} onChange={handleCitiesChange} className="form-control"  >
                                                            <option>Please Select City</option>
                                                            {
                                            allcities.map((row,index)=>{
                                                return(  
                                                    <option value={row.city_id}>{row.city_name}</option>
                                                 );
                                            })
                                        }
                                                        </select>
                                                        {(formvalid===false && citiesId=="")&&(<><p className="error">{citiesIdError}</p></>)}

                                                    </div>
                                             </div>
                                             <div className="form-group col-md-6 col-sm-6">
                                                        <label>Address</label>
                                                        <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} className="form-control" placeholder="enter your About" name="about" ></input>
                                                        {(formvalid===false && address=="")&&(<><p className="error">{addressError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-6 col-sm-6">
                                                        <label>Pincode</label>
                                                        <input type="text" value={pincode} onChange={(e) =>  setpincode(e.target.value)} className="form-control" placeholder="enter your Aadhar card No" name="aadhar_no" ></input>
                                                        {(formvalid===false && pincode=="")&&(<><p className="error">{pincodeError}</p></>)}

                                                    </div>
                                             <div className="form-group col-md-6 col-sm-6">
                                                        <label>About User/Agent</label>
                                                        <input type="text" value={about} onChange={(e) => setabout(e.target.value)} className="form-control" placeholder="enter your About" name="about" ></input>
                                                        {(formvalid===false && about=="")&&(<><p className="error">{aboutError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-6 col-sm-6">
                                                        <label>Aadhar Card No</label>
                                                        <input type="text" value={aadhar_no} onChange={(e) =>  setaadhar_no(e.target.value)} className="form-control" placeholder="enter your Aadhar card No" name="aadhar_no" maxLength={12}></input>
                                                        {(formvalid===false && aadhar_no=="")&&(<><p className="error">{aadhar_noError}</p></>)}
                                                        {(formvalid===false && aadhar_no!="" && aadhar_no.length!=12 && <><p className="error">Please Enter Valid Aadhar Number</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-12 col-sm-6">
                                                        <label>Aadhar Card Photo</label>
                                                        <input type="file" className="form-control"  onChange={(e) => setaadhar_photo(e.target.files[0])}></input>
                                                        <a target="_blank" href={ configData.USER_IMAGES + imagenames} >View AadharCard Image</a>

                                                    </div>
                                                   
                                                
                                                <div className="form-btn">
                                                    <button type=" submit" className="btn btn-pill btn-gradient color-4">Update</button>
                                                    <button type="button" className="btn btn-pill btn-dashed color-4">Cancel</button>
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

export default Editprofile
