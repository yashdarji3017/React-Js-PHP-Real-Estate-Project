import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import AgentSide from './AgentSide';

const Agentproperty = () => {
    const [allproperty,setProperty] = useState([]);
    var [successMessage,setSuccessMessage] = useState("");

    const [allinquiry,setAllInquiry] = useState([]);
    var [firstName,setfirstName] = useState("");
    var [lastName,setlastName] = useState("");
    var [contact,setcontact] = useState("");
    var [email,setemail] = useState("");  
    
    var [imagename,setimagename] = useState("");
     
    

     
       
        useEffect(()=>{
            getproperty();
            window.scrollTo(0, 0);


    },[])

    const getproperty = () => {
        var postParams = new FormData();
        postParams.append("id", localStorage.getItem("userid"));

       
        axios.post(configData.SERVER_URL+"getUserProperty.php",postParams).then((response)=>{
            console.log(response.data);
            if(response.status == 200)
            
            {
              
                setProperty(response.data);
              
            }
        });
    }
    const handleDelete = (e) => {
        var id = e.target.getAttribute("data-id");
       //API
       var postParams = new FormData();
       postParams.append("id",id);

        axios.post(configData.SERVER_URL+"delete/deleteProperty.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                if(result=="Yes")
                { 
                    window.scrollTo(0, 0);
                    setSuccessMessage("Property Deleted successfully!");
                    getproperty();
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
     
    
  return (
    <>
       <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <AgentSide/>
                    <div className="col-lg-9">  
                    <div className="sidebar-user sticky-cls">
                                <div className="card-body report-table">
                                <center><h2>Agent Property</h2>
                                <Link to="/addproperty">Post Property</Link>
                                </center>
                                {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                    <div className="table-responsive transactions-table">
                                        <table className="table table-bordernone m-0">
                                        <thead>
                                               
                                            </thead>
                                            <thead>
                                                <tr>
                                                <th className="light-font">Property Title</th>
                                                    <th className="light-font">Price</th>
                                                     <th className="light-font">Address</th>
                                                     <th className="light-font">Build Date</th>
                                                     <th className="light-font">Action</th>
                                                 </tr>
                                            </thead>
                                            <tbody>
                                                {
                                            allproperty.map((row)=>{
                                                return(
                                                <tr>
                                                     
                                                    
                                                     <td>{row.property_title}</td>
                                                     <td>{row.price}</td>
                                                     <td>{row.address_property}</td>
                                                     <td>{row.build_date}</td>

                                                     <td>
                                                     <Link to={"/viewagentproperty/"+row.property_id} className="fa fa-eye fa-xl" style={{color:'blue'}}>
                                                                
                                                                </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                          <Link to={"/editagentproperty/"+row.property_id} className="fas fa-edit fa-xl" style={{color:'green'}} >
                                                                
                                                                </Link>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                          <Link data-id={row.property_id} onClick={handleDelete}className="fa fa-trash fa-xl" style={{color:'red'}}  >
                                                                    
                                                                    </Link>
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
   
export default Agentproperty
