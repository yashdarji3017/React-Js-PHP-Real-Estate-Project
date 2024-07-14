import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import configData from '../config.json';
import AgentSide from './AgentSide';

const Agentcomments= () => {

    const [allcomments,setAllComments] = useState([]);

    const getAllComments = () => {
        var postParams = new FormData();

        postParams.append("id", localStorage.getItem("userid"));

        axios.post(configData.SERVER_URL+"getUsercomment.php",postParams).then((response)=>{
            console.log(response);
            if(response.status==200)
            {
                setAllComments(response.data);
            }
        });
    }
    
   
       
        useEffect(()=>{
            window.scrollTo(0, 0);

                getAllComments();
         
    },[]);

    
    

    

    return (
        <>
            <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                <AgentSide/>
                    <div className="col-lg-9">  
                    <div className="sidebar-user  ">
                                    <div className="card-body report-table">
                                    <center><h2>Agent Comments</h2></center> 

                                        <div className="table-responsive transactions-table">
                                            <table className="table table-bordernone m-0">
                                                <thead>
                                                    <tr>
                                                        <th className="light-font">Agent</th>
                                                        <th className="light-font">Comments</th>
                                                         <th className="light-font">Date</th>
                                                        <th className="light-font">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>




                                                {
                                            allcomments.map((row,index)=>{
                                                return(
                                                    <tr>
                                                      
                                                        <td>{row.firstname} {row.lastname} {row.first_name} {row.last_name}</td>
                                                        <td>{row.comments}</td>
                                                        <td>{row.comment_date}</td>
                                                         
                                                         




                                                        <td>
                                                            <Link to={"/viewagentcomments/"+row.comment_id} className="fa fa-eye fa-xl" style={{color:'blue'}}>
                                                                
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

export default Agentcomments;