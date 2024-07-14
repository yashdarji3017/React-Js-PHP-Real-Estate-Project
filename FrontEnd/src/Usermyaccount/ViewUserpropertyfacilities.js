import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useParams } from "react-router-dom";
import configData from '../config.json';
import Side from './Side';

const Viewuserpropertyfacilities = () => {
    var [propertyid,setpropertyid] = useState("");
    var [facilitiesid,setfacilitiesid] = useState("");

    
    let {id} =useParams();
useEffect(() =>{
    var postParams = new FormData();
    postParams.append("id",id);
    

    axios.post(configData.SERVER_URL+"getSinglepropertyfacility.php",postParams).then((response)=>{
        if(response.status == 200)
        {
            var result = response.data;
            setpropertyid(result["property_title"]);
            setfacilitiesid(result["facilities_name"]);
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
                                            <h2>View Your Property Facilities Details
                                            
                                        
                                     
                                </h2> </center>
                               
 
                                           
                                 <br></br>
                                <div className="container-fluid">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="">
                                      <div className="">
                                      <table className="table table-bordered" cellPadding="20">
                                                <tr>
                                                    <th>Property Name</th>
                                                     <td>{propertyid}</td>
                                                </tr>
                                                <tr>
                                                    <th>Facilities Name</th>
                                                    <td>{facilitiesid}</td>
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
   
export default Viewuserpropertyfacilities
