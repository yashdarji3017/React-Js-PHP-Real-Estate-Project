import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import AgentSide from './AgentSide';

const Addagenttpropertyfacilities = () => {
    var [facilities_name,setfacilities_name] = useState("");
    
    var [propertyid,setpropertyid] = useState("");

    var [propertyidError,setpropertyidError] = useState("");
    var [facilitiesidError,setfacilitiesidError] = useState("");
    var [formvalid,setformvalid] = useState(true);

    var [successMessage,setSuccessMessage] = useState("");  

    
    const [allproperty,setProperty] = useState([]);

    var [facilitiesid,setfacilitiesid] = useState("");

        const [facilities,setfacilities] = useState([]);
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
     useEffect(()=>{
        getproperty();
        getfacilities();
        window.scrollTo(0, 0);

     },[]);
     const handleFacilitiesChange = (e) =>{
        var  facilitiesid = e.target.value;
        setfacilitiesid(facilitiesid);
     };
      const handlePropertyChange = (e) =>{
        var propertyid = e.target.value;
        setpropertyid(propertyid);
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
        setformvalid(true);

        var postParams = new FormData();
        postParams.append("facilitiesid",facilitiesid);
       
        postParams.append("propertyid",propertyid);
       
        axios.post(configData.SERVER_URL+"addPropertyfacilities.php",postParams).then((response)=>{
           
        if(response.status == 200)
            {
                var result = response.data;
                console.log(response)
                alert(result)
                if(result=="Yes")
                { 
                    window.scrollTo(0, 0);
                    setSuccessMessage("Media Inserted successfully!");
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
return (

    <>
      <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <AgentSide/>
                    <div className="col-lg-9">  
                    <div className="sidebar-user sticky-cls">
                    
                  
                                       
                                           

                                      
                                       
                                         
                                           
                                        
                    <div className="card-body report-table">
                   
                        <center>
                                            <h2>Add Agent Property Facilities
                                            
                                        
                                     
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
                                                        <label>Property Name</label>
                                                        <div>
                                                       <select onChange={handlePropertyChange} className="form-control"  >
                                                            <option>Please Enter Property</option>
                                                            {
                                            allproperty.map((row,index)=>{
                                                return(  
                                                    <option value={row.property_id}>{row.property_title} </option>
                                                 );
                                            })
                                        }
                                                        </select>
                                                        {(formvalid===false && propertyid=="")&&(<><p className="error">{propertyidError}</p></>)}

                                                    </div>     
                                                    </div>   
                                                   
                                                    <div className="form-group col-md-6 col-sm-6">
                                                        <label>Facility Name</label>
                                                        <div>
                                                       <select onChange={handleFacilitiesChange} className="form-control"  >
                                                            <option>Please Enter Facility </option>
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
   
                                            
                                              
                                            
                                            <div className="form-btn">
                                                    <button type="submit" className="btn btn-pill btn-gradient color-4">Submit</button>&nbsp;
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
   
export default Addagenttpropertyfacilities
