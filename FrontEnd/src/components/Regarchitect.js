import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';

const Regarchitect = () => {
   
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
    var [verify,setverify] = useState("");
    var [block,setblock] = useState("");
    var [latitude,setlatitude] = useState("");
    var [longitude,setlongitude] = useState("");
    var [aadhar,setAadhar] =useState("");
    var [aadhar_photo,setaadhar_photo] =useState("");
    var [gender,setGender] = useState("");
    var [photo_file,setphoto_file] = useState("");

    var [citiesId,setCitiesId] = useState("");  
    var [stateId,setStateId] = useState("");
    const [allcities,setCities] = useState([]);
    const [allstates,setStates] = useState([]);
   
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
    var [aadhar_photoError,setaadhar_photoError] =useState("");
    var [genderError,setGenderError] = useState("");
    var [photo_fileError,setphoto_fileError] = useState("");
    var [formvalid,setformvalid] = useState(true);
   
    var [citiesIdError,setCitiesIdError] = useState("");  
    var [stateIdError,setStateIdError] = useState("");
        var [successMessage,setSuccessMessage] = useState("");
    const navigate = useNavigate();
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
    useEffect(()=>{
        getAllStates();
        window.scrollTo(0,0)

     },[]); 

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
        }
        if(aadhar.length!=12)
        {
            setformvalid(false);
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
       
        if(password=="")
        {
            setformvalid(false);
            setPasswordError("Please Enter Password");
        }
        if(confirmpassword=="")
        {
            setformvalid(false);
            setConfirmPasswordError("Please Enter Confirm Password");
        }
        if(email=="")
        {
            setformvalid(false);
            setEmailError("Please Enter Email");
        }
        if(!validateEmail(email))
        {
            setformvalid(false);
            //setEmailError("Please Enter Email");
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
        if(aadhar_photo=="")
        {
            setformvalid(false);
            setaadhar_photoError("Choose Aadharphoto");
        }
        if(gender=="")
        {
            setformvalid(false);
            setGenderError("Please Select Gender");
        }
        if(photo_file=="")
        {
            setformvalid(false);
            setphoto_fileError("Choose Profile Photo");
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
        if(firstName!=="" && lastName!=="" &&  email!==""  &&  phone!==""  && phone.length==10 && password!=="" && confirmpassword!=="" && aboutArchitech!=="" && address!=="" && pincode!==""
        && qualification!=="" && gender!==""&& aadhar!=="" && citiesId!=="" && stateId!=="" && photo_file!==""
        && aadhar_photo!=="" && phone.length==10 && aadhar.length==12 )
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
                       
        postParams.append("gender",gender);                
        postParams.append("aadhar",aadhar);   
        postParams.append("citiesId",citiesId);      
        postParams.append("verify",verify);
        postParams.append("latitude",latitude);
        postParams.append("longitude",longitude);
        postParams.append("block",block);

        postParams.append("stateId",stateId);      
         postParams.append("photo_file",photo_file);    
         postParams.append("aadhar_photo",aadhar_photo);      


        // const postParams = {
        //     "firstName" : firstName,
        //     "lastName" : lastName,
        //     "phone" : phone,
        //     "email" : email,
        //     "password" : password,
        //     "confirmpassword" : confirmpassword,
        //     "aboutArchitech" : aboutArchitech,
        //     "address" : address,
        //     "pincode" : pincode,
        //     "landmark" : landmark,
        //     "qualification" : qualification,
        //     "latitude" : latitude,
        //     "longitude" : longitude,
        //     "block" : block,
        //     "citiesId" :  citiesId,
        //     "gender" :  gender,
        //     "verify" : verify,
        //     "aadhar" : aadhar,
        //     "stateId" :  stateId,

            
        
        // };
        axios.post(configData.SERVER_URL+"addArchitech.php",postParams).then((response)=>{
            
        if(response.status == 200)
        {
            var result = response.data;
            alert(result)
            if(result["status"]=="Yes")
            { 
             window.scrollTo(0, 0);
             alert("Please Enter Otp Sending Through Your Email")                // alert("Data Inserted");
             // alert("Data Inserted");
            localStorage.setItem("uid",result["userid"]);
            localStorage.setItem("email",result["email"]);

            navigate("/architectotp");
             }
            else
            {
                alert("Error");
            }
        }
    });
        
        // //API
    }
    else
    {
        window.scrollTo(0, 0);
    }
    

    };
    return (
        <>
           
                     <section className="agent-section property-section">
                      <div className="container">
                         <div className="col-lg-12">
                             <div className="filter-panel">
                                  <div className="top-panel">
                                       <div>
                                   <h2>Registration As Architect</h2>
                        
                                 </div>
                                    </div>
                                 </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                   
                                    <div className="card-body admin-form">
                                    {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                           

                                    <form method='POST' onSubmit={handleForm}  className="row gx-3">
                                            <div className="form-group col-md-4 col-sm-6">
                                                <label>First name</label>
                                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" placeholder="enter your name"  ></input>
                                                {(formvalid===false && firstName=="")&&(<><p className="error">{firstNameError}</p></>)}

                                            </div>
                                            <div className="form-group col-md-4 col-sm-6">
                                                <label>Last name   </label>
                                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}  className="form-control" placeholder="enter your surname"  ></input>
                                                {(formvalid===false && lastName=="")&&(<><p className="error">{lastNameError}</p></>)}

                                            </div>
                                            <div className="form-group col-md-4 col-sm-6">
                                                <label  >Gender  </label>
                                                <select className="form-control" onChange={(e)=>setGender(e.target.value)}>
                                                    <option >Please select gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                                {(formvalid===false && gender=="")&&(<><p className="error">{genderError}</p></>)}

                                            </div>
                                            <div className="form-group col-md-4 col-sm-6">
                                                <label>Contact No</label>
                                                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter Aadhar Number" maxLength={10}></input>
                                                {(formvalid===false && phone=="")&&(<><p className="error">{phoneError}</p></>)}
                                                {(formvalid===false && phone!="" && phone.length!=10 && <><p className="error">Please Enter valid mobile number</p></>)}

                                            </div>
                                            <div className="form-group col-md-4 col-sm-6">
                                                <label>Photo  </label>
                                                <input type="file"   className="form-control" onChange={(e) => setphoto_file(e.target.files[0])}></input>
                                                {(formvalid===false && photo_file=="")&&(<><p className="error">{photo_fileError}</p></>)}

                                            </div>
                                            <div className="form-group col-md-4 col-sm-6">
                                                <label>Email Address </label>
                                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="enter your email"  ></input>
                                                {(formvalid===false && email=="")&&(<><p className="error">{emailError}</p></>)}
                                                {(formvalid===false && email!="" && !validateEmail(email))&&(<><p className="error">Please Enter Valid Email</p></>)}

                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label>Password   </label>
                                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter your password"></input>
                                                {(formvalid===false && password=="")&&(<><p className="error">{passwordError}</p></>)}

                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label>Confirm Password  </label>
                                                <input type="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" placeholder="Enter your password"></input>
                                                {(formvalid===false && confirmpassword=="")&&(<><p className="error">{confirmpasswordError}</p></>)}

                                            </div>
                                            <div className="form-group  col-sm-6">
                                                 <label>State</label>
                                                 
                                                <select onChange={handleStateChange} className="form-control"  >
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
                                                       <select onChange={handleCitiesChange} className="form-control"  >
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
                                                <input type="tel" value={aadhar} onChange={(e) => setAadhar(e.target.value)} className="form-control" placeholder="Enter Aadhar Number" maxLength={12}></input>
                                                {(formvalid===false && aadhar=="")&&(<><p className="error">{aadharError}</p></>)}
                                                {(formvalid===false && aadhar!="" && aadhar.length!=12 && <><p className="error">Please Enter Valid Aadhar Number</p></>)}

                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label>Aadhar Card Photo</label>
                                                <input type="file"   onChange={(e) =>  setaadhar_photo(e.target.files[0])} className="form-control" placeholder="Enter"></input>
                                                {(formvalid===false && aadhar_photo=="")&&(<><p className="error">{aadhar_photoError}</p></>)}

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
                                            <button type="submit" className="btn btn-pill btn-gradient color-1">Submit</button>&nbsp;
                                            <Link to="" type="button" className="btn btn-pill btn-dashed color-1">Cancel</Link>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</section>


<br></br>

        </>

  )
}

export default Regarchitect;
