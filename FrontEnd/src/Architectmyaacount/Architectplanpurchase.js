import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import configData from '../config.json';
import Architectside from './Architectside';
const Architectplanspurchase = () => {
    var [successMessage,setSuccessMessage] = useState("");

    const [allplan,setAllplans] = useState([]);
    
        const getAllplans = () => {
            var postParams = new FormData();

            postParams.append("id", localStorage.getItem("userid"));
    
            axios.post(configData.SERVER_URL+"getArchitectplanpurchase.php",postParams).then((response)=>{
                console.log(response.data)
                if(response.status==200)
                {
                    setAllplans(response.data);
                }
            });
        }
       
     
         
         useEffect(()=>{
            window.scrollTo(0, 0);
            getAllplans();
         },[]);    
     


    return (



        <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <Architectside />
                    <div className="col-lg-9">

                        <div className="sidebar-user sticky-cls">
                            <div className="card-body report-table">
                                {successMessage != "" && <div className="alert alert-success">
                                    {successMessage}
                                </div>}
                                <center><h2>Architect Plans Purchase</h2>
                                  </center>

                                <div className="table-responsive transactions-table">
                                    <table className="table table-bordernone m-0">
                                        <thead>
                                            <tr>
                                                <th className="align-middle">User Name</th>

                                                <th className="align-middle">Plan Title</th>
                                                <th className="align-middle">Plan Price</th>

                                                <th className="align-middle">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allplan.map((row, index) => {
                                                    return (
                                                        <tr>
                                                        <td>{row.firstname} {row.lastname}</td>
                                                       
                                                         
                                                         <td>{row.plan_title}</td>
                                                         <td>{row.update_price}</td>




                                                            <td>
                                                            <Link to={"/viewplanpurchase/"+row.purchase_id} className="fa fa-eye fa-xl" style={{color:'blue'}}>
                                                                
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


    )
}

export default Architectplanspurchase
