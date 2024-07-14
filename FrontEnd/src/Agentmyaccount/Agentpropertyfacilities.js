import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import AgentSide from './AgentSide';

const Agentpropertyfacilities = () => {
    const [Propertyfacility,setPropertyfacility] = useState([]);
    var [successMessage,setSuccessMessage] = useState("");

    const getPropertyfacility = () => {
        var postParams = new FormData();
        postParams.append("id", localStorage.getItem("userid"));

        axios.post(configData.SERVER_URL+"getUserpropertyfacilities.php",postParams).then((response)=>{
           console.log(response.data)
            if(response.status==200)
            {
                setPropertyfacility(response.data);
            }
        });
    }

    const handleDelete = (e) => {
        var id = e.target.getAttribute("data-id");
       //API
       var postParams = new FormData();
       postParams.append("id",id);
        axios.post(configData.SERVER_URL+"delete/deletePropertyfacilities.php",postParams).then((response)=>{
            
            if(response.status == 200)
            {
                var result = response.data;
                 
                if(result=="Yes")
                { 
                    window.scrollTo(0, 0);
                    setSuccessMessage("Property Facilties Deleted successfully!");
                    getPropertyfacility();
                    // alert("Data Inserted");
                }
                else
                {
                    alert("Error");
                }
            }
        });
        //API
    };
     
     

     
     
     useEffect(()=>{
        window.scrollTo(0, 0);
        getPropertyfacility();
     },[]);
return (

    <>
      <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <AgentSide/>
                    <div className="col-lg-9">  
                    <div className="sidebar-user sticky-cls">
                    
                  
                                       
                                           

                                      
                                       
                                         
                                           
                                        
                    <div className="card-body report-table">
                   
                        <center>
                                            <h2>Agent Property Facilitites
                                            
                                            
                                     
                                </h2> <Link to="/addagentpropertyfacilities">Add Property Facilitites</Link></center>
                               
                             
                                           
                                {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                    <div className="table-responsive transactions-table">
                                    
                                        <table className="table table-bordernone m-0">
                                            <thead>
                                                <tr>
                                                
                                                    <th className="align-middle">Property Title</th>
                                                    <th className="align-middle">Property Facilities</th>
                                                      <th className="align-middle">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                        {
                                            Propertyfacility.map((row,index)=>{
                                                return(
                                                <tr>
                                                     
                                                    
                                                     <td>{row.property_title}</td>
                                                     <td>{row.facilities_name}</td>

                                                           

                                                     <td>
                                                     <td><Link to={"/viewagentpropertyfacilities/"+row.property_facility_id} className="fa fa-eye fa-xl" style={{color:'blue'}}>
                                                                
                                                                </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <Link to={"/editagentpropertyfacilities/"+row.property_facility_id} className="fas fa-edit fa-xl" style={{color:'green'}} >
                                                                
                                                                </Link>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <Link data-id={row.property_facility_id} onClick={handleDelete} className="fa fa-trash fa-xl" style={{color:'red'}}  >
                                                                    
                                                                    </Link></td>
                                                        </td>
                                                     </tr>
                                                    
                                                
                                                 
                                                 );
                                                })
                                            }
    
                                              
                                            </tbody>
                                        </table>
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
   
export default Agentpropertyfacilities
