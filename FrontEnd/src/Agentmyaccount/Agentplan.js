import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import AgentSide from './AgentSide';

const Agentplan = () => {
    var [successMessage,setSuccessMessage] = useState("");

    const [allinquiry,setAllInquiry] = useState([]);
    var [firstName,setfirstName] = useState("");
    var [lastName,setlastName] = useState("");
    var [contact,setcontact] = useState("");
    var [email,setemail] = useState("");  
    
    var [imagename,setimagename] = useState("");
     
    

     
       
        useEffect(()=>{
        var postParams = new FormData();
        postParams.append("id",localStorage.getItem("userid"));

        axios.post(configData.SERVER_URL+"getSingleuser.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                setfirstName(result["firstname"]);
                setlastName(result["lastname"]);
                setcontact(result["contact"]);
                setemail(result["email_user"]);
              
                setimagename(result["photo_file"]);
                getpurchase();
                window.scrollTo(0, 0);
            }
        });


    },[]);

    const [purchase,setpurchase] = useState([]);
    
        const getpurchase = () => {
            var postParams = new FormData();
            postParams.append("id",localStorage.getItem("userid"));

            axios.post(configData.SERVER_URL+"getUserplanpurchase.php",postParams).then((response)=>{
                 if(response.status == 200)
                {
                    setpurchase(response.data);
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
                    <center><h2>Agent Plan Purchase</h2>
                    <label className='text-end' ></label>
                    </center> 
                                    {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                        <div className="table-responsive transactions-table">
                                            <table className="table table-bordernone m-0">
                                                <thead>
                                                    <tr>
                                                        <th className="align-middle">User Name</th>
                                                        <th className="align-middle">Plan Name</th>
                                                        <th className="align-middle">Purchase Date </th>
                                                       
                                                        <th className="align-middle">Payment Mode</th>
                                                        <th className="align-middle">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {
                                            purchase.map((row,index)=>{
                                                return(
                                                    <tr>

                                                           
                                                            <td>{row.firstname} {row.lastname}</td>
                                                            <td>{row.plan_title}</td>
                                                            <td> {row.purchase_date}</td>
                                                           
                                                            <td>{row.payment_mode}</td>
                                                        <td>
                                                            <Link to={"/viewagentplan/"+row.plan_id} className="fa fa-eye fa-xl" style={{color:'blue'}}>
                                                                
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
   
export default Agentplan
