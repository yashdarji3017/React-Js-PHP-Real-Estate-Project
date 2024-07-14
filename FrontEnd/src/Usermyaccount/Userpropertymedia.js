import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import Side from './Side';

const Userpropertymedia = () => {
    var [successMessage,setSuccessMessage] = useState("");

    const [allmedia,setMedia] = useState([]);

    const getMedia = () => {
        var postParams = new FormData();
        postParams.append("id", localStorage.getItem("userid"));

        axios.post(configData.SERVER_URL+"getUsermedia.php",postParams).then((response)=>{
            console.log(response)
            if(response.status == 200)
            {
                  setMedia(response.data);
            }
        });
    }
    const handleDelete = (e) => {
        var id = e.target.getAttribute("data-id");
       //API
       var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"delete/deleteMedia.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                if(result=="Yes")
                {
                    window.scrollTo(0, 0);
                    setSuccessMessage("Media Deleted successfully!");
                   getMedia();
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
        window.scrollTo(0,0)

        getMedia();
     },[]);    
     

return (

    <>
      <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <Side/>
                    <div className="col-lg-9">  
                    <div className="sidebar-user sticky-cls">
                    
                  
                                       
                                           

                                      
                                       
                                         
                                           
                                        
                    <div className="card-body report-table">
                   
                        <center>
                                            <h2>Your Property Media
                                            
                                            
                                     
                                </h2> <Link to="/addpropertymedia">Add Your Property Media</Link></center>
                               
                             
                                           
                                {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                    <div className="table-responsive transactions-table">
                                    
                                        <table className="table table-bordernone m-0">
                                            <thead>
                                                <tr>
                                                
                                                    <th className="align-middle">Title</th>
                                                    <th className="align-middle">Image Url</th>
                                                    <th className="align-middle">Type</th>
                                                    <th className="align-middle">Image</th>
                                                      <th className="align-middle">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                        {
                                            allmedia.map((row,index)=>{
                                                return(
                                                <tr>
                                                     
                                                    
                                                     <td>{row.title}</td>
                                                     <td>{row.image_url}</td>
                                                     <td>{row.file_type}</td>

                                                     <td><a target="_blank" href={configData.MEDIA_IMAGE + row.media_file} className="center" alt="" >Download</a></td>
                                                           

                                                     <td>
                                                     <Link to={"/viewuserpropertymedia/"+row.media_id} className="fa fa-eye fa-xl" style={{color:'blue'}}>
                                                                
                                                                </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                          <Link to={"/edituserpropertymedia/"+row.media_id}className="fas fa-edit fa-xl" style={{color:'green'}} >
                                                                
                                                                </Link>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                          <Link data-id={row.media_id} onClick={handleDelete} className="fa fa-trash fa-xl" style={{color:'red'}}  >
                                                                    
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
   
export default Userpropertymedia
