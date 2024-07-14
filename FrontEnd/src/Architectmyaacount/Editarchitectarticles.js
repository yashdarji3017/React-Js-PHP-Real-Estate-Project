import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useParams } from "react-router-dom";
import configData from '../config.json';
import Architectside from './Architectside';

const Editarchitectarticles = () => {
    var [title,setTitle] = useState("");
    var [description,setDescription] = useState("");
    var [reference,setReference] = useState("");
    var [add_date,setadd_Date] = useState("");
    var [photo_article,setphoto_article] = useState("");
    var [pdf_article,setpdf_article] = useState("");
    var [approve,setapprove] = useState("");
    var [imagename,setimagename] = useState("");
    var [imagenames,setimagenames] = useState("");
    var [type,setType] = useState("Architech");
   
    var [utype,setuype] = useState("Architech");   
    var [oldimage,setoldimage] = useState("");
    var [oldimages,setoldimages] = useState("");
    var [successMessage,setSuccessMessage] = useState("");

    var [titleError,setTitleError] = useState("");
    var [descriptionError,setDescriptionError] = useState("");
    var [referenceError,setReferenceError] = useState("");
    
     var [formvalid,setformvalid] = useState(true);
    
     
    
    
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
            setDescriptionError("Please Enter Description")
        }
        if(reference=="")
        {
            setformvalid(false);
            setReferenceError("Please Enter References")
        }
       
     
       
        if(title!=="" && description!=="" && reference!=="")
        {
        //API
       
        

      
        setformvalid(true)
        var postParams = new FormData();
        postParams.append("title",title);
        postParams.append("description",description);
        postParams.append("reference",reference);
        postParams.append("add_date",add_date);
        postParams.append("approve",approve);
       postParams.append("photo_article",photo_article);
        postParams.append("pdf_article",pdf_article);
        postParams.append("id",id);
      
        postParams.append("userid",'');
        postParams.append("architechid",localStorage.getItem("userid"));
        postParams.append("type",type);
        postParams.append("oldimage",oldimage);
          
        postParams.append("oldimages",oldimages);
          
            
        
         axios.post(configData.SERVER_URL+"update/updatearticles.php",postParams).then((response)=>{
         if(response.status == 200)
            {
                var result = response.data;
                alert(result)
                if(result=="Yes")
                {
                    window.scrollTo(0, 0);
                        setSuccessMessage("Article Updated successfully!");
                       
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
        

        axios.post(configData.SERVER_URL+"getSinglearticle.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                setTitle(result["title"]);
                setDescription(result["description"]);
                setReference(result["reference"]);
                setadd_Date(result["add_date"]);
                setapprove(result["approve"]);
                setimagename(result["photo_article"]);
                setimagenames(result["pdf_article"]);
                setTitle(result["title"]);
                setDescription(result["description"]);
             
                setoldimage(result["photo_article"]);
                setoldimages(result["pdf_article"]);
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
                                            <h2>Edit Articles
                                            
                                        
                                     
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
                                                   
                                                <div className="form-group col-sm-12">
                                                    <label>Title</label>
                                                    <input type="text" className="form-control"  value={title} onChange={(e) => setTitle(e.target.value)} placeholder=' title' required=""></input>
                                                    {(formvalid===false && title=="")&&(<><p className="error">{titleError}</p></>)}

                                                </div>
                                                <div className="form-group col-sm-12">
                                                    <label>Description</label>
                                                    <input type="text" className="form-control"  value={description} onChange={(e) => setDescription(e.target.value)} placeholder=' Decription' required=""></input>
                                                    {(formvalid===false && description=="")&&(<><p className="error">{descriptionError}</p></>)}

                                                </div>
                                                <div className="form-group col-sm-12">
                                                    <label>Image</label>
                                                    <input type="file" className="form-control" onChange={(e) => setphoto_article(e.target.files[0])}></input>
                                                    <img src={configData.ARTICLE_IMAGE +  imagename} width="100"/>

                                                </div>
                                                <div className="form-group col-sm-12">
 
                                                    <input type="file" className="form-control" onChange={(e) => setpdf_article(e.target.files[0])}></input>
                                                    <a target="_blank" href={configData.ARTICLE_IMAGES +  imagenames}>View File</a>

                                                </div>

                                                 

                                                <div className="form-group col-sm-12">
                                                    <label>Reference</label>
                                                    <input type="text" className="form-control"  value={reference} onChange={(e) => setReference(e.target.value)} placeholder='reference' required=""></input>
                                                    {(formvalid===false && reference=="")&&(<><p className="error">{referenceError}</p></>)}

                                                </div>
                                               

                                                <div className="form-btn col-sm-12 text-center">
                                                    <button type="submit" className="btn btn-pill btn-gradient color-4">Update</button>
                                                    <button type="button" class="btn btn-pill btn-dashed color-4">Cancel</button>
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
   
export default Editarchitectarticles
