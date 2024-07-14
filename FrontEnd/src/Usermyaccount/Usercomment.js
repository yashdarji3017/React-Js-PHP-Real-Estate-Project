import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import configData from '../config.json';
import Side from './Side';

const Usercomments= () => {

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
            window.scrollTo(0,0)

                getAllComments();
         
    },[]);

    
    

    

    return (
        <>
            <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <Side/>
                    <div className="col-lg-9">  
                    <div className="sidebar-user  ">
                                    <div className="card-body report-table">
                                    <center><h2>Your Comments</h2></center> 
                                        <div className="table-responsive transactions-table">
                                            <table className="table table-bordernone m-0">
                                                <thead>
                                                    <tr>
                                                        
                                                        <th className="light-font">User</th>
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
                                                            <Link to={"/viewusercomments/"+row.comment_id} className="fa fa-eye fa-xl" style={{color:'blue'}}  >
                                                                    
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

export default Usercomments;