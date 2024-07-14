import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import AgentSide from './AgentSide';

const Agentpackage = () => {
    const [packagepurchase,setpackagepurchase] = useState([]);
    var [firstName,setfirstName] = useState("");
    var [lastName,setlastName] = useState("");
    var [contact,setcontact] = useState("");
    var [email,setemail] = useState("");  
    
    var [imagename,setimagename] = useState("");
    
    const getpackagepurchase = () => {
        var postParams = new FormData();

        postParams.append("id", localStorage.getItem("userid"));

        axios.post(configData.SERVER_URL+"getUserpackagepurchase.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                setpackagepurchase(response.data);
                
            }
        });
    }
   
     
    

     
       
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
                getpackagepurchase();
                window.scrollTo(0, 0);
                 
            }
        });


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
                                    <center><h2>Agent Package Purchase</h2></center> 

                                        <div className="table-responsive transactions-table">
                                            <table className="table table-bordernone m-0">
                                                <thead>
                                                    <tr>
                                                        <th className="align-middle">Agent Name</th>
                                                        <th className="align-middle">Package Name</th>
                                                        
                                                        <th className="align-middle">Purchase Time</th>
                                                        <th className="align-middle">Is Pay</th>

                                                        <th className="align-middle">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {
                                             packagepurchase.map((row,index)=>{
                                                return(
                                                    <tr>

                                                            
                                                            <td>{row.firstname} {row.lastname}</td>
                                                            <td>{row.package_title}</td>
                                                            
                                                            <td>{row.purchase_date}</td>
                                                            <td>{row.pay}</td>

                                                            

                                                        <td>
                                                            <Link to={"/viewagentpackage/"+row.packagepurchase_id} className="fa fa-eye fa-xl" style={{color:'blue'}}>
                                                                
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
   
export default Agentpackage
