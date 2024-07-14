import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useParams } from "react-router-dom";
import configData from '../config.json';
import Architectside from './Architectside';

const Viewarchitectplans = () => {
    var [plan_title,setplan_title] = useState("");
    var [visits,setvisits] = useState("");
    var [specification,setspecification] = useState("");
    var [price,setprice] = useState("");
    var [update_price,setupdate_price] = useState("");
    var [term_condition,setterm_condition] = useState("");
    var [description,setdescription] = useState("");
    var [add_date,setadd_date] = useState("");
    var [address,setaddress] = useState("");
    var [pincode,setpincode] = useState("");
    var [architechid,setarchitechId] = useState("");
    var [categoriesid,setcategoriesId] = useState("");
    var [citiesId,setcitiesId] = useState("");  
    var [stateId,setstateId] = useState("");
    var [active,setactive] = useState("");
    var [approve,setapprove] =useState("");
    var [photo_file,setphoto_file] =useState("");
    var [plan_file,setplan_file] =useState("");
    var [achitechname,setarchitechname] =useState("");
    var [imagename,setimagename] = useState("");
    var [imagenames,setimagenames] = useState("");

     

     
    let {id} =useParams();
    useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getSingleplans.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                setplan_title(result["plan_title"]);
                setvisits(result["visits"]);
                setspecification(result["specification"]);
                setprice(result["price"]);
                setupdate_price(result["update_price"]);
                setterm_condition(result["term_conditon"]);
                setdescription(result["description"]);
                 setaddress(result["address"]);
                setadd_date(result["add_date"]);
                setpincode(result["pincode"]);
                setarchitechId(result["first_name"]);
                setarchitechname(result["last_name"]);
                setcategoriesId(result["categories_name"]);
                setcitiesId(result["city_name"]);
                setstateId(result["state_name"]);
                setactive(result["active"]);
                setapprove(result["approve"]);
                setimagename(result["photo_file"]);
                setimagenames(result["plan_file"]);
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
                                            <h2>View Architect Plans
                                            
                                        
                                     
                                </h2> </center>
                               
 
                                           
                                 <br></br>
                                 <div className="container-fluid">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="">
                                      <div className="">
                                            <table className="table table-bordered" cellPadding="20">
                                                <tr>
                                                    <th>Plan Title</th>
                                                    <td>{plan_title}</td>
                                                </tr>
                                                <tr>
                                                    <th>Visits</th>
                                                    <td>{visits}</td>
                                                    </tr>
                                                    <tr>
                                                    <th>Description</th>
                                                    <td>{description}</td>
                                                    </tr>
                                                    <tr>   
                                                    <th>Specification</th>
                                                    <td>{specification}</td>
                                                    </tr>
                                                    <tr>
                                                     <th>Update Price</th>
                                                     <td>{update_price}</td>
                                                     </tr>
                                                     <tr></tr>
                                                    <tr> 
                                                    <th>Term Condition</th>
                                                    <td>{term_condition}</td>
                                                    </tr>
                                                    <tr>
                                                    <th>Add Date</th>
                                                     <td>{add_date}</td>
                                                     </tr>
                                                     <tr>
                                                      <th>Adress</th>
                                                      <td>{address}</td>
                                                      </tr>
                                                      <tr>
                                                     <th>Pincode</th>
                                                     <td>{pincode}</td>
                                                     </tr>
                                                     
                                                      
                                                     <tr>
                                                     <th>Active</th>
                                                     <td>{active}</td>
                                                     </tr>
                                                     <tr>
                                                     <th>Approve</th>
                                                     <td>{approve}</td>
                                                     </tr>
                                                     <tr>
                                                     <th>City Name</th>
                                                     <td>{citiesId}</td>
                                                     </tr>
                                                     <tr> 
                                                     <th>State Name</th>
                                                     <td>{stateId}</td>
                                                     </tr>
                                                       
                                                     <tr>
                                                     <th>Architech Name</th>
                                                     <td>{architechid} {achitechname}</td>
                                                     </tr>
                                                     <tr> 
                                                     <th>Categories Name</th>
                                                     <td>{categoriesid}</td>
                                                     </tr>
                                                     <tr>
                                                     <th>Profile Photo</th>
                                                     <td><img src={configData.PLAN_IMAGE + imagename} width="100"/></td>
                                                     </tr> 
                                                     <tr>
                                                     <th>File</th>
                                                     <td><a target="_blank" href={configData.PLAN_IMAGES + imagenames}>Download</a></td>
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
   
export default Viewarchitectplans
