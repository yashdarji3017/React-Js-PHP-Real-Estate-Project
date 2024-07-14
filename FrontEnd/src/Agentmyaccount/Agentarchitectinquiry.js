import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import AgentSide from './AgentSide';

const Agentarchitectinquiry = () => {

    const [allinquiry,setAllInquiry] = useState([]);
    
        useEffect(()=>{
        
                getAllInquiry();
                window.scrollTo(0, 0);

            
       


    },[]);


    const getAllInquiry = () => {
        var postParams = new FormData();
        postParams.append("id", localStorage.getItem("userid"));

        
        axios.post(configData.SERVER_URL+"getUserarchitectInquiry.php",postParams).then((response)=>{
            console.log(response.data);
            if(response.status == 200)
            {
                setAllInquiry(response.data);
               
            }
        });
    }
       


   
     
     
       

return (

    <>
      <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <AgentSide/>
                    <div className="col-lg-9"> 
                    
                    <div className="sidebar-user sticky-cls">
                    
                                <div className="card-body report-table">
                                <center><h2>Agent Architect Inquiry</h2></center> 
                                    <div className="table-responsive transactions-table">
                                        <table className="table table-bordernone m-0">
                                            <thead>
                                                <tr>
                                                   
                                                    <th className="align-middle">User Name</th>
                                                    <th className="align-middle">Subject</th>
                                                    <th className="align-middle">Contact</th>
                                                    <th className="align-middle">Email</th>
                                                    <th className="align-middle">Architech</th>
                                                    <th className="align-middle">Inquiry Date</th>
                                                    <th className="align-middle">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                            {
                                        allinquiry.map((row,index)=>{
                                            return(


                                                <tr>

                                                         
                                                        <td>{row.firstname} {row.lastname}</td>
                                                        <td>{row.subject}</td>
                                                        <td>{row.contact}</td>
                                                        <td>{row.email_inquiry}</td>
                                                        <td>{row.first_name} {row.last_name}</td>
                                                        <td>{row.inquiry_date}</td>

                                                    <td>
                                                        <Link to={"/viewagentarchitectinquiry/"+row.inquiry_id}  className="fa fa-eye fa-xl" style={{color:'blue'}}>
                                                                
                                                                </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        </td>
                                                    <td>

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
   
export default Agentarchitectinquiry
