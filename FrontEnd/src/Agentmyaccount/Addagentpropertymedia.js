import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import AgentSide from './AgentSide';

const Addagentpropertymedia = () => {
    var [title,settitle] = useState("");
    var [image_url,setimage_url] = useState("");
    var [imagetype,setimagetype] = useState("");
    var [propertyid,setpropertyid] = useState("");
    var [isactive,setisactive] = useState("");
    var [media_file,setmedia_file] = useState("");
    var [titleError,settitleError] = useState("");
    var [image_urlError,setimage_urlError] = useState("");
    var [imagetypeError,setimagetypeError] = useState("");
    var [propertyidError,setpropertyidError] = useState("");
    var [isactiveError,setisactiveError] = useState("");
    var [media_fileError,setmedia_fileError] = useState("");

    var [successMessage,setSuccessMessage] = useState("");
    var [formvalid,setformvalid] = useState(true);
  

    
    const [allproperty,setProperty] = useState([]);

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
        window.scrollTo(0, 0);

     },[]);
      const handlePropertyChange = (e) =>{
        var propertyid = e.target.value;
        setpropertyid(propertyid);
     };
    const handleForm = (e) => {
        e.preventDefault();
        if(title=="")
        {
            setformvalid(false);
            settitleError("Please Enter Title")
        }
        if(image_url=="")
        {
            setformvalid(false);
            setimage_urlError("Please Enter Image URl")
        }
        if(imagetype=="")
        {
            setformvalid(false);
            setimagetypeError("Please Select Image Type")
        }
        if(propertyid=="")
        {
            setformvalid(false);
            setpropertyidError("Please Select Property")
        }
        if(isactive=="")
        {
            setformvalid(false);
            setisactiveError("Please Select Active")
        }
        if(media_file=="")
        {
            setformvalid(false);
            setmedia_fileError("Please Select Media File")
        }
        if(title!=="" && image_url!=="" && imagetype!=="" && propertyid!=="" && isactive!=="" && media_file!=="")
        
        {
       
            setformvalid(true);

        var postParams = new FormData();
        postParams.append("title",title);
        postParams.append("image_url",image_url);
        postParams.append("imagetype",imagetype);
        postParams.append("propertyid",propertyid);
        postParams.append("isactive",isactive);
        postParams.append("media_file",media_file);
       
        axios.post(configData.SERVER_URL+"addMedia.php",postParams).then((response)=>{
           
        if(response.status == 200)
            {
                var result = response.data;
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
                                            <h2>Add Agent Property Media
                                            
                                        
                                     
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
                                                        <label>Title<span className="font-danger">*</span></label>
                                                        <input type="text" value={title} onChange={(e) => settitle(e.target.value)} className="form-control" placeholder="Enter Media Title" name='title' required=""></input>
                                                        {(formvalid===false && title=="")&&(<><p className="error">{titleError}</p></>)}   

                                                    </div>
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
                                                        <label>Image URL<span className="font-danger">*</span></label>
                                                        <input type="text" value={image_url} onChange={(e) => setimage_url(e.target.value)} className="form-control" placeholder="image url" name='image_url' required=""></input>
                                                    </div>
                                                    <div className="form-group col-md-6 col-sm-6">
                                                <label>Type</label>
                                                <select className="form-control" onChange={(e)=>setimagetype(e.target.value)}>
                                                    <option >Please select Type  </option>
                                                    <option value="Video">Video</option>
                                                    <option value="Image">Image</option>
                                                    <option value="Pdf">Pdf</option>

                                                </select>
                                                {(formvalid===false && imagetype=="")&&(<><p className="error">{imagetypeError}</p></>)}   

                                            </div> 
                                            <div className="form-group col-md-12 col-sm-6">
                                                <label>Photo  </label>
                                                <input type="file"   className="form-control" onChange={(e) => setmedia_file(e.target.files[0])}></input>
                                                {(formvalid===false && media_file=="")&&(<><p className="error">{media_fileError}</p></>)}   

                                            </div>  
                                                
                                                &nbsp; &nbsp;
                                                <div className="form-group col-sm-6">
                                                <label>Is Active</label>  &nbsp; &nbsp;
                                                <input type="radio" name="Active" value="Yes" onChange={(e) =>  setisactive(e.target.value)}></input>
                                                <label for=" Yes">Yes</label>&nbsp; &nbsp;
                                                <input type="radio" name="Active" value="No" onChange={(e) => setisactive(e.target.value)}></input>
                                                <label for="No">No</label>&nbsp; &nbsp;
                                                {(formvalid===false && isactive=="")&&(<><p className="error">{isactiveError}</p></>)}   

                                            </div>
                                            
                                            <div className="form-btn">
                                                    <button type="submit" className="btn btn-pill btn-gradient color-4">Submit</button>
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
   
export default Addagentpropertymedia
