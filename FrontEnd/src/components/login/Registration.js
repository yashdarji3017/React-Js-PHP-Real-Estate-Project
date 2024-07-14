import React, { useState,useEffect } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom'
import axios, { all } from 'axios';
import configData from '../config.json';

const Registration = ({open}) => {



    var navigate = useNavigate()

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
    var [citiesId,setCitiesId] = useState("");  
    var [stateId,setStateId] = useState("");
    var [address,setaddress] = useState("");
    var [pincode,setpincode] = useState("");
    var [photo_file,setphoto_file] = useState("");
    var [aadhar_photo,setaadhar_photo] = useState("");
    var [successMessage,setSuccessMessage] = useState("");
    var [packageid,setpackageid] = useState("");
    var [price,setprice] = useState("");


    var [firstNameError,setfirstNameError] = useState("");
    var [lastNameError,setlastNameError] = useState("");
    var [contactError,setcontactError] = useState("");
    var [emailError,setemailError] = useState("");  
    var [passwordError,setpasswordError] = useState("");
    var [confirm_passwordError,setconfirm_passwordError] = useState("");
    var [aboutError,setaboutError]= useState("");
    var [aadhar_noError,setaadhar_noError] = useState("");
    var [genderError,setgenderError] = useState("");
    var [typeError,settypeError] = useState("");
    var [citiesIdError,setCitiesIdError] = useState("");  
    var [stateIdError,setStateIdError] = useState("");
    var [addressError,setaddressError] = useState("");
    var [pincodeError,setpincodeError] = useState("");
    var [photo_fileError,setphoto_fileError] = useState("");
    var [aadhar_photoError,setaadhar_photoError] = useState("");

    var [formvalid,setformvalid] = useState(true);  
 
     
 
    const [allcities,setCities] = useState([]);
    const [allstates,setStates] = useState([]);
    const [allpackage,setpackage] = useState([]);

    const getpackage = () => {
        axios.get(configData.SERVER_URL+"getpackageFront.php").then((response)=>{
            if(response.status==200)
            {
                setpackage(response.data);
            }
        });
    }
    const [pprice,setPprice]=useState();
    const handlepackageChange = (e) =>{
        var packageid = e.target.value;
        var  p =e.target.selectedOptions[0].getAttribute('data-price') ;
        setPprice(p);
       // alert(p);
        setpackageid(packageid);
     };

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
        getpackage();
        window.scrollTo(0,0);
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
            setcontactError("Please Enter Contact Number");
        }
        if(contact.length!=10)
        {
            setformvalid(false);
            // setcontactError("Please Enter Contact Number")
        }
        if(aadhar_no.length!=12)
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
        if(password=="")
        {
            setformvalid(false);
            setpasswordError("Please Enter Password")
        }
        if(confirm_password=="")
        {
            setformvalid(false);
            setconfirm_passwordError("Confirm Your Password")
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
        if(photo_file=="")
        {
            setformvalid(false);
            setphoto_fileError("Please Select Profile Photo")
        }
        if(aadhar_photo=="")
        {
            setformvalid(false);
            setaadhar_photoError("Please Select Aadhar Photo")
        }
        if(aadhar_no=="")
        {
            setformvalid(false);
            setaadhar_noError("Please Enter Aadhar No")
        }
        if(firstName!=="" && lastName!=="" &&  contact!=="" && contact.length==10  && email!==""  && password!=="" && confirm_password!=="" && about!=="" && aadhar_no!=="" &&  gender!==""
        && type!=="" && citiesId!=="" && stateId!=="" && address!==""  && photo_file!=="" && aadhar_photo!=="" && aadhar_no.length==12 )
        {
      setformvalid(true)
      PurchaseUser();
    }
    else
        {
            window.scrollTo(0, 0);
        }
        
    }; 
   
    const [paymentId, setPaymentId] = useState('');
  
    const options = {
      key: 'rzp_test_qbPyndOjmZn0je',
      amount: pprice *100,
      currency: 'INR',
      name: 'My Store',
      description: 'Purchase Description',
      image: '../assets/png/2.png',
      handler: function (response) {
        setPaymentId(response.razorpay_payment_id);

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
        postParams.append("package",packageid); 


        axios.post(configData.SERVER_URL+"addUser.php",postParams).then((response)=>{
            
        if(response.status == 200)
            {
                var result = response.data;
                if(result["status"]=="Yes")
                { 
                 window.scrollTo(0, 0);
                    alert("Please Enter Otp Sending Through Your Email")                // alert("Data Inserted");
                localStorage.setItem("uid",result["userid"]);
                localStorage.setItem("email",result["email"]);

                navigate("/otp");
                 }
                else
                {
                    alert("Error");
                }
            }
        });


      },
      prefill: {
        email: 'customer@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#F37254',
      },
    };
       
  const PurchaseUser = () =>{

    if(type=="Agent")
    {

        var pay = new window.Razorpay(options);
        pay.open();
    }
    else
    {
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
        postParams.append("package",packageid); 


        axios.post(configData.SERVER_URL+"addUser.php",postParams).then((response)=>{
            
        if(response.status == 200)
            {
                var result = response.data;
                if(result["status"]=="Yes")
                { 
                 window.scrollTo(0, 0);
                    alert("Please Enter Otp Sending Through Your Email")                // alert("Data Inserted");
                localStorage.setItem("uid",result["userid"]);
                localStorage.setItem("email",result["email"]);

                navigate("/otp");
                 }
                else
                {
                    alert("Error");
                }
            }
        });
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
                                   <h2>User Registration</h2>
                        
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
                                                        <input type="tel" value={contact} onChange={(e) => setcontact(e.target.value)} className="form-control" placeholder="enter your contact"    maxLength={10}></input>
                                                        {(formvalid===false && contact=="")&&(<><p className="error">{contactError}</p></>)}
                                                        {(formvalid===false && contact!="" && contact.length!=10 && <><p className="error">Please Valid Mobile Number</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-6">
                                                        <label>Email</label>
                                                        <input type=" email" value={ email} onChange={(e) => setemail(e.target.value)} className="form-control" placeholder="enter your email"   ></input>
                                                        {(formvalid===false && email=="")&&(<><p className="error">{emailError}</p></>)}
                                                        {(formvalid===false && email!="" && !validateEmail(email))&&(<><p className="error">Please Enter Valid Email</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-6">
                                                        <label>Password </label>
                                                        <input type="password" value={ password} onChange={(e) =>  setpassword(e.target.value)} className="form-control" placeholder="enter your password"   ></input>
                                                        {(formvalid===false && password=="")&&(<><p className="error">{passwordError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-6">
                                                        <label>Confirm Password</label>
                                                        <input type="password" value={ confirm_password} onChange={(e) =>  setconfirm_password(e.target.value)} className="form-control" placeholder="enter your password"   ></input>
                                                        {(formvalid===false && confirm_password=="")&&(<><p className="error">{confirm_passwordError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-6">
                                                        <label>Photo</label>
                                                        <input type="file" className="form-control"  onChange={(e) => setphoto_file(e.target.files[0])}></input>
                                                        {(formvalid===false && photo_file=="")&&(<><p className="error">{photo_fileError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-6">
                                                <label  >User Type  </label>
                                                <select className="form-control" onChange={(e)=>settype(e.target.value)}>
                                                    <option>Please select Type</option>
                                                    <option value="Agent" >Agent</option>
                                                    <option value="User">User</option>
                                                </select>
                                                {(formvalid===false && type=="")&&(<><p className="error">{typeError}</p></>)}

                                                {type==="Agent" &&  (<>
                                                    <div className="form-group col-md-12 col-sm-6">
                                                        <label>Package</label>
                                                        <div>
                                                       <select value={packageid} onChange={handlepackageChange} className="form-control"  >
                                                            <option value="">Select Package</option>
                                                            {
                                                                allpackage.map((row,index)=>{
                                                                    return(  
                                <option data-price={row.price} value={row.package_id}>{row.package_title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.total_property}&nbsp;Property</option>
                                                                    );
                                                                })
                                                            }
                                                        </select>
                                                    </div>                 
                                                    </div>
                                                    </>)
                                                    }



                                                        </div>

                                            <div className="form-group col-md-4 col-sm-6">
                                                <label  >Gender  </label>
                                                <select className="form-control" onChange={(e)=>setgender(e.target.value)}>
                                                    <option >Please select gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                                {(formvalid===false && gender=="")&&(<><p className="error">{genderError}</p></>)}

                                            </div>
                                                     
                                                    <div className="form-group col-sm-6">
                                                <label>State</label>
                                                <div>
                                                <select onChange={handleStateChange} className="form-control"  >
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
                                             <div className="form-group col-md-6 col-sm-6">
                                                        <label>Address</label>
                                                        <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} className="form-control" placeholder="enter your About" name="about" ></input>
                                                        {(formvalid===false && address=="")&&(<><p className="error">{addressError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-6 col-sm-6">
                                                        <label>Pincode</label>
                                                        <input type="text" value={pincode} onChange={(e) =>  setpincode(e.target.value)} className="form-control" placeholder="enter your pincode" name="aadhar_no" ></input>
                                                        {(formvalid===false && pincode=="")&&(<><p className="error">{pincodeError}</p></>)}

                                                    </div>
                                             <div className="form-group col-md-6 col-sm-6">
                                                        <label>About User/Agent</label>
                                                        <input type="text" value={about} onChange={(e) => setabout(e.target.value)} className="form-control" placeholder="enter your About" name="about" ></input>
                                                        {(formvalid===false && about=="")&&(<><p className="error">{aboutError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-6 col-sm-6">
                                                        <label>Aadhar Card No</label>
                                                        <input type="text" value={aadhar_no} onChange={(e) =>  setaadhar_no(e.target.value)} className="form-control" placeholder="enter your Aadharcard No" name="aadhar_no"  maxLength={12}></input>
                                                        {(formvalid===false && aadhar_no=="")&&(<><p className="error">{aadhar_noError}</p></>)}
                                                        {(formvalid===false && aadhar_no!="" && aadhar_no.length!=12 && <><p className="error">Please Enter Valid Aadhar Number</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-12 col-sm-6">
                                                        <label>Aadhar Card Photo</label>
                                                        <input type="file" className="form-control"  onChange={(e) => setaadhar_photo(e.target.files[0])}></input>
                                                        {(formvalid===false && aadhar_photo=="")&&(<><p className="error">{aadhar_photoError}</p></>)}

                                                    </div>
                                                   
                                                
                                                <div className="form-btn">
                                                    <button type="submit" className="btn btn-pill btn-gradient color-1">Submit</button>&nbsp;&nbsp;
                                         
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


        </>
    )
}

export default Registration;
