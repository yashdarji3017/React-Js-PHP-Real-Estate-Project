import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import { Link ,useParams} from 'react-router-dom'
import configData from '../config.json';

const Blogdetails = () => {
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


    var [comments,setcomments] = useState("");
    var [commentsErrro,setcommentsError] = useState("");

    var [comment_date,setcomment_date] = useState("");

    var [approve,setapprove] = useState("");
    var [approveError,setapproveError] = useState("");


    var [architectid,setarchitectId] = useState("");

   

    var [successMessage,setSuccessMessage] = useState("");
    var [formvalid,setformvalid] = useState(true);
  
    
    const [allcomments,setAllComments] = useState([]);

    const getAllComments = () => {
        axios.get(configData.SERVER_URL+"getCommnetFront.php").then((response)=>{
            console.log(response)
            if(response.status==200)
            {
                setAllComments(response.data);
            }
        });
    }
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
                getAllComments();

            }


        }); 
    })
    const handleForm = (e) => {
        e.preventDefault();
      
         //API
        var postParams = new FormData();
        postParams.append("comments",comments);
        postParams.append("comment_date",comment_date);
        postParams.append("approve",approve);

        var uid="0";
        var type="Architech";
        var aid="0";
        if(localStorage.getItem("type")=="User")
        {
            type="User";
            uid=localStorage.getItem("userid");
            alert(uid)

        
        
        }
        else if(localStorage.getItem("type")=="Agent")
        {
            type="Agent";
            uid=localStorage.getItem("userid");
       alert(uid)
        
        
        }
        else if(localStorage.getItem("type")=="Architech")
        {
            type="Architech";
            aid=localStorage.getItem("userid");
        }
        
       
        postParams.append("userid",uid);
        postParams.append("architechid",aid);

        postParams.append("type",localStorage.getItem("type"));
 
        axios.post(configData.SERVER_URL+"addCommnetFront.php",postParams).then((response)=>{
            
        if(response.status == 200)
            {
                var result = response.data;
                alert(result);
                if(result=="Yes")
                {
                     alert("Comment Inserted successfully!");
                       
                }
                else
                {
                    alert("Error");
                }
            }
        });
        //API
    
   
        
    }; 
   
    return (
    <>
    <section class="ratio_40">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-8 order-lg-1">
                    <div class="blog-single-detail theme-card">
                        <div class="blog-detail-image">
                            <center>
                        <h2>Article Details</h2></center>
                        <div class="col-xl-12 col-lg-12 order-lg-1">
                        
                                                    <img src={configData.ARTICLE_IMAGE + imagename} className='rounded mx-auto d-block'  height="300" style={{width:'50%' ,display:'block'}}/>
                                                                       </div>
                                                                       </div>
                      <div class="col-xl-9 col-lg-3 order-lg-1">                                               
                        <div class="blog-title">
                            <ul class="post-detail">
                            <tr>
                                                    <th>Add Date</th>
                                                   <td>{add_date}</td>
                                                   
                                                 </tr>
                                                 {type==="Agent" &&  (<>

                                                 <tr>
                                                    <th>Agent Name &nbsp;</th>
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
                                                        
                                                 
                                             
                                
                            </ul>
                            <h3>{title}</h3>
                        </div>
                        <div class="details-property">
                            <div class="row">
                                <p class="col-xl-12">{description}</p>
                                </div>
                                <h4 className="content-title mt-4">Article Files</h4>
                                <i className="far fa-file-pdf fa-xl"></i>&nbsp;
                                    <a target="_blank" className="attach-file" href={configData.ARTICLE_IMAGES + imagenames}>Download</a>
                                      <br></br> 
                                      <br></br>
                        </div>
                        </div>
                        

                       <div class="comment-section">
                            <h4>comments:</h4>
                            {
                                            allcomments.map((row,index)=>{
                                                return(
                            <div class="comment-box">
                                <div class="media">
                                   
                                    <div class="media-body">
                                    
                                                
                                                <div class="comment-title">
                                        
                                            <div class="comment-user">
                                                <i class="fa fa-user"></i><lable>{row.firstname}{row.lastname} {row.first_name} {row.last_name}</lable>
                                           
                                            </div>
                                          
                                        
                                            <div class="comment-date">
                                                <i class="fas fa-clock"></i>
                                                <h6>{row.comment_date}</h6>
                                            </div>
                                        </div>
                                        <div class="comment-detail">
                                            <p class="font-roboto">{row.comments}</p>
                                             </div>
                                         
                                         </div>
                                        
                                </div>
                               
                            </div>
                           );
                        })
                    } 
                        </div>
                        {
                                    localStorage.getItem("isclientlogin") && 
                        <div class="leave-comment comment-section">
                            <h4>leave a comment</h4>
                            <form method='POST' onSubmit={handleForm}  className="row gx-3">
                                <div class="row gx-3">
                                  
                                    <div class="form-group col-md-12">
                                        <textarea class="form-control"  value={comments} onChange={(e) => setcomments(e.target.value)}  placeholder="Leave a Comment"></textarea>
                                        {(formvalid===false && comments=="")&&(<><p className="error">{commentsErrro}</p></>)}

                                    </div>
                                </div>
                                <div class="text-end">
                                    <button type="submit" class="btn btn-gradient color-2 btn-flat">Post
                                        Comment</button>
                                </div>
                            </form>
                        </div>
}</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

                        </div>
               
            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Blogdetails