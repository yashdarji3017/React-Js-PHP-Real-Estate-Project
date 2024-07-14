import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import AgentSide from './AgentSide';

const Agentinquiry = () => {
    const [propertyinquiry,setpropertyinquiry] = useState([]);

    const getpropertyinquiry = () => {
        var postParams = new FormData();

        postParams.append("id", localStorage.getItem("userid"));

        axios.post(configData.SERVER_URL+"getUserinquiry.php",postParams).then((response)=>{
            console.log(response    )
            if(response.status == 200)
            
            {
                setpropertyinquiry(response.data);
            }
        });
    }
    useEffect(()=>{
        window.scrollTo(0, 0);

        getpropertyinquiry();
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
                        <center><h2>Agent / Your Inquiry</h2></center>
                                    <div className="table-responsive transactions-table">
                                        <table className="table table-bordernone m-0">
                                            <thead>
                                                <tr>
                                                 
                                                    <th className="align-middle">User Name</th>
                                                    <th className="align-middle">Property Name</th>
                                                    <th className="align-middle">Inquiry Text</th>
                                                    <th className="align-middle">Contact</th>
                                                   
                                                    <th className="align-middle">Inquiry DateTime</th>
                                                     <th className="align-middle">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                            propertyinquiry.map((row,index)=>{
                                                return(
                                                <tr>
                                                     
                                                    
                                                     <td> {row.firstname} {row.lastname}</td>
                                                      
                                                     <td>{row.property_title}</td>
                                                     <td>{row.inquiry_text}</td>
                                                     <td>{row.contact}</td>
                                                    
                                                     <td>{row.inquiry_date}</td>
                                                      
                                                      
                                           <td>

                                            <Link to={"/viewagentinquiry/"+row.property_inquiry_id} className="fa fa-eye fa-xl" style={{color:'blue'}}>
                                                                
                                                                </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
   
export default Agentinquiry
