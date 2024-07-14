import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import Architectside from './Architectside';

const Addarchitectplansfile = () => {

    var [file_title, setfile_title] = useState("");
    var [file_url, setfile_url] = useState("");
    var [free, setfree] = useState("");
    var [active, setactive ] = useState("");
    var [successMessage,setSuccessMessage] = useState("");
    var [planid,setplanid] = useState("");
    var [formvalid,setformvalid] = useState(true);
    var [planidError,setplanidError] = useState("");
    var [file_titleError, setfile_titleError] = useState("");
    var [file_urlError, setfile_urlError] = useState("");
    var [freeError, setfreeError] = useState("");
    var [activeError, setactiveError] = useState("");
    const [allplan,setAllplans] = useState([]);

    const getAllplans = () => {
        var postParams = new FormData();

        postParams.append("id", localStorage.getItem("userid"));

        axios.post(configData.SERVER_URL+"getArchitectplans.php",postParams).then((response)=>{
            console.log(response)
            if(response.status==200)
            {
                setAllplans(response.data);
            }
        });
    }
    useEffect(()=>{
        getAllplans();
        window.scrollTo(0, 0);

     },[]);  
       

    const handlePlanChange = (e) =>{
        var planid = e.target.value;
        setplanid(planid);
     };
  
    const handleForm = (e) => {
        e.preventDefault();
        if(file_title=="")
        {
            setformvalid(false);
            setfile_titleError("Please Enter Title")
        }
        if(file_url=="")
        {
            setformvalid(false);
            setfile_urlError("Please Enter Image URl")
        }
        if(free=="")
        {
            setformvalid(false);
            setfreeError("Please Select Free Or Not")
        }
        if(active=="")
        {
            setformvalid(false);
            setactiveError("Please Select Active Or Not")
        }
        if(planid=="")
        {
            setformvalid(false);
            setplanidError("Please Select Plan")
        }
       
        if(file_title!=="" && file_url!=="" && free!=="" && planid!=="" && active!=="")
        
        {
       
      setformvalid(true);
        var postParams = new FormData();
        postParams.append("file_title",file_title);
        postParams.append("file_url",file_url);
        postParams.append("free",free);
        postParams.append("active",active);
        postParams.append("planid",planid);


        axios.post(configData.SERVER_URL+"addPlanfile.php",postParams).then((response)=>{
         if(response.status == 200)
            {
                var result = response.data;
                 
                if(result=="Yes")
                { 
                    window.scrollTo(0, 0);
                    setSuccessMessage("Plan File Inserted successfully!");
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
                                            
                                            <form method='POST' onSubmit={handleForm} className="row gx-3">
                                            <div className="form-group col-sm-12">
                                                <label>Plan Name</label>
                                                <div>
                                                       <select onChange={handlePlanChange} className="form-control"  >
                                                            <option>Please Enter  Plans</option>
                                                            {
                                            allplan.map((row,index)=>{
                                                return(  
                                                    <option value={row.plan_id}>{row.plan_title}</option>
                                                 );
                                            })
                                        }
                                                        </select>
                                                        {(formvalid===false && planid=="")&&(<><p className="error">{planidError}</p></>)}   

                                                        </div>                                   </div>

                                             
                                            
                                                <div className="form-group col-sm-12">
                                                    <label>File Title</label>
                                                    <input type="text" value={file_title} onChange={(e) =>  setfile_title(e.target.value)} className="form-control"   placeholder='enter the title'  ></input>
                                                    {(formvalid===false && file_title=="")&&(<><p className="error">{file_titleError}</p></>)}   

                                                </div>
                                                <div className="form-group col-sm-12">
                                                    <label>File Url</label>
                                                    <input type="text" className="form-control" value={file_url} onChange={(e) =>  setfile_url(e.target.value)} placeholder='enter the url'  ></input>
                                                    {(formvalid===false && file_url=="")&&(<><p className="error">{file_urlError}</p></>)}   

                                                </div>
                                                <div className="form-group col-sm-6">
                                                <label>Is  Free </label>  &nbsp; &nbsp;
                                                <input type="radio" name="Free"  value="Yes" onChange={(e) =>  setfree(e.target.value)}   ></input>
                                                <label for="Yes">Yes </label>&nbsp; &nbsp;
                                                <input type="radio"  name="Free" value="No" onChange={(e) => setfree(e.target.value)}      ></input>
                                                <label for="No" >No</label>&nbsp; &nbsp;
                                                {(formvalid===false && free=="")&&(<><p className="error">{freeError}</p></>)}   

                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label>Is  Active </label>  &nbsp; &nbsp;
                                                <input type="radio" name="active"  value="Yes" onChange={(e) => setactive(e.target.value)}></input>
                                                <label for=" Yes">Yes</label>&nbsp; &nbsp;
                                                <input type="radio" name="active"  value="No"onChange={(e) => setactive(e.target.value)}></input>
                                                <label for="No">No</label>&nbsp; &nbsp;
                                                {(formvalid===false && active=="")&&(<><p className="error">{activeError}</p></>)}   

                                            </div>



                                                <div className="form-btn col-sm-12 text-center">
                                                    <button type="submit" className="btn btn-pill btn-gradient color-4">Save</button>
                                                    <button type="button" className="btn btn-pill btn-dashed color-4">Reset</button>
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
   
export default Addarchitectplansfile
