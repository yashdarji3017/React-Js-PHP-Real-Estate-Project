import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import configData from '../config.json';
import Architectside from './Architectside';
const Architectportfolio = () => {
    var [successMessage,setSuccessMessage] = useState("");

    const [allportfolio,setAllPortfolio] = useState([]);
        
        const getAllPortfolio = () => {
            var postParams = new FormData();

        postParams.append("id", localStorage.getItem("userid"));

            axios.post(configData.SERVER_URL+"getArchitectportfolio.php",postParams).then((response)=>{
                console.log(response.data);
                 if(response.status == 200)
                {
                    setAllPortfolio(response.data);
                }
            });
        }
         
        
         const handleDelete = (e) => {
            var id = e.target.getAttribute("data-id");
           //API
           var postParams = new FormData();
           postParams.append("id",id);
    
            axios.post(configData.SERVER_URL+"delete/deletePortfolio.php",postParams).then((response)=>{
                if(response.status == 200)
                {
                    var result = response.data;
                    if(result=="Yes")
                    {
                        window.scrollTo(0, 0);
                        setSuccessMessage("Portfolio Deleted successfully!");
                        getAllPortfolio();
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
            getAllPortfolio();
         },[]);    
      

  return (
   
      

      <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <Architectside/>
                    <div className="col-lg-9"> 
                    
                    <div className="sidebar-user sticky-cls">
                                    <div className="card-body report-table">
                                    {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                    <center><h2> Architect Portfolio</h2>
                                    <Link to="/addarchitectportfolio">Add Portfolio</Link></center>

 <div className="table-responsive transactions-table">
                                            <table className="table table-bordernone m-0">
                                                <thead>
                                                    <tr>
                                                        <th className="align-middle">Architect Name</th>
                                                        <th className="align-middle">Portfolio Title</th>
                                                        
                                                        <th className="align-middle">Categories Name</th>

                                                        <th className="align-middle">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {
                                             allportfolio.map((row,index)=>{
                                                return(
                                                    <tr>

                                                            <td>{row.first_name} {row.last_name}</td>
                                                            <td>{row.title_portfolio}</td>
                                                            <td>{row.categories_name}</td>
                                                           

                                                            

                                                        <td>
                                                        <Link to={"/viewarchitectportfolio/"+row.portfolio_id} className="fa fa-eye fa-xl" style={{color:'blue'}}>
                                                                
                                                            </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <Link to={"/editarchitectportfolio/"+row.portfolio_id}  className="fas fa-edit fa-xl" style={{color:'green'}} >
                                                                
                                                            </Link>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <Link data-id={row.portfolio_id} onClick={handleDelete}   className="fa fa-trash fa-xl" style={{color:'red'}}  >
                                                                    
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
                
           
  )
}

export default Architectportfolio
