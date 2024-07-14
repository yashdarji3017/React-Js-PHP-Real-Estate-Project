import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import configData from '../config.json';
import Architectside from './Architectside';
const Architectproject = () => {
    var [successMessage,setSuccessMessage] = useState("");

         const [allproject,setProject] = useState([]);

    const getproject = () => {
        var postParams = new FormData();

        postParams.append("id", localStorage.getItem("userid"));
    
        axios.post(configData.SERVER_URL+"getArchitectproject.php",postParams).then((response)=>{if(response.status == 200)
            {
                setProject(response.data);
            }
        });
    }
    const handleDelete = (e) => {
        var id = e.target.getAttribute("data-id");
       //API
       var postParams = new FormData();
        postParams.append("id",id);
        
        axios.post(configData.SERVER_URL+"delete/deleteProject.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                
                if(result=="Yes")
                {
                    window.scrollTo(0, 0);
                    setSuccessMessage("Project Deleted successfully!");
                    getproject();
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
        getproject();
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
                                <center><h2> Architect Project</h2>
                                    <Link to="/addarchitectproject">Add Project</Link></center>

                                <div className="table-responsive transactions-table">
                                    <table className="table table-bordernone m-0">
                                        <thead>
                                        <tr>
                                                <th className="align-middle">Project Title</th>
                                                    <th className="align-middle">Description</th>
                                                    <th className="align-middle">Address</th>
                                                     
                                                        <th className="align-middle">Action</th>

                                                    
                                                </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            allproject.map((row,index)=>{
                                                return(
                                                <tr>
                                                     
                                                     <td>{row.project_title}</td>
                                                     <td>{row.description}</td>
                                                     <td>{row.address}</td>
                                                      
                                                    
                                                     
                                                     <td>
                                                     <Link to={"/viewarchitectproject/"+row.project_id} className="fa fa-eye fa-xl" style={{color:'blue'}}>
                                                                
                                                                </Link> &nbsp;&nbsp;
                                                          <Link to={"/editarchitectproject/"+row.project_id} className="fas fa-edit fa-xl" style={{color:'green'}} >
                                                                
                                                                </Link>   &nbsp;&nbsp;
                                                          <Link data-id={row.project_id} onClick={handleDelete}  className="fa fa-trash fa-xl" style={{color:'red'}}  >
                                                                    
                                                                    </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
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

export default Architectproject
