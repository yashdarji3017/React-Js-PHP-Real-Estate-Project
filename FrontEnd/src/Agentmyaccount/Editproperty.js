import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import AgentSide from './AgentSide';

const Editagentproperty = () => {

    var [property_title,setproperty_title] = useState("");
        var [description,setdescription] = useState("");
        var [bedroom,setbedroom] = useState("");
        var [hall,sethall] = useState("");
        var [kitchen,setkitchen] = useState("");
        var [master,setmaster] = useState("");
        var [price,setprice] = useState("");
        var [address,setaddress] = useState("");
        var [landmark,setlandmark] = useState("");
        var [pincode,setpincode] = useState("");
        var [latitude,setlatitude] = useState("");
        var [longitude,setlongitude] = useState("");
        var [area,setarea] = useState("");
        var [furnished,setfurnished] = useState("");
        var [floors,setfloors] = useState("");
        var [numbers,setnumbers] = useState("");
        var [property,setproperty] = useState("");
        var [parking,setparking] = useState("");
        var [isavailable, setisavailable] = useState("");
        var [isapprove,setisapprove] = useState("");
        var [isactive,setisactive] = useState("");
        var [build_date,setbuild_date] = useState("");
        var [projectid,setprojectid] = useState("");
        var [userid,setuserId] = useState("");
        var [categoriesid,setcategoriesId] = useState("");
        var [citiesId,setCitiesId] = useState("");  
        var [stateId,setStateId] = useState("");
         var [property_photo,setproperty_photo] = useState("");
        var [pdf_property,setpdf_property] = useState("");
        var [imagename,setimagename] = useState("");
        var [imagenames,setimagenames] = useState("");
        var [oldimage,setoldimage] = useState("");
        var [oldimages,setoldimages] = useState("");
        var [successMessage,setSuccessMessage] = useState("");
        var [exit,setexit] = useState("");
        var [cctv,setcctv] = useState("");  
        var [wifi,setwifi] = useState("");
         var [air,setair] = useState("");
        var [security,setsecurity] = useState("");
        var [terrace,setterrace] = useState("");
        var [lift,setlift] = useState("");
        var [balcony,setbalcony] = useState("");
        var [property_titleError,setproperty_titleError] = useState("");
        var [descriptionError,setdescriptionError] = useState("");
        var [bedroomError,setbedroomError] = useState("");
        var [hallError,sethallError] = useState("");
        var [kitchenError,setkitchenError] = useState("");
        var [masterError,setmasterError] = useState("");
        var [priceError,setpriceError] = useState("");
        var [addressError,setaddressError] = useState("");
        var [landmarkError,setlandmarkError] = useState("");
        var [pincodeError,setpincodeError] = useState("");
        
        var [areaError,setareaError] = useState("");
        var [furnishedError,setfurnishedError] = useState("");
        var [floorsError,setfloorsError] = useState("");
        var [numbersError,setnumbersError] = useState("");
        var [propertyError,setpropertyError] = useState("");
        
        var [build_dateError,setbuild_dateError] = useState("");
        
        var [categoriesidError,setcategoriesIdError] = useState("");
        var [citiesIdError,setCitiesIdError] = useState("");  
        var [stateIdError,setStateIdError] = useState("");
     
    
        var [formvalid,setformvalid] = useState(true);
          
         const [allcities,setCities] = useState([]);
        const [allstates,setStates] = useState([]);
        const getAllCities = (stateid) => {
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

        const [categories,setCategories] = useState([]);

        const getcategories = () => {
            axios.get(configData.SERVER_URL+"getCategories.php").then((response)=>{
                 if(response.status==200)
                {
                   setCategories(response.data);
                }
            });
        }
   
        useEffect(()=>{
           getcategories();
        },[]); 
        const [alluser,setAlluser] = useState([]);

        const getAlluser = () => {
            axios.get(configData.SERVER_URL+"getUser.php").then((response)=>{
                if(response.status==200)
                {
                    setAlluser(response.data);
                }
            });
        }
        useEffect(()=>{
            getAlluser();
         },[]);
         const handleUserChange = (e) =>{
            var userid = e.target.value;
            setuserId(userid);
         };

         const handleCategoriesChange = (e) =>{
            var categoriesid = e.target.value;
            setcategoriesId(categoriesid);
         }; 

    const [allproject,setProject] = useState([]);

    const getproject = () => {
      
        axios.get(configData.SERVER_URL+"getproject.php").then((response)=>{
            if(response.status == 200)
            {
                setProject(response.data);
            }
        });
    }
    useEffect(()=>{
        getproject();
     },[]);
     
    const handleProjectChange = (e) =>{
        var  projectid = e.target.value;
        setprojectid(projectid);
     };
       
        const handleForm = (e) => {
            e.preventDefault();
            if(property_title=="")
            {
                setformvalid(false);
                setproperty_titleError("Please Enter Property Title")
            }
            if(description=="")
            {
                setformvalid(false);
                setdescriptionError("Please Enter Description")
            }
            if(bedroom=="")
            {
                setformvalid(false);
                setbedroomError("Please Enter Number Of Bedroom")
            }
            if(hall=="")
            {
                setformvalid(false);
                sethallError("Please Enter Number Of Hall")
            }
            if(master=="")
            {
                setformvalid(false);
                setmasterError("Please Enter Master")
            }
            if(kitchen=="")
            {
                setformvalid(false);
                setkitchenError("Please Enter Number Of Kitchen")
            }
            if(price=="")
            {
                setformvalid(false);
                setpriceError("Please Enter Price Of Property")
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
            if(landmark=="")
            {
                setformvalid(false);
                setlandmarkError("Please Enter Landmark")
            }
           
            if(area=="")
            {
                setformvalid(false);
                setareaError("Please Enter Area")
            }
            
            if(furnished=="")
            {
                setformvalid(false);
                setfurnishedError("Please Enter Property Is Furnished Or Not")
            }
            if(floors=="")
            {
                setformvalid(false);
                setfloorsError("Please Enter Number Of Floors")
            }
            
            if(numbers=="")
            {
                setformvalid(false);
                setnumbersError("Enter No Of Balcony")
            }
           
            if(build_date=="")
            {  
                setformvalid(false);
                setbuild_dateError("Select Property Builddate")
            }
            if(property=="")
            {
                setformvalid(false);
                setpropertyError("Select Property Sell Or Rent")
            }
           
            if(categoriesid=="")
            {
                setformvalid(false);
                setcategoriesIdError("Please Select Category")
            }
            if(citiesId=="")
            {
                setformvalid(false);
                setCitiesIdError("Please Select City")
            }
            if(stateId=="")
            {
                setformvalid(false);
                setStateIdError("Please Select state")
            }
           
            // if(property=="")
            // {
            //     setformvalid(false);
            //     sett("Please Select Property Photo")
            // }
            if(property_title!=="" && description!=="" && bedroom!=="" && hall!=="" && master!=="" && kitchen!=="" && price!=="" && address!=="" && pincode!==""
                && landmark!=="" && area!=="" && furnished!=="" && floors!=="" && parking!=="" && build_date!=="" &&  categoriesid!=="" && stateId!=="" && citiesId!=="")
                {
                setformvalid(true)
            var postParams = new FormData();
            postParams.append("id",id);
            postParams.append("property_title",property_title);
            postParams.append("description",description);
            postParams.append("bedroom",bedroom);
            postParams.append("hall",hall);
            postParams.append("master",master);
            postParams.append("kitchen",kitchen);
            postParams.append("price",price);
            postParams.append("address",address);
            postParams.append("address",address);
            postParams.append("pincode",pincode);
            postParams.append("landmark",landmark);
            postParams.append("latitude",latitude);              
            postParams.append("area",area);                 
            postParams.append("longitude",longitude);               
            postParams.append("furnished",furnished);                
            postParams.append("floors",floors);                
            postParams.append("numbers",numbers);    
            postParams.append("property",property);
            postParams.append("longitude",longitude);               
            postParams.append("furnished",furnished);                
            postParams.append("floors",floors);                
            postParams.append("numbers",numbers);    
            postParams.append("parking",parking);               
            postParams.append("isavailable",isavailable);                
            postParams.append("isactive",isactive);                
            postParams.append("build_date",build_date); 
            postParams.append("projectid",projectid);                
            postParams.append("userid",userid);                
            postParams.append("categoriesid",categoriesid);   
            postParams.append("citiesId",citiesId);      
            postParams.append("stateId",stateId);      
             postParams.append("property_photo",property_photo);    
             postParams.append("pdf_property",pdf_property);      
             postParams.append("isapprove",isapprove);      
             postParams.append("exit",exit);    
             postParams.append("cctv",cctv);      
             postParams.append("wifi",wifi);  
             postParams.append("parking",parking);    
             postParams.append("terrace",terrace);      
             postParams.append("lift",lift);  
             postParams.append("air",air);    
             postParams.append("security",security);      
             postParams.append("balcony",balcony);  

             postParams.append("oldimage",oldimage);             
             postParams.append("oldimages",oldimages);
            axios.post(configData.SERVER_URL+"update/updateproperty.php",postParams).then((response)=>{
               
            if(response.status == 200)
                {
                    var result = response.data;
                    alert(result)
                     if(result=="Yes")
                     { 
                        window.scrollTo(0, 0);
                        setSuccessMessage("Propert Updated successfully!");
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
                window.scrollTo(0, 0);
            
        }; 
        let {id} =useParams();
        useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getSingleproperty.php",postParams).then((response)=>{
            if(response.status == 200)
            
            {
                var result = response.data;

                console.log(result);
            
                setproperty_title(result["property_title"]);
                setdescription(result["description_property"]);
                setbedroom(result["bedroom"]);
                sethall(result["hall"]);
                setkitchen(result["kitchen"]);
                setmaster(result["master"]);
                setprice(result["price"]);
                setaddress(result["address_property"]);
                setlandmark(result["landmark_property"]);
                setpincode(result["pincode_property"]);
                setlatitude(result["latitude_property"]);
                setlongitude(result["longitude_property"]);
                setarea(result["area_property"]);
                setfurnished(result["furnished"]);
                setfloors(result["floors"]);
                setnumbers(result["numbers"]);
                setparking(result["parking_property"]);
                 setproperty(result["property"]);
                setisavailable(result["available"]);
                 setisapprove(result["approve"]);
                setisactive(result["active"]);
                setbuild_date(result["build_date"]);
                setprojectid(result["project_id"]);
                setuserId(result["user_id"]);
                setcategoriesId(result["categories_id"]);
                setStateId(result["sstate_id"]);
                setCitiesId(result["ccity_id"]);
                setuserId(result["user_id"]);
            
                setimagename(result["property_photo"]);
                setimagenames(result["pdf_property"]);
                setoldimage(result["property_photo"]);
                setoldimages(result["pdf_property"]);
              
              
                setexit(result["eexit"]);
                setcctv(result["cctv"]);
                setwifi(result["wifi"]);
                setair(result["air"]);
                setsecurity(result["security"]);
                setterrace(result["terrace"]);
                setlift(result["lift"]);
                setbalcony(result["balcony"]);
                
                
                
                getAllStates();
                getAllCities(result["sstate_id"]);

                window.scrollTo(0, 0);

             }
        });


    },[]);
      //API
   
  return (
    <div>
       <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <AgentSide/>
                    <div className="col-lg-9">
                        <div className="dashboard-content">
                            <div className="my-profile" id="profile">
                                <div className="profile-info">
                                    <div className="common-card">
                                        <div className="user-name media">
                                            <div className="media-body">
                                                
                                            </div>
                                            <div className="row"><center>
                                            <h2>Edit Property</h2>&nbsp;</center>
                                            <div className="card-body admin-form">
                                            {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                            
                                            <form method='POST' onSubmit={handleForm} className="row gx-3">
                                                
                                                    <div className="form-group col-md-12 col-sm-6">
                                                <label>Categories Name </label>
                                                <div>
                                                       <select value={categoriesid} onChange={handleCategoriesChange} className="form-control"  >
                                                            <option>Please Enter Categoires</option>
                                                            {
                                            categories.map((row,index)=>{
                                                return(  
                                                    <option value={row.categories_id }>{row.categories_name	}</option>
                                                 );
                                            })
                                        }
                                                        </select>
                                                        {(formvalid===false && categoriesid=="")&&(<><p className="error">{categoriesidError}</p></>)}

                                                    </div> 
                                                    </div>
                                                    <div className="form-group col-md-12 col-sm-6">
                                                        <label> Property Title<span className="font-danger">*</span></label>
                                                        <input type="text" value={property_title} onChange={(e) => setproperty_title(e.target.value)} className="form-control" placeholder="enter your Property title" name='property_title' required=""></input>
                                                        {(formvalid===false && property_title=="")&&(<><p className="error">{property_titleError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-sm-12">
                                                        <label>Description</label>
                                                        <textarea value={description} onChange={(e) => setdescription(e.target.value)} className="form-control"  placeholder='Description' rows="4"></textarea>
                                                        {(formvalid===false && description=="")&&(<><p className="error">{descriptionError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-6">
                                                        <label>Bedroom<span className="font-danger">*</span></label>
                                                        <input type="text" value={bedroom} onChange={(e) => setbedroom(e.target.value)}   className="form-control" placeholder="bedroom" name='bedroom' required=""></input>
                                                        {(formvalid===false && bedroom=="")&&(<><p className="error">{bedroomError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-6">
                                                        <label>Hall<span className="font-danger">*</span></label>
                                                        <input type="text" value={hall} onChange={(e) => sethall(e.target.value)}  className="form-control" placeholder="hall" name='hall' required=""></input>
                                                        {(formvalid===false && hall=="")&&(<><p className="error">{hallError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-6">
                                                        <label>Kitchen<span className="font-danger">*</span></label>
                                                        <input type="text"  value={kitchen} onChange={(e) => setkitchen(e.target.value)}className="form-control" placeholder="kitchen" name='kitchen' required=""></input>
                                                        {(formvalid===false && kitchen=="")&&(<><p className="error">{kitchenError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-6">
                                                        <label>Master<span className="font-danger">*</span></label>
                                                        <input type="text" value={master} onChange={(e) => setmaster(e.target.value)}  className="form-control" placeholder="master" name='master' required=""></input>
                                                        {(formvalid===false && master=="")&&(<><p className="error">{masterError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-6">
                                                <label  >Property  </label>
                                                <select value={property} className="form-control" onChange={(e)=>setproperty(e.target.value)}>
                                                    <option >Please select Buy/Rent </option>
                                                    <option value="Buy">Buy</option>
                                                    <option value="Rent">Rent</option>
                                                    <option value="Sell">Sell</option>
                                                </select>
                                                {(formvalid===false && property=="")&&(<><p className="error">{propertyError}</p></>)}

                                            </div>     
                                                <div className="form-group col-md-4 col-sm-6">
                                                        <label>Price<span className="font-danger">*</span></label>
                                                        <input type="text"  value={price} onChange={(e) => setprice(e.target.value)} className="form-control" placeholder="price" name='price' required=""></input>
                                                        {(formvalid===false && price=="")&&(<><p className="error">{priceError}</p></>)}

                                                  </div>
                                            <div className="form-group col-sm-12">
                                                        <label>Address</label>
                                                        <textarea  value={address} onChange={(e) => setaddress(e.target.value)} className="form-control" placeholder='address' name='address' rows="4"></textarea>
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
                                                        <input type="text" value={landmark} onChange={(e) => setlandmark(e.target.value)}  className="form-control" placeholder="landmark" name='landmark' required=""></input>
                                                        {(formvalid===false && landmark=="")&&(<><p className="error">{landmarkError}</p></>)}

                                            </div>                        
                                            <div className="form-group col-md-6 col-sm-6">
                                                        <label>Pincode<span className="font-danger">*</span></label>
                                                        <input type="text" value={pincode} onChange={(e) => setpincode(e.target.value)} className="form-control" placeholder="pincode" name='pincode' required=""></input>
                                                        {(formvalid===false && pincode=="")&&(<><p className="error">{pincodeError}</p></>)}

                                            </div>  
                                                                
                                           
                                           
                                            <div className="form-group col-md-6 col-sm-6">
                                                        <label>Area<span className="font-danger">*</span></label>
                                                        <input type="text" value={area} onChange={(e) => setarea(e.target.value)} className="form-control" placeholder="area" name='area' required=""></input>
                                                        {(formvalid===false && area=="")&&(<><p className="error">{areaError}</p></>)}

                                            </div>
                                            <div className="form-group col-md-6 col-sm-6">
                                                        <label>Furnished<span className="font-danger">*</span></label>
                                                        <input type="text" value={furnished} onChange={(e) => setfurnished(e.target.value)} className="form-control" placeholder="furnished" name='furnished' required=""></input>
                                                        {(formvalid===false && furnished=="")&&(<><p className="error">{furnishedError}</p></>)}

                                                    </div>
                                             
                                            
                                            <div className="form-group col-md-6 col-sm-6">
                                                        <label>Floors<span className="font-danger">*</span></label>
                                                        <input type="text" value={floors} onChange={(e) => setfloors(e.target.value)} className="form-control" placeholder="floors" name='floors' required=""></input>
                                                        {(formvalid===false && floors=="")&&(<><p className="error">{floorsError}</p></>)}

                                            </div>
                                            <div className="form-group col-md-6 col-sm-6">
                                                        <label>No of Balcony<span className="font-danger">*</span></label>
                                                        <input type="text" value={numbers} onChange={(e) => setnumbers(e.target.value)} className="form-control" placeholder="numbers" name='numbers' required=""></input>
                                                        {(formvalid===false && numbers=="")&&(<><p className="error">{numbersError}</p></>)}

                                           </div>
                                            <div className="form-group col-md-6 col-sm-6">
                                                <label>Photo  </label>
                                                <input type="file"   className="form-control" onChange={(e) => setproperty_photo(e.target.files[0])}></input>
                                                <img src={configData.PROPERTY_IMAGE+ imagename} width="100"/>

                                            </div>
                                            <div className="form-group col-md-6 col-sm-6">
                                                <label>PDF  </label>
                                                <input type="file"   className="form-control" onChange={(e) => setpdf_property(e.target.files[0])}></input>
                                                <a target="_blank" href={configData.PROPERTY_IMAGES+ imagenames}>View PDF</a>

                                             </div>
                                            <div className="form-group col-md-6 col-md-12">
                                                    <label>Property BuildDate<span className="font-danger">*</span></label>
                                                    <input type="Date" value={build_date} onChange={(e) => setbuild_date(e.target.value)} className="form-control"placeholder="build date" name='build_date' required=""></input>
                                                    {(formvalid===false && build_date=="")&&(<><p className="error">{build_dateError}</p></>)}

                                                </div>  


                                              <div class="form-group col-12">
                                            <label>Additional features</label>
                                            </div>
                                            
                                            <div className="form-group col-md-4 col-sm-4"> 
                                            <input type="checkbox" value="EmergencyExit" checked={exit=="EmergencyExit"} onChange={(e) =>  setexit(e.target.value)}   ></input>
                                             &nbsp;<label>Emergency Exit</label>
                                            </div> 
                                            <div className="form-group col-md-4 col-sm-4"> 
                                            <input type="checkbox" value="CCTV" checked={cctv=="CCTV"} onChange={(e) =>  setcctv(e.target.value)}   ></input>
                                             &nbsp;<label>CCTV</label>
                                            </div>  
                                            <div className="form-group col-md-4 col-md-4"> 
                                            <input type="checkbox"  value="FreeWi-Fi" checked={wifi=="FreeWi-Fi"} onChange={(e) =>  setwifi(e.target.value)}   ></input>
                                             &nbsp;<label>Free Wi-Fi</label>
                                            </div> 
                                            <div className="form-group col-md-4 col-md-4"> 
                                            <input type="checkbox"  value="FreeParking" checked={parking=="FreeParking"} onChange={(e) =>  setparking(e.target.value)}   ></input>
                                             &nbsp;<label>Free Parking In The Area</label>
                                            </div> 
                                            <div className="form-group col-md-4 col-md-4"> 
                                            <input type="checkbox"  value="Aircondition" checked={air=="Aircondition"} onChange={(e) =>  setair(e.target.value)}   ></input>
                                             &nbsp;<label>Air Conditioning</label>
                                               
                                            </div> 
                                            <div className="form-group col-md-4 col-md-4"> 
                                            <input type="checkbox"  value="SecurityGuard" checked={security=="SecurityGuard"} onChange={(e) =>  setsecurity(e.target.value)}   ></input>
                                             &nbsp;<label>Security Guard</label>
                                            </div> 
                                            <div className="form-group col-md-4 col-md-4"> 
                                            <input type="checkbox"  value="Terrace" checked={terrace=="Terrace"} onChange={(e) =>  setterrace(e.target.value)}   ></input>
                                             &nbsp;<label>Terrace</label>
                                            </div> 
                                            <div className="form-group col-md-4 col-md-4"> 
                                            <input type="checkbox"  value="ElevatorLift" checked={lift=="ElevatorLift"} onChange={(e) =>  setlift(e.target.value)}   ></input>
                                             &nbsp;<label>Elevator Lift</label>
                                            </div> 
                                            <div className="form-group col-md-4 col-md-4"> 
                                            <input type="checkbox"  value="Balcony" checked={balcony=="Balcony"} onChange={(e) =>  setbalcony(e.target.value)}   ></input>
                                             &nbsp;<label>Balcony</label>
                                            </div>                        
                                                
                                            <div className="form-btn">
                                                    <button type="submit" className="btn btn-pill btn-gradient color-4">Update</button>&nbsp;
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

export default Editagentproperty
