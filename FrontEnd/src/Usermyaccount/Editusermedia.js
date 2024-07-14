import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import Side from './Side';

const Editusermedia = () => {

    var [title,settitle] = useState("");
    var [image_url,setimage_url] = useState("");
    var [imagetype,setimagetype] = useState("");
    var [propertyid,setpropertyid] = useState("");
    var [isactive,setisactive] = useState("");
    var [photo_file,setphoto_file] = useState("");
    var [imagename,setimagename] = useState("");
    var [oldimage,setoldimage] = useState("");
    var [successMessage,setSuccessMessage] = useState("");
    var [titleError,settitleError] = useState("");
    var [image_urlError,setimage_urlError] = useState("");
    var [imagetypeError,setimagetypeError] = useState("");
    var [propertyidError,setpropertyidError] = useState("");
    var [isactiveError,setisactiveError] = useState("");

    var [formvalid,setformvalid] = useState(true);  

    
    
    const [allproperty,setProperty] = useState([]);

    const getproperty = () => {
      
        axios.get(configData.SERVER_URL+"getProperty.php").then((response)=>{
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
        
        if(title!=="" && image_url!=="" && imagetype!=="" && propertyid!=="" && isactive!=="" )
        
        {
       
      setformvalid(true)
        var postParams = new FormData();
        postParams.append("title",title);
        postParams.append("image_url",image_url);
        postParams.append("imagetype",imagetype);
        postParams.append("propertyid",propertyid);
        postParams.append("isactive",isactive);
        postParams.append("photo_file",photo_file);
        postParams.append("id",id);

         postParams.append("oldimage",oldimage);
          
 
        axios.post(configData.SERVER_URL+"update/updatemedia.php",postParams).then((response)=>{
           
        if(response.status == 200)
            {
                var result = response.data;
                alert(result)
                if(result=="Yes")
                { 
                    window.scrollTo(0, 0);
                    setSuccessMessage("Media Updated successfully!");
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

        axios.post(configData.SERVER_URL+"getSinglemedia.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                settitle(result["title"]);
                setimage_url(result["image_url"]);
                setimagetype(result["file_type"]);
             
                setpropertyid(result["property_id"]);
                setisactive(result["active"]);
                 setimagename(result["media_file"]);
                 setoldimage(result["media_file"]);
                 getproperty();
                 window.scrollTo(0,0);
             }
        });


    },[]);
  return (
    <div>
       <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <Side/>
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
                                            <h2>Edit Your Property Media</h2>&nbsp;</center>
                                            <div className="card-body admin-form">
                                            {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                           
                                            <form method='POST' onSubmit={handleForm} className="row gx-3">
                                                <div className="form-group col-md-6 col-sm-6">
                                                        <label>Title<span className="font-danger">*</span></label>
                                                        <input type="text" value={title} onChange={(e) => settitle(e.target.value)} className="form-control" placeholder="enter your Projectname" name='title' required=""></input>
                                                        {(formvalid===false && title=="")&&(<><p className="error">{titleError}</p></>)}   

                                                    </div>
                                                    <div className="form-group col-md-6 col-sm-6">
                                                        <label>Property Name </label>
                                                        <div>
                                                       <select value={propertyid} onChange={handlePropertyChange} className="form-control"  >Please Enter Property ID
                                                            <option>Please Enter Property ID</option>
                                                            {
                                            allproperty.map((row,index)=>{
                                                return(  
                                                    <option value={row.property_id}>{row.property_title} </option>
                                                 );
                                            })
                                        }
                                                        </select>

                                                    </div>     
                                                    </div>   
                                                    <div className="form-group col-md-6 col-sm-6">
                                                        <label>Image URL<span className="font-danger">*</span></label>
                                                        <input type="text" value={image_url} onChange={(e) => setimage_url(e.target.value)} className="form-control" placeholder="image url" name='image_url' required=""></input>

                                                    </div>
                                                    <div className="form-group col-md-6 col-sm-6">
                                                <label  >Type  </label>
                                                <select value={imagetype} className="form-control" onChange={(e)=>setimagetype(e.target.value)}>
                                                    <option>Please select Type  </option>
                                                    <option value="Video">Video</option>
                                                    <option value="Image">Image</option>
                                                    <option value="Pdf">Pdf</option>

                                                </select>
                                                {(formvalid===false && imagetype=="")&&(<><p className="error">{imagetypeError}</p></>)}   

                                            </div> 
                                            <div className="form-group col-md-12 col-sm-6">
                                                <label>Photo  </label>
                                                <input type="file"   className="form-control" onChange={(e) => setphoto_file(e.target.files[0])}></input>
                                                <a target="_blank" href={configData.MEDIA_IMAGE+ imagename} >View Here </a>

                                            </div>  
                                                
                                                &nbsp; &nbsp;
                                                <div className="form-group col-sm-6">
                                                <label>Is Active</label>  &nbsp; &nbsp;
                                                <input type="radio" value="Yes" checked={isactive=="Yes"} onChange={(e) =>  setisactive(e.target.value)}></input>
                                                <label for=" Yes">Yes</label>&nbsp; &nbsp;
                                                <input type="radio" value="No" checked={isactive=="No"} onChange={(e) => setisactive(e.target.value)}></input>
                                                <label for="No">No</label>&nbsp; &nbsp;
                                                {(formvalid===false && isactive=="")&&(<><p className="error">{isactiveError}</p></>)}   

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

export default Editusermedia
