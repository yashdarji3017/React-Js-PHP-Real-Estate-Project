import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import Architectside from './Architectside';

const Architectarticles = () => {

    var [successMessage,setSuccessMessage] = useState("");

    const [allarticles,setAllArticles] = useState([]);

    const getAllArtilces = () => {
        var postParams = new FormData();
        postParams.append("id", localStorage.getItem("userid"));

       
        axios.post(configData.SERVER_URL+"getArchitectarticles.php",postParams).then((response)=>{
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

        axios.post(configData.SERVER_URL+"delete/deleteArticle.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
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
        getAllArtilces();
        window.scrollTo(0, 0);
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
                        <center><h2>Architect Articles</h2>
                        <Link to="/addarchitectarticles">Add Articles</Link>
                        </center>
                        {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                <div className="table-responsive transactions-table">
                                            <table className="table table-bordernone m-0">
                                                <thead>
                                                    <tr>
                                                        <th className="light-font">Architect Name</th>
                                                        <th className="light-font">Title</th>
                                                        <th className="light-font">Reference</th>
                                                        <th className="light-font">Date</th>
                                                        <th className="light-font">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>


                                     
                                                        
                                                {
                                            allarticles.map((row,index)=>{
                                                return(
                                                    <tr>
                                                       
                                                        <td>{row.first_name} {row.last_name}</td>

                                                        <td>{row.title}</td>
                                                       

                                                        <td>{row.reference}</td>
                                                        <td>{row.add_date}</td>



                                                        <td>
                                                            <Link to={"/viewarchitectarticles/"+row.article_id} className="fa fa-eye fa-xl" style={{color:'blue'}}>
                                                                
                                                                </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <Link to={"/editarchitectarticles/"+row.article_id} className="fas fa-edit fa-xl" style={{color:'green'}} >
                                                                
                                                                </Link>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <Link  data-id={row.article_id} onClick={handleDelete}  className="fa fa-trash fa-xl" style={{color:'red'}}  >
                                                                    
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
   
export default Architectarticles
