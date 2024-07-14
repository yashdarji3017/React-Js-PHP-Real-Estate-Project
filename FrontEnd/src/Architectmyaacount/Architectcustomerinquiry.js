import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import Architectside from './Architectside';

const Architectcustomerinquiry = () => {

    var [successMessage,setSuccessMessage] = useState("");

    const [allarticles,setAllArticles] = useState([]);

    const getAllArtilces = () => {
        var postParams = new FormData();
        postParams.append("id", localStorage.getItem("userid"));
        axios.post(configData.SERVER_URL+"getArchitectcustomerinquiry.php",postParams).then((response)=>{
          console.log(response.data);
            if(response.status==200)
            {
                setAllArticles(response.data);
            }
        });
    }
    
    const handleDelete = (e) => {
        var id = e.target.getAttribute("data-id");
       //API
       var postParams = new FormData();
            postParams.append("id",id);

        axios.post(configData.SERVER_URL+"delete/deleteinquiry.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                console.log(response.data)
                 if(result=="Yes")
                {
                    window.scrollTo(0, 0);
                        setSuccessMessage("Article Deleted successfully!");
                        getAllArtilces();
                }
                else
                {
                    alert("Error");
                }
            }
        });
        //API
    };
     
     useEffect(()=>{
        window.scrollTo(0, 0);
        getAllArtilces();
     },[]);    
       

   
     
     
       

return (

    <>
      <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <Architectside/>
                    <div className="col-lg-9">  
                    <div className="sidebar-user sticky-cls">
                    <div className="card-body report-table">
                        <center><h2>Customer Inquiry</h2>
                        </center>
                        {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                <div className="table-responsive transactions-table">
                                            <table className="table table-bordernone m-0">
                                                <thead>
                                                    <tr>
                                                        <th className="light-font">Customer Name</th>
                                                        <th className="light-font">Subject</th>
                                                        <th className="light-font">Contact</th>
                                                        <th className="light-font">Email</th>
                                                        <th className="light-font">Date</th>
                                                        <th className="light-font">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>


                                     
                                                        
                                                {
                                            allarticles.map((row,index)=>{
                                                return(
                                                    <tr>
                                                       
                                                        <td>{row.firstname} {row.lastname}</td>

                                                        <td>{row.subject}</td>
                                                       

                                                        <td>{row.contact}</td>
                                                        <td>{row.email_user}</td>
                                                        <td>{row.inquiry_date}</td>



                                                        <td>
                                                            <Link to={"/viewarchitectcustomerinquiry/"+row.inquiry_id}className="fa fa-eye fa-xl" style={{color:'blue'}}>
                                                                
                                                                </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            
                                                            <Link  data-id={row.inquiry_id} onClick={handleDelete}  className="fa fa-trash fa-xl" style={{color:'red'}}  >
                                                                    
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
   
export default Architectcustomerinquiry
