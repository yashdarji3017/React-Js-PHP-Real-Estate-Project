import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import Side from './Side';

const Userplan = () => {
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
                getAllplans();
                window.scrollTo(0,0)

                 
            }
        });


    },[]);

    const [allplan,setAllplans] = useState([]);
    
    const getAllplans = () => {
        axios.get(configData.SERVER_URL+"getPlan.php").then((response)=>{
            console.log(response)
            if(response.status==200)
            {
                setAllplans(response.data);
            }
        });
    }


    const [purchase,setpurchase] = useState([]);
    var postParams = new FormData();
        postParams.append("id",localStorage.getItem("userid"));
        const getpurchase = () => {
            axios.post(configData.SERVER_URL+"getUserplanpurchase.php",postParams).then((response)=>{
                console.log(response.data)
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
                    <Side/>
                    <div className="col-lg-9">  
                    <div className="sidebar-user sticky-cls">
                    <div className="card-body report-table">
                    <center><h2>Your Plan Purchase</h2>
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
                                                            
                                                            <Link to={"/viewuserplanpurchase/"+row.plan_id} className="fa fa-eye fa-xl" style={{color:'blue'}}  >
                                                                    
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
   
export default Userplan
