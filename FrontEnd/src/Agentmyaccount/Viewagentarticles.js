import React, { useState ,useEffect} from 'react'
import { Link ,useParams} from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import AgentSide from './AgentSide';

const Viewagentarticles  = () => {
    var [title,setTitle] = useState("");
    var [description,setDescription] = useState("");
    var [reference,setReference] = useState("");
    var [add_date,setadd_Date] = useState("");
    var [photo_file,setphoto_file] = useState("");
    var [pdf_file,setpdf_file] = useState("");
    var [approve,setapprove] = useState("");
    var [imagename,setimagename] = useState("");
    var [imagenames,setimagenames] = useState("");
    var [type,setType] = useState("User");
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
                    <AgentSide/>
                    <div className="col-lg-9">
                        <div className="dashboard-content">
                            <div className="my-profile" id="profile">
                                <div className="profile-info">
                                   
                                    <div className="common-card">
                                        <div className="row">
                                            <div className="col-xxl-12">
                                                <div className="information-detail">
                                                    <div className="common-header">
                                                        <center>
                                                        <h2>View Your Article Details</h2></center>
                                                    </div>
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
                                                 {type==="Agent" &&  (<>

                                                 <tr>
                                                    <th>Agent Name</th>
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
                                                    <th>Approve</th>
                                                    <td>{approve}</td>
                                                 </tr>
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
                                     
                                 <br></br>
                                      
                                         </div>
                                         </div>

                                           <br></br>   
                                            
                                    </div>
                                </div>
                                  </div>
                              </div>
                              <br></br>
            </div>
        </div>
        <br></br>

        </div>
        <br></br>

        </div>
        </div>
        <br></br>

        </div>
         

        </div>
        </div>
        <br></br>

        </section>
</>

    )
}

export default Viewagentarticles;