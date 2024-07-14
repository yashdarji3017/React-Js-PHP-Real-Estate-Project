import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useParams } from "react-router-dom";
import configData from '../config.json';
import Architectside from './Architectside';

const Viewarchitectarticles = () => {
    var [title,setTitle] = useState("");
    var [description,setDescription] = useState("");
    var [reference,setReference] = useState("");
    var [add_date,setadd_Date] = useState("");
    var [photo_file,setphoto_file] = useState("");
    var [pdf_file,setpdf_file] = useState("");
    var [approve,setapprove] = useState("");
    var [imagename,setimagename] = useState("");
    var [imagenames,setimagenames] = useState("");
    var [type,setType] = useState("Agent");
    var [type,setType] = useState("Architech");

    var [userid,setuserId] = useState("");
    var [architechid,setarchitechId] = useState("");
    var [username,setusername] = useState("");
    var [architechname,setarchitechname] = useState("");


    
   
    let {id} =useParams();
    useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);
        

        axios.post(configData.SERVER_URL+"getSinglearticle.php",postParams).then((response)=>{
            if(response.status == 200)
        
            {
                var result = response.data;
                console.log(response.data)
                setTitle(result["title"]);
                setDescription(result["description"]);
                setReference(result["reference"]);
                setadd_Date(result["add_date"]);
                setapprove(result["approve"]);
                setimagename(result["photo_article"]);
                setimagenames(result["pdf_article"]);
                setarchitechId(result["first_name"]);
                setuserId(result["firstname"]);
                setarchitechname(result["last_name"]);
                setusername(result["lastname"]);
                setType(result["usertype"]);
                window.scrollTo(0, 0);
            }


        }); 
    })
     
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
                                            <h2>View Architect Articles
                                            
                                        
                                     
                                </h2> </center>
                               
 
                                           
                                 <br></br>
                                <div className="container-fluid">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="">
                                      <div className="">
                                      <table className="table table-bordered" cellPadding="20">
                                                <tr>
                                                    <th>Article Title</th>
                                                     <td>{title}</td>
                                                </tr>
                                                <tr>
                                                    <th>Description</th>
                                                    <td>{description}</td>
                                                 </tr>
                                                  <tr>
                                                    <th>Reference</th>
                                                    <td>{reference}</td>
                                                </tr>
                                                <tr>
                                                    <th>Add Date</th>
                                                    <td>{add_date}</td>
                                                </tr>
                                                <tr>
                                                    <th>Type</th>
                                                    <td>{type}</td>
                                                 </tr>
                                                 {type==="User" &&  (<>

                                                 <tr>
                                                    <th>User Name</th>
                                                    <td>{userid} {username}</td>
                                                 </tr> 

                                                 </>)
                                                    }
                                                    {type==="Architech" &&  (<>
                                                     <tr>
                                                    <th>Architech Name</th>
                                                    <td>{architechid} {architechname}</td>
                                                     </tr>
                                                     </>
                                                        )
                                                        }
                                                        
                                                 
                                                
                                               
                                                 <tr>
                                                 <th>Article Image</th>
                                                    <td><img src={configData.ARTICLE_IMAGE + imagename} width="100"/></td>
                                                </tr>
                                                <tr>
                                                 <th>Article Image</th>
                                                    <td><a href={configData.ARTICLE_IMAGES + imagenames}>Download</a></td>
                                                </tr>
                                                 
                                            </table>
                                           
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
   
export default Viewarchitectarticles
