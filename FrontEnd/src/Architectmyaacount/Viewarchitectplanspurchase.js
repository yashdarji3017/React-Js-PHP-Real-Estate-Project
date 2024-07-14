import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useParams } from "react-router-dom";
import configData from '../config.json';
import Architectside from './Architectside';

const Viewarchitecplanspurchase = () => {
    var [purchase_date,setpurchase_date] = useState("");
    var [userid,setuserid] = useState("");
    var [planid,setplanid] = useState("");
    var [status,setstatus] = useState("");
    var [pay,setpay] = useState("");
    var [payment,setpayment] = useState("");
    var [transaction,settransaction] = useState("");
    var [username,setusername] = useState("");
    var [price,setprice] = useState("");

    let {id} =useParams();
    useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getSinglepurchase.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                setpurchase_date(result["purchase_date"]);
                setuserid(result["firstname"]);
                setusername(result["lastname"]);
                setplanid(result["plan_title"]);
                setstatus(result["status"]);
                setpay(result["pay"]);
                setpayment(result["payment_mode"]);
                settransaction(result["transaction_no"]);
                setprice(result["update_price"]);
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
                                            <h2>View Architect Plan Purchase
                                            
                                        
                                     
                                </h2> </center>
                               
 
                                           
                                 <br></br>
                                <div className="container-fluid">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="">
                                      <div className="">
                                            <table className="table table-bordered" cellPadding="20">
                                                <tr>
                                                    <th>User Name</th>
                                                    <td>{userid} {username}</td>
                                                </tr>
                                                <tr>
                                                    <th>Plan Name</th>
                                                    <td>{planid}</td>
                                                    </tr>
                                                    <tr>   
                                                    <th>Purchase Date</th>
                                                    <td>{purchase_date}</td>
                                                    </tr>
                                                    <tr>
                                                     <th>Price</th>
                                                     <td>{price}</td>
                                                     </tr>
                                                     <tr></tr>
                                                   
                                                    <tr>
                                                    <th>Status</th>
                                                     <td>{status}</td>
                                                     </tr>
                                                     <tr>
                                                      <th>Payment Mode</th>
                                                      <td>{payment}</td>
                                                      </tr>
                                                      <tr>
                                                     <th>Pay</th>
                                                     <td>{pay}</td>
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
   
export default Viewarchitecplanspurchase
