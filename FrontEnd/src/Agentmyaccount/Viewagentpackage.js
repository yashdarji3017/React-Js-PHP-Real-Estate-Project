import React, { useState ,useEffect} from 'react'
import { Link ,useParams} from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import AgentSide from './AgentSide';

const Viewagentpackage  = () => {
    var [start_date,setstart_date] = useState("");
    var [end_date,setend_date] = useState("");
    var [transaction_no,settransaction_no] = useState("");
    var [purchase_date,setpurchase_date] = useState("");
    var [pay,setpay] = useState("");
    
    var [userid,setuserId] = useState("");
    var [username,setusername] = useState("");
    var [planid,setplanId] = useState("");

    let {id} =useParams();
    useEffect(() =>{
       var postParams = new FormData();
       postParams.append("id",id);

       axios.post(configData.SERVER_URL+"getSinglepackagepurchase.php",postParams).then((response)=>{
           if(response.status == 200)
           {
               var result = response.data;
               console.log(response.data)
               
               setstart_date(result["start_date"]);
               setend_date(result["end_date"]);
               settransaction_no(result["transaction_no"]);
               setpurchase_date(result["purchase_date"]);
               setpay(result["pay"]);
               setuserId(result["firstname"]);
               setusername(result["lastname"]);
               setplanId(result["package_title"]);
               window.scrollTo(0, 0);
           }
       });
   })


    return (
<>

<section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <AgentSide/>
                    <div className="col-lg-9">
                        <div className="dashboard-content">
                            <div className="my-profile" id="profile">
                                <div className="profile-info">
                                   
                                    <div className="common-card">
                                        <div className="row">
                                            <div className="col-xxl-12">
                                                <div className="information-detail">
                                                    <div className="common-header">
                                                        <center>
                                                        <h2>View Your Package Purchase Details</h2>
                                                        </center>
                                                    </div>
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
                                                    <th>Paackage Name</th>
                                                    <td>{planid}</td>
                                                </tr>
                                                <tr>
                                                    <th>Transaction No</th>
                                                    <td>{transaction_no}</td>
                                                </tr>
                                                <tr>
                                                    <th>Pay ?</th>
                                                    <td>{pay}</td>
                                                </tr>
                                                <tr>
                                                    <th>Purchase Date</th>
                                                    <td>{purchase_date}</td>
                                                </tr>
                                                
                                            </table>
                                          
                                         
                                           
                                         </div>
                                     
                                 <br></br>
                                      
                                         </div>
                                         </div>

                                           <br></br>   
                                            
                                    </div>
                                </div>
                                  </div>
                              </div>
                              <br></br>
            </div>
        </div>
        <br></br>

        </div>
        <br></br>

        </div>
        </div>
        <br></br>

        </div>
         

        </div>
        </div>
        <br></br>

        </section>
</>

    )
}

export default Viewagentpackage;