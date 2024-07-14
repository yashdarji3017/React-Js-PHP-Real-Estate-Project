import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import configData from '../config.json';
import Architectside from './Architectside';
const Architectpackage = () => {
        const [packagepurchase,setpackagepurchase] = useState([]);
        
        const getpackagepurchase = () => {
            var postParams = new FormData();
    
            postParams.append("id", localStorage.getItem("userid"));
    
            axios.post(configData.SERVER_URL+"getArchitectpackagepurchase.php",postParams).then((response)=>{
                 if(response.status == 200)
                {
                    setpackagepurchase(response.data);
                    
                }
            });
        }
       
         useEffect(()=>{
            window.scrollTo(0, 0);
            getpackagepurchase();
         },[]);
  return (
   
      

      <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <Architectside/>
                    <div className="col-lg-9"> 
                    
                    <div className="sidebar-user sticky-cls">
                                    <div className="card-body report-table">
                                       
                                    <center><h2> Architect Package</h2></center> 
 <div className="table-responsive transactions-table">
                                            <table className="table table-bordernone m-0">
                                                <thead>
                                                    <tr>
                                                        <th className="align-middle">Package Purchase</th>
                                                        <th className="align-middle">User Name</th>
                                                        <th className="align-middle">Package Name</th>
                                                        
                                                        <th className="align-middle">Transaction No</th>
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

                                                            <td>{index+1}</td>
                                                            <td>{row.firstname} {row.lastname}</td>
                                                            <td>{row.package_title}</td>
                                                            <td>{row.transaction_no}</td>
                                                            <td>{row.purchase_date}</td>
                                                            <td>{row.pay}</td>

                                                            

                                                        <td>
                                                            <Link to={"/viewpackagepurchase/"+row.packagepurchase_id} type="button" className="btn btn-primary btn-sm btn-rounded" >
                                                                View
                                                            </Link> &nbsp;

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
                
           
  )
}

export default Architectpackage
