import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import Architectside from './Architectside';

const Addarchitectarticles = () => {


    var [title,setTitle] = useState("");
    var [description,setDescription] = useState("");
    var [reference,setReference] = useState("");
    var [add_date,setadd_Date] = useState("");
    var [photo_article,setphoto_article] = useState("");
    var [pdf_article,setpdf_article] = useState("");
    var [approve,setapprove] = useState("");
    var [userid,setuserId] = useState("");
    var [type,setType] = useState("Architech");
   
    var [utype,setuype] = useState("Architech");   
    
    var [titleError,setTitleError] = useState("");
    var [descriptionError,setDescriptionError] = useState("");
    var [referenceError,setReferenceError] = useState("");
    var [photo_articleError,setphoto_articleError] = useState("");
    var [pdf_articleError,setpdf_articleError] = useState("");

    var [successMessage,setSuccessMessage] = useState("");
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
       
        if(photo_article=="")
        {
            setformvalid(false);
            setphoto_articleError("Please Select Photo")
        }
        if(pdf_article=="")
        {
            setformvalid(false);
            setpdf_articleError("Please Select PDF")
        }
       
        if(title!=="" && description!=="" && reference!==""  && photo_article!=="" &&  pdf_article!=="" )
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
        postParams.append("userid",userid);
        postParams.append("architechid",localStorage.getItem("userid"));
        postParams.append("type",type);

         axios.post(configData.SERVER_URL+"addArticles.php",postParams).then((response)=>{
         if(response.status == 200)
            {
                var result = response.data;
                alert(result);
                  if(result=="Yes")
                 
                {
                    window.scrollTo(0, 0);
                        setSuccessMessage("Article Inserted successfully!");
                       
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
    
    useEffect(()=>{
        window.scrollTo(0, 0);

      },[]); 
   
   
     
     
       

return (

    <>
      <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <Architectside/>
                    <div className="col-lg-9">  
                    <div className="sidebar-user sticky-cls">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 m-auto">
                                <div className="">
                                    <div className="mt-3">
                                        <h2>Add Articles
                                        </h2>
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
                                                {(formvalid===false && photo_article=="")&&(<><p className="error">{photo_articleError}</p></>)}

                                            </div>
                                            <div className="form-group col-sm-12">
                                                <label>PDF</label>
                                                <input type="file" className="form-control" onChange={(e) => setpdf_article(e.target.files[0])}></input>
                                                {(formvalid===false && pdf_article=="")&&(<><p className="error">{pdf_articleError}</p></>)}

                                            </div>
                                            

                                            <div className="form-group col-sm-12">
                                                <label>Reference</label>
                                                <input type="text" className="form-control"  value={reference} onChange={(e) => setReference(e.target.value)} placeholder='reference' required=""></input>
                                                {(formvalid===false && reference=="")&&(<><p className="error">{referenceError}</p></>)}

                                            </div>




                                            <div className="form-btn col-sm-12 text-center">
            <button type="submit" className="btn btn-pill btn-gradient color-4">Save</button>&nbsp;
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
            
        </section>



    
    </>
    )
}
   
export default Addarchitectarticles
