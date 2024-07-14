import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useParams } from "react-router-dom";
import configData from '../config.json';
import Architectside from './Architectside';

const Viewarchitectportfolio = () => {
    var [title,setTitle] = useState("");
    var [description,setDescription] = useState("");
     
    var [start_date,setStart_date] = useState("");
    var [end_date,setEnd_date] =useState("");
    var [architechid,setarchitechId] = useState("");
    var [categoriesid,setcategoriesId] = useState("");
    var [verify,setVerify] = useState("");
    var [active,setActive] =useState("");
    var [architechname,setarchitechname] = useState("");
     
    let {id} = useParams();
   
     useEffect(()=>{
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getSingleportfolio.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                console.log(response.data)
                setTitle(result["title_portfolio"]);
                setDescription(result["description"]);
                setStart_date(result["start_date"]);
                setEnd_date(result["end_date"]);
                setVerify(result["verify_portfolio"]);
                setActive(result["active"]);
                setarchitechId(result["first_name"]);
                setcategoriesId(result["categories_name"]);
                setarchitechname(result["last_name"]);
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
                                            <h2>View Architect Portfolio
                                            
                                        
                                     
                                </h2> </center>
                               
 
                                           
                                 <br></br>
                                <div className="container-fluid">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="">
                                      <div className="">
                                            <table className="table table-bordered" cellPadding="20">
                                                <tr>
                                                    <th>Title</th>
                                                    <td>{title}</td>
                                                </tr>
                                                <tr>
                                                    <th>Description</th>
                                                    <td>{description}</td>
                                                    </tr>
                                                    <tr>   
                                                    <th>Start Date</th>
                                                    <td>{start_date}</td>
                                                    </tr>
                                                    <tr>
                                                     <th>End Date</th>
                                                     <td>{end_date}</td>
                                                     </tr>
                                                     <tr></tr>
                                                    <tr> 
                                                    <th>Architech Name</th>
                                                    <td>{architechid} {architechname}</td>
                                                    </tr>
                                                    <tr>
                                                    <th>Categoires Name</th>
                                                     <td>{categoriesid}</td>
                                                     </tr>
                                                     <tr>
                                                      <th>Verify</th>
                                                      <td>{verify}</td>
                                                      </tr>
                                                      <tr>
                                                     <th>Active</th>
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
   
export default Viewarchitectportfolio
