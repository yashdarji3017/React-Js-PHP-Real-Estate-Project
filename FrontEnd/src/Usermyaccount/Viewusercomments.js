import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useParams } from "react-router-dom";
import configData from '../config.json';
import Side from './Side';

const Viewusercomments = () => {
    var [comments,setcomments] = useState("");
    var [comment_date,setcomment_date] = useState("");
    var [approve,setapprove] = useState("");
    var [type,setType] = useState("User");
    var [type,setType] = useState("Agent");

    var [userid,setuserId] = useState("");
    var [architechid,setarchitechId] = useState("");
    var [architechname,setarchitechname] = useState("");
    var [username,setusername] = useState("");


    




    
    let {id} =useParams();
    useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);
        

        axios.post(configData.SERVER_URL+"getSinglecomment.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                 setcomments(result["comments"]);
                 setcomment_date(result["comment_date"]);
                 setapprove(result["approve"]);
                 setarchitechId(result["first_name"]);
                 setarchitechname(result["last_name"]);
                 setType(result["user_type"]);

                 setuserId(result["firstname"]);
                 setusername(result["lastname"]);
                 window.scrollTo(0,0)



            }


        }); 
    })
     
   

return (

    <>
      <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <Side/>
                    <div className="col-lg-9">  
                    <div className="sidebar-user sticky-cls">
                    
                  
                                       
                                           

                                      
                                       
                                         
                                           
                                        
                    <div className="card-body report-table">
                   
                        <center>
                                            <h2>View Your Comments Details 
                                            
                                        
                                     
                                </h2> </center>
                               
 
                                           
                                 <br></br>
                                <div className="container-fluid">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="">
                                      <div className="">
                                      <table className="table table-bordered" cellPadding="20">
                                                <tr>
                                                    <th>Comment Name</th>
                                                     <td>{comments}</td>
                                                </tr>
                                                <tr>
                                                    <th>Comment Dtae</th>
                                                    <td>{comment_date}</td>
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
                                                    {type==="Agents" &&  (<>

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
                                                    <th>Approve</th>
                                                    <td>{approve} </td>
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
   
export default Viewusercomments
