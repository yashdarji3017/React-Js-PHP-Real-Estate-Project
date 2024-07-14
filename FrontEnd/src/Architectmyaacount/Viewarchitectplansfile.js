import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useParams } from "react-router-dom";
import configData from '../config.json';
import Architectside from './Architectside';

const Viewarchitectplansfile = () => {
    var [file_title, setfile_title] = useState("");
    var [file_url, setfile_url] = useState("");
    var [free, setfree] = useState("");
    var [active, setactive ] = useState("");   
    var [planid,setplanid] = useState("");

   
     
    
    let {id} =useParams();
    useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getSingleplansfile.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                setfile_title(result["file_title"]);
                setfile_url(result["file_url"]);
                setfree(result["free"]);
                setactive(result["active"]);
                setplanid(result["plan_title"]);                
                //setmedia_file(result["media_file"]);
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
                                            <h2>View Architect Plans Files
                                            
                                        
                                     
                                </h2> </center>
                               
 
                                           
                                 <br></br>
                                 <div className="container-fluid">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="">
                                      <div className="">
                                            <table className="table table-bordered" cellPadding="20">
                                                <tr>
                                                    <th>File Title</th>
                                                    <td>{file_title}</td>
                                                </tr>
                                                <tr>
                                                     <th>Property Name</th>
                                                     <td>{planid}</td>
                                                     </tr>
                                                <tr>
                                                    <th>File Url</th>
                                                    <td>{file_url}</td>
                                                    </tr>
                                                    <tr>   
                                                    <th>Free</th>
                                                    <td>{free}</td>
                                                    </tr>
                                                    <tr>
                                                     <th>Acitve</th>
                                                     <td>{active}</td>
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
   
export default Viewarchitectplansfile
