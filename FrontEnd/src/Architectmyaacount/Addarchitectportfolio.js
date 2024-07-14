import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import Architectside from './Architectside';

const Addarchitectportfolio = () => {
    var [title,setTitle] = useState("");
    var [description,setDescription] = useState("");
     
    var [start_date,setStart_date] = useState("");
    var [end_date,setEnd_date] =useState("");
    var [architechid,setarchitechId] = useState("");
    var [categoriesid,setcategoriesId] = useState("");
    var [verify,setVerify] = useState("");
    var [active,setActive] =useState("");
    var [successMessage,setSuccessMessage] = useState("");
    var [titleError,setTitleError] = useState("");
    var [descriptionError,setDescriptionError] = useState("");
    var [start_dateError,setStart_dateError] = useState("");
    var [end_dateError,setEnd_dateError] = useState("");
     var [categoriesidError,setcategoriesIdError] = useState("");
    
    var [formvalid,setformvalid] = useState(true); 
   
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
        window.scrollTo(0, 0);

     },[]); 
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
    
     const handleCategoriesChange = (e) =>{
        var categoriesid = e.target.value;
        setcategoriesId(categoriesid);
     }; 
    const handleForm = (e) => {
        e.preventDefault();
        if(title=="")
        {
            setformvalid(false);
            setTitleError("Please Enter Title")
        }
        if(description=="")
        {
            setformvalid(false);
            setDescriptionError("Please Enter description")
        }
        if(start_date=="")
        {
            setformvalid(false);
            setStart_dateError("Please select starting date")
        }
        if(end_date=="")
        {
            setformvalid(false);
            setEnd_dateError("Please select ending date")
        }
    
        if(categoriesid=="")
        {
            setformvalid(false);
            setcategoriesIdError("Please select category")
        }
         
        
        if(title!=="" && description!=="" && start_date!=="" && end_date!=="" &&  categoriesid!=="")
        {
            setformvalid(true)
         var postParams = new FormData();
         postParams.append("title",title);
         postParams.append("description",description);
         postParams.append("start_date",start_date);
         postParams.append("end_date",end_date);
         postParams.append("architechid",localStorage.getItem("userid"));
         postParams.append("categoriesid",categoriesid);
         postParams.append("verify",verify);
         postParams.append("active",active);

        
         axios.post(configData.SERVER_URL+"addPortfolio.php",postParams).then((response)=>{
            
        if(response.status == 200)
            {
                var result = response.data;
                 alert(result)
                 if(result=="Yes")
                { 
                window.scrollTo(0, 0);
                setSuccessMessage("Portfolio Inserted successfully!");
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
                                            <h2>Add Portfolio
                                            
                                        
                                     
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

                                                    </div>                                                </div>
                                            <div className="form-group col-md-6 col-sm-6">
                                                <label>Title</label>
                                                <input type="text" className="form-control" value={ title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Your Title" ></input>
                                                {(formvalid===false && title=="")&&(<><p className="error">{titleError}</p></>)}

                                            </div>
                                            <div className="form-group col-sm-12">
                                                <label>Description</label>
                                                <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description' rows="4"></textarea>
                                                {(formvalid===false && description=="")&&(<><p className="error">{descriptionError}</p></>)}

                                            </div>

                                            <div className="form-group col-md-6 col-md-6">
                                                <label>Start Date</label>
                                                <input type="Date" className="form-control" value={start_date} onChange={(e) => setStart_date(e.target.value)}></input>
                                                {(formvalid===false && start_date=="")&&(<><p className="error">{start_dateError}</p></>)}

                                            </div>

                                            <div className="form-group col-md-6 col-md-6">
                                                <label>End Date</label>
                                                <input type="Date" className="form-control" value={end_date} onChange={(e) => setEnd_date(e.target.value)}></input>
                                                {(formvalid===false && end_date=="")&&(<><p className="error">{end_dateError}</p></>)}

                                            </div>
                                           
                                            <div className="form-btn">

                                                <button type=" submit" className="btn btn-pill btn-gradient color-4">Submit</button>&nbsp;
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
   
export default Addarchitectportfolio
