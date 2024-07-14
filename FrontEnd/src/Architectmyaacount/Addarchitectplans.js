import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import Architectside from './Architectside';

const Addarchitectplans = () => {
    var [plan_title,setplan_title] = useState("");
    var [visits,setvisits] = useState("");
    var [specification,setspecification] = useState("");
    var [price,setprice] = useState("");
    var [update_price,setupdate_price] = useState("");
    var [term_condition,setterm_condition] = useState("");
    var [description,setdescription] = useState("");
    var [add_date,setadd_date] = useState("");
    var [address,setaddress] = useState("");
    var [pincode,setpincode] = useState("");
    var [architechid,setarchitechId] = useState("");
    var [categoriesid,setcategoriesId] = useState("");
    var [citiesId,setcitiesId] = useState("");  
    var [stateId,setstateId] = useState("");
    var [active,setactive] = useState("");
    var [approve,setapprove] =useState("");
    var [photo_file,setphoto_file] =useState("");
    var [plan_file,setplan_file] =useState("");

    var [plan_titleError,setplan_titleError] = useState("");
    var [visitsError,setvisitsError] = useState("");
    var [specificationError,setspecificationError] = useState("");
    var [priceError,setpriceError] = useState("");
   
    var [term_conditionError,setterm_conditionError] = useState("");
    var [descriptionError,setdescriptionError] = useState("");
    var [add_dateError,setadd_dateError] = useState("");
    var [addressError,setaddressError] = useState("");
    var [pincodeError,setpincodeError] = useState("");
    var [architechidError,setarchitechIdError] = useState("");
    var [categoriesidError,setcategoriesIdError] = useState("");
    var [citiesIdError,setcitiesIdError] = useState("");  
    var [stateIdError,setstateIdError] = useState("");
    var [activeError,setactiveError] = useState("");
    var [approveError,setapproveError] =useState("");
    var [photo_fileError,setphoto_fileError] =useState("");
    var [plan_fileError,setplan_fileError] =useState("");
    var [formvalid,setformvalid] = useState(true);
    var [successMessage,setSuccessMessage] = useState("");

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
    useEffect(()=>{
        window.scrollTo(0, 0);

        getAllStates();
     },[]); 

     const handleCitiesChange = (e) =>{
        var  allcities = e.target.value;
         setcitiesId(allcities);
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




    const [allarchitech,setArchitech] = useState([]);

    const getAllArchitech = () => {
        axios.get(configData.SERVER_URL+"getArchitech.php").then((response)=>{
            if(response.status==200)
            {
                setArchitech(response.data);
            }
        });
    }
    useEffect(()=>{
        getAllArchitech();
        window.scrollTo(0,0,);
     },[]); 
     const [categories,setCategories] = useState([]);

     const getcategories = () => {
        axios.post(configData.SERVER_URL+"getCategories.php").then((response)=>{
              if(response.status==200)
             {
                setCategories(response.data);
             }
         });
     }
     useEffect(()=>{
        getcategories();
     },[]); 
     const handleArchitechChange = (e) =>{
        var architechid = e.target.value;
        setarchitechId(architechid);
     }; 
     const handleCategoriesChange = (e) =>{
        var categoriesid = e.target.value;
        setcategoriesId(categoriesid);
     }; 

    const handleForm = (e) => {
        e.preventDefault();
         
        if(plan_title=="")
        {
            setformvalid(false);
            setplan_titleError("Please Enter Plan Title")
        }
        if(visits=="")
        {
            setformvalid(false);
            setvisitsError("Please Enter visits")
        }
        if(specification=="")
        {
            setformvalid(false);
            setspecificationError("Please Enter Specification")
        }
        if(price=="")
        {
            setformvalid(false);
            setpriceError("Please Enter Price")
        }
        if(term_condition=="")
        {
            setformvalid(false);
            setterm_conditionError("Please Enter Term & Condition")
        }
        if(description=="")
        {
            setformvalid(false);
            setdescriptionError("Please Enter Description")
        }
        if(add_date=="")
        {
            setformvalid(false);
            setadd_dateError("Please select Date")
        }
        if(pincode=="")
        {
            setformvalid(false);
            setpincodeError("Please Enter Pincode")
        }
         if(address=="")
        {
            setformvalid(false);
            setaddressError("Please Enter Address")
        }
        if(architechid=="")
        {
            setformvalid(false);
            setarchitechIdError("Please Select Architect")
        } 
        if(categoriesid=="")
        {
            setformvalid(false);
            setcategoriesIdError("Please Select Category")
        }
        if(citiesId=="")
        {
            setformvalid(false);
            setcitiesIdError("Please Select City")
        }
         if(stateId=="")
        {
            setformvalid(false);
            setstateIdError("Please Select State")
        }
        if(active=="")
        {
            setformvalid(false);
            setactiveError("Select Plan Is active or not ")
        } 
        if(approve=="")
        {
            setformvalid(false);
            setapproveError("Select Plan Is Approve or not")
        }
        if(photo_file=="")
        {
            setformvalid(false);
            setphoto_fileError("Select Plan Photo")
        }
        if(plan_file=="")
        {
            setformvalid(false);
            setplan_fileError("Select Plan File")
        }
        if(plan_title!=="" && visits!=="" && specification!=="" && price!=="" && term_condition!=="" && description!=="" && add_date!=="" && pincode!=="" && address!==""
        && architechid!=="" && categoriesid!=="" && citiesId!=="" && stateId!=="" && active!=="" && approve!=="" && photo_file!=="" && plan_file!=="")
        {
            setformvalid(true)
            var postParams = new FormData();
            postParams.append("plan_title",plan_title);
            postParams.append("visits",visits);
            postParams.append("specification",specification);
            postParams.append("price",price);
            postParams.append("update_price",update_price);
            postParams.append("term_condition",term_condition);
            postParams.append("description",description);
            postParams.append("add_date",add_date);
            postParams.append("pincode",pincode);
            postParams.append("address",address);
            postParams.append("architechid",localStorage.getItem("userid"));
            postParams.append("categoriesid",categoriesid);
            postParams.append("citiesId",citiesId);
            postParams.append("stateId",stateId);
            postParams.append("active",active);
            postParams.append("approve",approve);
            postParams.append("photo_file",photo_file);
            postParams.append("plan_file",plan_file);
            
            axios.post(configData.SERVER_URL+"addPlan.php",postParams).then((response)=>{
             if(response.status == 200)
            {
                var result = response.data;
                
                if(result=="Yes")
                { 
                    window.scrollTo(0, 0);
                    setSuccessMessage("Plan Inserted successfully!");
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
                                            <h2>Add Plans
                                     
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
                                            
                                            <form method='POST' onSubmit={handleForm}  className="row gx-3">
                                        <div className="form-group col-md-6 col-sm-6">
                                            <label>Plan Title </label>
                                            <input type="text" value={plan_title} onChange={(e) =>  setplan_title(e.target.value)} className="form-control" placeholder="enter your title" ></input>
                                            {(formvalid===false && plan_title=="")&&(<><p className="error">{plan_titleError}</p></>)}

                                        </div>
                                        <div className="form-group col-md-6 col-sm-6">
                                            <label>Categories Name</label>
                                            <div>
                                                       <select onChange={handleCategoriesChange} className="form-control"  >
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

                                                    </div>                                              </div>
                                       
                                        <div className="form-group col-md-4 col-sm-6">
                                            <label>Plan Main Image </label>
                                            <input type="file"  onChange={(e) => setphoto_file(e.target.files[0])}className="form-control"  ></input>
                                            {(formvalid===false && plan_title=="")&&(<><p className="error">{plan_titleError}</p></>)}

                                        </div>
                                        <div className="form-group col-md-4 col-sm-6">
                                            <label>Visits </label>
                                            <input type="text" value={ visits} onChange={(e) =>  setvisits(e.target.value)} className="form-control" placeholder="enter your Visits" ></input>
                                            {(formvalid===false && visits=="")&&(<><p className="error">{visitsError}</p></>)}

                                        </div>
                                        <div className="form-group col-md-4 col-sm-6">
                                            <label>Specification </label>
                                            <input type="text" value={  specification} onChange={(e) =>  setspecification(e.target.value)} className="form-control" placeholder="enter your specification" ></input>
                                            {(formvalid===false && specification=="")&&(<><p className="error">{specificationError}</p></>)}

                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label> Price </label>
                                            <input type="text" value={  price} onChange={(e) =>  setprice(e.target.value)}className="form-control" placeholder="Enter your price"></input>
                                            {(formvalid===false && price=="")&&(<><p className="error">{priceError}</p></>)}

                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label> Update Price </label>
                                            <input type="text" value={ update_price} onChange={(e) =>  setupdate_price(e.target.value)} className="form-control" placeholder="Enter your  Update price"></input>
                                            {(formvalid===false && update_price=="")&&(<><p className="error">{priceError}</p></>)}

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
                                             <div className="form-group col-sm-6">
                                                <label>Address</label>
                                                <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} className="form-control" placeholder="Enter your Address"></input>
                                                {(formvalid===false && address=="")&&(<><p className="error">{addressError}</p></>)}

                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label>Pincode</label>
                                                <input type="number" value={pincode} onChange={(e) => setpincode(e.target.value)} className="form-control" placeholder="Enter pincode"></input>
                                                {(formvalid===false && pincode=="")&&(<><p className="error">{pincodeError}</p></>)}

                                            </div>
                                        <div className="form-group col-sm-12">
                                            <label>Update Terms & Condition</label>
                                            <input type="text" name="term_conditon" className="form-control" value={ term_condition} onChange={(e) =>  setterm_condition(e.target.value)} placeholder="Term & Condition"></input>
                                            {(formvalid===false && term_condition=="")&&(<><p className="error">{term_conditionError}</p></>)}

                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Plans Description</label>
                                            <textarea   value={ description} onChange={(e) => setdescription(e.target.value)} placeholder='Description' className="form-control" rows="4"></textarea>
                                            {(formvalid===false && description=="")&&(<><p className="error">{descriptionError}</p></>)}

                                        </div>
                                        <div className="form-group col-md-6 col-md-12">
                                            <label>Plan Add Date</label>
                                            <input type="Date" className="form-control" value={add_date} onChange={(e) => setadd_date(e.target.value)} ></input>
                                            {(formvalid===false && add_date=="")&&(<><p className="error">{add_dateError}</p></>)}    

                                        </div>
                                        <div className="form-group col-md-6 col-md-12">
                                            <label>Plans Files </label>
                                            <input type="file"  onChange={(e) => setplan_file(e.target.files[0])}className="form-control"  ></input>
                                            {(formvalid===false && plan_file=="")&&(<><p className="error">{plan_fileError}</p></>)}

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
   
export default Addarchitectplans
