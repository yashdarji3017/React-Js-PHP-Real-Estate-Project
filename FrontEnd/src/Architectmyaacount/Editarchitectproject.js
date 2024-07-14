import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useParams } from "react-router-dom";
import configData from '../config.json';
import Architectside from './Architectside';

const Editarchitectproject = () => {
    var [title,settitle] = useState("");
    var [facility,setfacility] = useState("");
    var [description,setdescription] = useState("");
    var [address,setaddress] = useState("");
    var [landmark,setlandmark] = useState("");
    var [pincode,setpincode] = useState("");
    var [latitude,setlatitude] = useState("");
    var [longitude,setlongitude] = useState("");
    var [enrollment,setenrollment] = useState("");
    var [total_building,settotal_building] = useState("");
    var [area,setarea] = useState("");
    var [additional_info,setadditional_info] = useState("");
    var [contect_number,setcontect_number] = useState("");
    var [email,setemail] = useState("");
    var [book,setBook] = useState("");
    var [architechid,setarchitechId] = useState("");
    var [photo_file_project,setphoto_file_project] = useState("");  
    var [pdf_file,setpdf_file] = useState("");
    var [citiesId,setCitiesId] = useState("");  
    var [stateId,setStateId] = useState("");
    var [imagename,setimagename] = useState("");
    var [imagenames,setimagenames] = useState("");
    var [oldimage,setoldimage] = useState("");
    var [oldimages,setoldimages] = useState("");
    
    var [titleError,settitleError] = useState("");
    var [facilityError,setfacilityError] = useState("");
    var [descriptionError,setdescriptionError] = useState("");
    var [addressError,setaddressError] = useState("");
    var [pincodeError,setpincodeError] = useState("");
    var [latitudeError,setlatitudeError] = useState("");
    var [longitudeError,setlongitudeError] = useState("");
    var [enrollmentError,setenrollmentError] = useState("");
    var [total_buildingError,settotal_buildingError] = useState("");
    var [areaError,setareaError] = useState("");
    var [contect_numberError,setcontect_numberError] = useState("");
    var [emailError,setemailError] = useState("");
    var [bookError,setBookError] = useState("");
   
    var [citiesIdError,setCitiesIdError] = useState("");  
    var [stateIdError,setStateIdError] = useState("");
   
    var [successMessage,setSuccessMessage] = useState("");
    var [formvalid,setformvalid] = useState(true);


    const [allcities,setCities] = useState([]);
    const [allstates,setStates] = useState([]);
     
    const [allarchitech,setArchitech] = useState([]);

    const getAllArchitech = () => {
        axios.get(configData.SERVER_URL+"getArchitech.php").then((response)=>{
            if(response.status==200)
            {
                setArchitech(response.data);
            }
        });
    }
    

    
     
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
        if(title=="")
        {
            setformvalid(false);
            settitleError("Please Enter title")
        }
         if(facility=="")
        {
            setformvalid(false);
            setfacilityError("Please Enter Facilities")
        }
         if(description=="")
        {
            setformvalid(false);
            setdescriptionError("Please Enter Description")
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
        if(latitude=="")
        {
            setformvalid(false);
            setlatitudeError("Please Enter Latitude")
        }
        if(longitude=="")
        {
            setformvalid(false);
            setlongitudeError("Please Enter Longitude")
        }
        if(enrollment=="")
        {
            setformvalid(false);
            setenrollmentError("Please Enter Enrollment Number")
        }
        if(total_building=="")
        {
            setformvalid(false);
            settotal_buildingError("Please Enter Total Number Of Buildings")
        }
        if(area=="")
        {
            setformvalid(false);
            setareaError("Please Enter Area")
        }
       
        if(contect_number=="")
        {
            setformvalid(false);
            setcontect_numberError("Please Enter Contact Number")
        }
        if(contect_number.length!=10)
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
        if(book=="")
        {
            setformvalid(false);
            setBookError("Select Project Is Booked Or Not")
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
        if(title!=="" && facility!=="" && description!=="" && address!=="" && pincode!=="" && latitude!=="" && longitude!=="" && enrollment!=="" && total_building!==""
        && area!=="" && contect_number!=="" &&  email!=="" && book!=="" && citiesId!=="" && stateId!=="" 
        && contect_number.length==10 )
        {
     setformvalid(true)
        var postParams = new FormData();
        postParams.append("title",title);
        postParams.append("facility",facility);
        postParams.append("description",description);
        postParams.append("address",address);
        postParams.append("landmark",landmark);
        postParams.append("pincode",pincode);
        postParams.append("latitude",latitude);
        postParams.append("longitude",longitude);
        postParams.append("enrollment",enrollment);
        postParams.append("total_building",total_building);
        postParams.append("area",area);              
        postParams.append("additional_info",additional_info);                 
        postParams.append("contect_number",contect_number);               
        postParams.append("email",email);                
        postParams.append("book",book);   
        postParams.append("photo_file_project",photo_file_project);                
        postParams.append("pdf_file",pdf_file);                
        postParams.append("architechid",architechid);    
        postParams.append("citiesId",citiesId);   
        postParams.append("stateId",stateId);    
        postParams.append("id",id);

        postParams.append("oldimage",oldimage);
          
        postParams.append("oldimages",oldimages);
        axios.post(configData.SERVER_URL+"update/updateproject.php",postParams).then((response)=>{
           
        if(response.status == 200)
            {
                var result = response.data;
                alert(result)
                if(result=="Yes")
                { 
                    window.scrollTo(0, 0);
                    setSuccessMessage("Project Updated successfully!");
                // alert("Data Inserted");
                    }
                else
                {
                    alert("Error");
                }
            }
        });
        //API
    }
    else
    {
        window.scrollTo(0, 0);
    }
    
};
    let {id} =useParams();

    useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getSingleproject.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                settitle(result["project_title"]);
                setfacility(result["facility"]);
                setdescription(result["description"]);
                setaddress(result["address"]);
                setlandmark(result["landmark"]);
                setpincode(result["pincode"]);
                setlatitude(result["latitude"]);
                setlongitude(result["longitude"]);
                setenrollment(result["enrollment"]);
                settotal_building(result["total_building"]);
                setarea(result["area"]);
                setadditional_info(result["total_building"]);
                setcontect_number(result["contect_number"]);
                setemail(result["email"]);
                setBook(result["booked"]);
                setarchitechId(result["architech_id"]);
                 setCitiesId(result["city_id"]);
                setStateId(result["state_id"]);
                 setimagename(result["photo_file_project"]);
                 setimagenames(result["pdf_file"]);
                 setoldimage(result["photo_file_project"]);
                 setoldimages(result["pdf_file"]);
                 getAllStates();
                 getAllCities(result["state_id"]);
                 getAllArchitech();
                 window.scrollTo(0, 0);
             }
        });


    },[]);
return (

    <>
      <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <Architectside/>
                    <div className="col-lg-9">  
                    <div className="sidebar-user sticky-cls">
                    
                  
                                       
                                           

                                      
                                       
                                         
                                           
                                        
                    <div className="card-body report-table">
                   
                        <center>
                                            <h2>Edit Project
                                            
                                        
                                     
                                </h2> </center>
                               
 
                                           
                                 
                                    <div className="">
                                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="">
                                    <div className=" pb-0">
                                        <div className="row">
                                           
                                        <div className="card-body admin-form">
                                    {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                           
                                            <form method='POST' onSubmit={handleForm} className="row gx-3">
                                               
                                                    <div className="form-group col-md-6 col-sm-6">
                                                        <label> Title<span className="font-danger">*</span></label>
                                                        <input type="text" value={title} onChange={(e) => settitle(e.target.value)} className="form-control" placeholder="enter your Project name" name='title' required=""></input>
                                                        {(formvalid===false && title=="")&&(<><p className="error">{titleError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-6 col-sm-6">
                                                        <label>Facility<span className="font-danger">*</span></label>
                                                        <input type="text"  value={facility} onChange={(e) => setfacility(e.target.value)} className="form-control" placeholder="facility" name="facility" required=""></input>
                                                        {(formvalid===false && facility=="")&&(<><p className="error">{facilityError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-sm-12">
                                                        <label>Description</label>
                                                        <textarea value={description} onChange={(e) => setdescription(e.target.value)} className="form-control" name='description' placeholder='Description' rows="4"></textarea>
                                                        {(formvalid===false && description=="")&&(<><p className="error">{descriptionError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-6 col-sm-6">
                                                        <label>Email Id<span className="font-danger">*</span></label>
                                                        <input type="text" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" placeholder="email" name='email' required=""></input>
                                                        {(formvalid===false && email=="")&&(<><p className="error">{emailError}</p></>)}
                                                        {(formvalid===false && email!="" && !validateEmail(email))&&(<><p className="error">Please Enter Valid Email</p></>)}

                                            </div> 
                                            <div className="form-group col-md-6 col-sm-6">
                                                        <label>Contect Number<span className="font-danger">*</span></label>
                                                        <input type="text" value={contect_number} onChange={(e) => setcontect_number(e.target.value)} className="form-control" placeholder="contect number" name='contect_number' required=""></input>
                                                        {(formvalid===false && contect_number=="")&&(<><p className="error">{contect_numberError}</p></>)}
                                                        {(formvalid===false && contect_number!="" && contect_number.length!=10 && <><p className="error">Please Valid Mobile Number</p></>)}

                                            </div> 
                                            <div className="form-group col-md-6 col-sm-6">
                                                <label>Photo  </label>
                                                <input type="file"   className="form-control" onChange={(e) => setphoto_file_project(e.target.files[0])}></input>
                                                <img src={configData.PROJECT_IMAGE+ imagename} width="100"/>

                                            </div>
                                            <div className="form-group col-md-6 col-sm-6">
                                                <label>PDF  </label>
                                                <input type="file"   className="form-control" onChange={(e) => setpdf_file(e.target.files[0])}></input>
                                                <a target="_blank" href={configData.PROJECT_IMAGES+ imagenames} >View File</a>

                                            </div>
                                            <div className="form-group col-sm-12">
                                                        <label>Address</label>
                                                        <textarea value={address} onChange={(e) => setaddress(e.target.value)} className="form-control" placeholder='address' name='address' rows="4"></textarea>
                                                        {(formvalid===false && address=="")&&(<><p className="error">{addressError}</p></>)}

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
                                            <div className="form-group col-md-6 col-sm-6">
                                                        <label>Landmark<span className="font-danger">*</span></label>
                                                        <input value={landmark} onChange={(e) => setlandmark(e.target.value)} type="text" className="form-control" placeholder="landmark" name='landmark' required=""></input>

                                            </div>                        
                                            <div className="form-group col-md-6 col-sm-6">
                                                        <label>Pincode<span className="font-danger">*</span></label>
                                                        <input value={pincode} onChange={(e) => setpincode(e.target.value)} type="text" className="form-control" placeholder="pincode" name='pincode' required=""></input>
                                                        {(formvalid===false && pincode=="")&&(<><p className="error">{pincodeError}</p></>)}

                                            </div>   
                                            <div className="form-group col-md-6 col-sm-6">
                                                        <label>Latitude<span className="font-danger">*</span></label>
                                                        <input value={latitude} onChange={(e) => setlatitude(e.target.value)} type="text" className="form-control" placeholder="latitude" name='latitude' required=""></input>
                                                        {(formvalid===false && latitude=="")&&(<><p className="error">{latitudeError}</p></>)}

                                            </div>
                                            <div className="form-group col-md-6 col-sm-6">
                                                        <label>Longitude<span className="font-danger">*</span></label>
                                                        <input value={longitude} onChange={(e) => setlongitude(e.target.value)} type="text" className="form-control" placeholder="Longitude" name='longitude' required=""></input>
                                                        {(formvalid===false && longitude=="")&&(<><p className="error">{longitudeError}</p></>)}

                                            </div>
                                           
                                            
                                            <div className="form-group col-md-6 col-sm-6">
                                                        <label>Enrollment Number<span className="font-danger">*</span></label>
                                                        <input value={enrollment} onChange={(e) => setenrollment(e.target.value)}type="text" className="form-control" placeholder="enrollment" name='enrollment' required=""></input>
                                                        {(formvalid===false && enrollment=="")&&(<><p className="error">{enrollmentError}</p></>)}

                                            </div>
                                            <div className="form-group col-md-6 col-sm-6">
                                                        <label>Total Building<span className="font-danger">*</span></label>
                                                        <input value={total_building} onChange={(e) => settotal_building(e.target.value)} type="text" className="form-control" placeholder="total building" name='total_building' required=""></input>
                                                        {(formvalid===false && total_building=="")&&(<><p className="error">{total_buildingError}</p></>)}

                                            </div>
                                            <div className="form-group col-md-12 col-sm-6">
                                                        <label>Area<span className="font-danger">*</span></label>
                                                        <input value={area} onChange={(e) => setarea(e.target.value)}  type="text" className="form-control" placeholder="area" name='area' required=""></input>
                                                        {(formvalid===false && area=="")&&(<><p className="error">{areaError}</p></>)}

                                            </div>
                                            <div className="form-group col-sm-12">
                                                        <label>Additional Info</label>
                                                        <textarea value={additional_info} onChange={(e) => setadditional_info(e.target.value)} className="form-control" placeholder='additional info' name='additonal_info' rows="4"></textarea>
                                            </div>
                                           
                                            <div className="form-group col-sm-6">
                                                <label>Is   Booked </label>  &nbsp; &nbsp;
                                                <input type="radio" name="Booked" checked={book=="Yes"} value="Yes" onChange={(e) =>  setBook(e.target.value)}></input>
                                                <label for=" Yes">Yes</label>&nbsp; &nbsp;
                                                <input type="radio" name="Booked" checked={book=="No"} value="No" onChange={(e) => setBook(e.target.value)}></input>
                                                <label for="No">No</label>&nbsp; &nbsp;
                                                {(formvalid===false && book=="")&&(<><p className="error">{bookError}</p></>)}

                                            </div>
                                            

                                               
                                            <div className="form-btn">
                                                    <button type="submit" className="btn btn-pill btn-gradient color-4">Update</button>
                                                    <button type="button" className="btn btn-pill btn-dashed color-4">Cancel</button>
                                                </div>
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
                        </div>

                    </div>
                </div>
            
        </section>



    
    </>
    )
}
   
export default Editarchitectproject
