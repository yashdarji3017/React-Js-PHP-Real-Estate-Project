import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import Architectside from './Architectside';

const Editarchitectprofile = () => {

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

    var [firstNameError,setFirstNameError] = useState("");
    var [lastNameError,setLastNameError] = useState("");
    var [phoneError,setPhoneError] = useState("");
    var [emailError,setEmailError] = useState("");  
    var [passwordError,setPasswordError] = useState("");
    var [confirmpasswordError,setConfirmPasswordError] = useState("");
    var [aboutArchitechError,setAboutArchitechError] = useState("");
    var [addressError,setAddressError] = useState("");
    var [pincodeError,setPinCodeError] = useState("");
    var [qualificationError,setQualificationError] = useState("");
    
    var [verifyError,setVerifyError] = useState("");
    var [blockError,setBlockError] =useState("");
    var [aadharError,setAadharError] =useState("");
    var [genderError,setGenderError] = useState("");
    var [formvalid,setformvalid] = useState(true);
   
    var [citiesIdError,setCitiesIdError] = useState("");  
    var [stateIdError,setStateIdError] = useState("");
    

    var [citiesId,setCitiesId] = useState("");  
    var [stateId,setStateId] = useState("");
    var [imagename,setimagename] = useState("");
    var [imagenames,setimagenames] = useState("");
    var [oldimage,setoldimage] = useState("");
    var [oldimages,setoldimages] = useState("");
    const [allcities,setCities] = useState([]);
    const [allstates,setStates] = useState([]);
    var [successMessage,setSuccessMessage] = useState("");


    const getAllCities = (stateid) => {
        //alert(stateid);
        var postParams = new FormData();
        postParams.append("id",stateid);

        axios.post(configData.SERVER_URL+"getCityByState.php", postParams).then((response)=>{
            if(response.status==200)
            {
                setCities(response.data);
            }
        });
    }
   

     const handleCitiesChange = (e) =>{
        var  allcities = e.target.value;
         setCitiesId(allcities);
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
        setStateId(stateid);
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
            setFirstNameError("Please Enter FirstName");
        }
         if(lastName=="")
        {
            setformvalid(false);
            setLastNameError("Please Enter LastName");
        }
         if(phone=="")
        {
            setformvalid(false);
            setPhoneError("Please Enter Phone No");
        }
        
        if(phone.length!=10)
        {
            setformvalid(false);
            // setcontactError("Please Enter Contact Number")
        }
        if(aadhar.length!=12)
        {
            setformvalid(false);
            // setcontactError("Please Enter Contact Number")
        }
        if(address=="")
        {
            setformvalid(false);
            setAddressError("Please Enter Address");
        }
       
        if(pincode=="")
        {
            setformvalid(false);
            setPinCodeError("Please Enter Pincode");
        }
       
        
        if(email=="")
        {
            setformvalid(false);
            setEmailError("Please Enter Email");
        }
        if(validateEmail(email))
        {
            setformvalid(false);
            setEmailError("Please Enter Valid Email");
        }
        if(qualification=="")
        {
            setformvalid(false);
            setQualificationError("Please Enter Qualification");
        }
        
        if(aadhar=="")
        {
            setformvalid(false);
            setAadharError("Enter Aadhar Number");
        }
        
        if(gender=="")
        {
            setformvalid(false);
            setGenderError("Please Select Gender");
        }
        
        if(citiesId=="")
        {
            setformvalid(false);
            setCitiesIdError("Please Select City");
        }
        if(stateId=="")
        {
            setformvalid(false);
            setStateIdError("Please select State");
        }
        if(aboutArchitech=="")
        {
            setformvalid(false);
            setAboutArchitechError("Please Enter About Architech");
        }
        if(firstName!=="" && lastName!=="" && phone!=="" && email!=="" && aboutArchitech!=="" && address!=="" && pincode!==""
        && landmark!=="" && qualification!=="" && latitude!=="" && longitude!=="" && gender!=="" && aadhar!=="" &&  citiesId!=="" && stateId!==""&& phone.length==10 && aadhar.length==12 )
        { 
     
    
        setformvalid(true)

        var postParams = new FormData();
        postParams.append("firstName",firstName);
        postParams.append("lastName",lastName);
        postParams.append("phone",phone);
        postParams.append("email",email);
        postParams.append("password",password);
        postParams.append("confirmpassword",confirmpassword);
        postParams.append("aboutArchitech",aboutArchitech);
        postParams.append("address",address);
        postParams.append("pincode",pincode);
        postParams.append("landmark",landmark);
        postParams.append("qualification",qualification);              
        postParams.append("latitude",latitude);                 
        postParams.append("longitude",longitude);               
        postParams.append("block",block);                
        postParams.append("gender",gender);                
        postParams.append("verify",verify);    
        postParams.append("aadhar",aadhar);   
        postParams.append("citiesId",citiesId);      
 
        postParams.append("stateId",stateId);      
         postParams.append("photo_file",photo_file);    
         postParams.append("aadhar_photo",aadhar_photo);      
         postParams.append("id",id);

         postParams.append("oldimage",oldimage);
          
         postParams.append("oldimages",oldimages);
         
      
        
         axios.post(configData.SERVER_URL+"update/updatearchitech.php",postParams).then((response)=>{
            
        if(response.status == 200)
         
            {
                var result = response.data;
                           
                if(result=="Yes")
                {
                    window.scrollTo(0, 0);
                    setSuccessMessage("Architech  Updated successfully!");

                    //alert("Data Inserted");
                }
                else
                {
                    alert("Error");
                }
            }
        });
        // //API
           // //API
    }
           
    window.scrollTo(0, 0);
    };

    let {id} =useParams();

    useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getSinglearchitech.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
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
                setCitiesId(result["city_id"]);
                setStateId(result["state_id"]);
                setimagename(result["photo_file"]);
                setimagenames(result["aadhar_photo"]);
                setoldimage(result["photo_file"]);
                setoldimages(result["aadhar_photo"]);
                getAllStates();
                getAllCities(result["state_id"]);
                window.scrollTo(0, 0);
             }
        });


    },[]);
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
                                                
                                            </div>
                                            <div className="row">
                                            <h5>Edit Architect Profile</h5>&nbsp;
                                            <div className="card-body admin-form">
                                            {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                            
                                                <form method='POST' onSubmit={handleForm}  className="row gx-3">
                                    <div className="form-group col-md-4 col-sm-6">
                                                <label>First name</label>
                                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" placeholder="enter your firstname"  ></input>
                                                {(formvalid===false && firstName=="")&&(<><p className="error">{firstNameError}</p></>)}

                                            </div>
                                            <div className="form-group col-md-4 col-sm-6">
                                                <label>Last name   </label>
                                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}  className="form-control" placeholder="enter your lastname"  ></input>
                                                {(formvalid===false && lastName=="")&&(<><p className="error">{lastNameError}</p></>)}

                                            </div>
                                            <div className="form-group col-md-4 col-sm-6">
                                                <label>Gender</label>
                                                <select value={gender} className="form-control" onChange={(e)=>setGender(e.target.value)}>
                                                    <option >Please Enter Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>

                                                </select>
                                                {(formvalid===false && gender=="")&&(<><p className="error">{genderError}</p></>)}

                                            </div>
                                            <div className="form-group col-md-4 col-sm-6">
                                                <label>Contact No</label>
                                                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter Aadhar Number" maxLength={10}></input>
                                                {(formvalid===false && phone=="")&&(<><p className="error">{phoneError}</p></>)}
                                                {(formvalid===false && phone!="" && phone.length!=10)&&(<><p className="error">Please Enter 10 Digit Mobile Number</p></>)}

                                            </div>
                                            <div className="form-group col-md-4 col-sm-6">
                                                <label>Photo  </label>
                                                <input type="file"   onChange={(e) =>  setphoto_file(e.target.files[0])} className="form-control" placeholder="Enter pin code"></input>
                                                <img src={configData.ARCHITECH_IMAGE+ imagename} width="100"/>
                                            </div>
                                            <div className="form-group col-md-4 col-sm-6">
                                                <label>Email Address </label>
                                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="enter your email"  ></input>
                                                {(formvalid===false && email=="")&&(<><p className="error">{emailError}</p></>)}
                                                {(formvalid===false && email!="" && !validateEmail(email))&&(<><p className="error">Please Enter Valid Email</p></>)}

                                            </div>
                                           
                                            <div className="form-group  col-sm-6">
                                                 <label>State</label>
                                                 
                                                <select value={stateId} onChange={handleStateChange} className="form-control"  >
                                                            <option  className="form-group">Please Enter State</option>
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
                                            <div className="form-group col-sm-12">
                                                <label>About Architect</label>
                                                <textarea value={aboutArchitech} onChange={(e) => setAboutArchitech(e.target.value)} className="form-control" rows="4" placeholder='About Architech'></textarea>
                                                {(formvalid===false && aboutArchitech=="")&&(<><p className="error">{aboutArchitechError}</p></>)}

                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label>Address</label>
                                                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder="Enter your Address"></input>
                                                {(formvalid===false && address=="")&&(<><p className="error">{addressError}</p></>)}

                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label>Pincode</label>
                                                <input type="number" value={pincode} onChange={(e) => setPinCode(e.target.value)} className="form-control" placeholder="Enter pin code"></input>
                                                {(formvalid===false && pincode=="")&&(<><p className="error">{pincodeError}</p></>)}

                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label>Aadhar Card No</label>
                                                <input type="number" value={aadhar} onChange={(e) => setAadhar(e.target.value)} className="form-control" placeholder="Enter Aadhar Number"></input>
                                                {(formvalid===false && aadhar=="")&&(<><p className="error">{aadharError}</p></>)}
                                                {(formvalid===false && aadhar!="" && aadhar.length!=12 && <><p className="error">Please Enter Valid Aadhar Number</p></>)}

                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label>Aadhar Card Photo</label>
                                                <input type="file" className="form-control" onChange={(e) =>  setaadhar_photo(e.target.files[0])}   ></input>
                                                <label><a target="_blank" href={configData.ARCHITECH_IMAGES+  imagenames}>View Aadharcard Image</a></label>

                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label>Land Mark</label>
                                                <input type="text" value={landmark} onChange={(e) => setLandMark(e.target.value)} className="form-control" placeholder="Enter your Landmark"></input>
                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label>Qualification</label>
                                                <input type="text" value={qualification} onChange={(e) => setQualification(e.target.value)} className="form-control" placeholder="Enter Qualification"></input>
                                                {(formvalid===false && qualification=="")&&(<><p className="error">{qualificationError}</p></>)}

                                            </div>
                                           
                                           


                                        <div className="form-btn">
                                            <button type="submit" className="btn btn-pill btn-gradient color-4">Update</button>&nbsp;
                                            <button type="button" className="btn btn-pill btn-dashed color-4">Cancel</button>
                                        </div>
                                        </form>
                                        <br></br>
                                            </div>
                                        </div>

                                        </div>
                                        
                                       
                                    </div>
                                    <br></br>
                                    <br></br>
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

export default Editarchitectprofile
