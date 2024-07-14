import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import AgentSide from './AgentSide';

const Editagentpropertyfacilities = () => {
    var [propertyid,setpropertyid] = useState("");
    var [facilitiesid,setfacilitiesid] = useState("");
    var [successMessage,setSuccessMessage] = useState("");
  var [propertyidError,setpropertyidError] = useState("");
    var [facilitiesidError,setfacilitiesidError] = useState("");
    var [formvalid,setformvalid] = useState(true);

    const [facilities,setfacilities] = useState([]);
    const [allproperty,setProperty] = useState([]);

 
        const getfacilities = () => {
            axios.get(configData.SERVER_URL+"getFacilities.php").then((response)=>{
                 if(response.status == 200)
                {
                    setfacilities(response.data);
                }
            });
        }

    const getproperty = () => {
        var postParams = new FormData();
        postParams.append("id", localStorage.getItem("userid"));

       
        axios.post(configData.SERVER_URL+"getUserProperty.php",postParams).then((response)=>{
            console.log(response.data);
            if(response.status == 200)
            
            {
              
                setProperty(response.data);
              
            }
        });
    }
    
      const handlePropertyChange = (e) =>{
        var propertyid = e.target.value;
        setpropertyid(propertyid);
     };
     const handleFacilitiesChange = (e) =>{
        var  facilitiesid = e.target.value;
        setfacilitiesid(facilitiesid);
     };
    const handleForm = (e) => {
        e.preventDefault();
          if(propertyid=="")
        {
            setformvalid(false);
            setpropertyidError("Please Select Property ")
        }
        if(facilitiesid=="")
        {
            setformvalid(false);
            setfacilitiesidError("Please Select  Facilities")
        }
        if(propertyid!=="" && facilitiesid!=="")
       {
        setformvalid(true)
    var postParams = new FormData();
    postParams.append("propertyid",propertyid);
    postParams.append("facilitiesid",facilitiesid);
    postParams.append("id",id);

        
        axios.post(configData.SERVER_URL+"update/updatepropertyfacilities.php",postParams).then((response)=>{
       
        if(response.status == 200)
            {
                var result = response.data;
                if(result=="Yes")
                { 
                    window.scrollTo(0, 0);
                    setSuccessMessage("Property Facilities Updated successfully!");
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
    

    axios.post(configData.SERVER_URL+"getSinglepropertyfacility.php",postParams).then((response)=>{
        if(response.status == 200)
        {
            var result = response.data;
            setpropertyid(result["property_id"]);
            setfacilitiesid(result["facilities_id"]);
            getfacilities();
            getproperty();

            window.scrollTo(0, 0);

        }


    }); 
},[]);
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
                                            <div className="row">
                                                <center>
                                            <h2>Edit Property Facilities</h2>&nbsp;</center>
                                            <div className="card-body admin-form">
                                            {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                           
                                            <form method='POST' onSubmit={handleForm} className="row gx-3">
                                            <div className="form-group col-md-12 col-sm-6">
                                                        <label> Property Name </label>
                                                        <div>
                                                       <select value={propertyid} onChange={handlePropertyChange} className="form-control"  >
                                                            <option>Please Enter Property  </option>
                                                            {
                                            allproperty.map((row,index)=>{
                                                return(  
                                                    <option value={row.property_id}>{row.property_title} {row.lastname}</option>
                                                 );
                                            })
                                        }
                                                        </select>
                                                                                                                {(formvalid===false && propertyid=="")&&(<><p className="error">{propertyidError}</p></>)}

                                                    </div>
                                                    </div>
                                                    <div className="form-group col-md-12 col-sm-6">
                                                        <label>Facility  Name </label>
                                                        <div>
                                                       <select value={facilitiesid} onChange={handleFacilitiesChange} className="form-control"  >
                                                            <option>Please Enter Facility  </option>
                                                            {
                                            facilities.map((row,index)=>{
                                                return(  
                                                    <option value={row.facilities_id}>{row.facilities_name} {row.lastname}</option>
                                                 );
                                            })
                                        }
                                                        </select>
                                                                                                                {(formvalid===false && facilitiesid=="")&&(<><p className="error">{facilitiesidError}</p></>)}

                                                    </div>    
                                                    </div>

                                                <div className="form-btn col-sm-12 text-center">
                                                    <button type=" submit" className="btn btn-pill btn-gradient color-4">Update</button>&nbsp;
                                                    <button type="button" class="btn btn-pill btn-dashed color-4">Cancel</button>
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

export default Editagentpropertyfacilities
