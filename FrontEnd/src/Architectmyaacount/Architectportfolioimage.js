import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import configData from '../config.json';
import Architectside from './Architectside';

const Architectportfolioimage = () => {
    var [successMessage,setSuccessMessage] = useState("");

    const [allimage,setAllImage] = useState([]);

    const gettAllImage = () => {
        var postParams = new FormData();
        postParams.append("id", localStorage.getItem("userid"));

        axios.post(configData.SERVER_URL+"getporfoliowiseimage.php",postParams).then((response)=>{
            console.log(response.data)
            if(response.status == 200)
            {
                setAllImage(response.data);
            }
        });
    }
    const handleDelete = (e) => {
        var id = e.target.getAttribute("data-id");
       //API
       var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"delete/deleteImage.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                if(result=="Yes")
                {
                    window.scrollTo(0, 0);
                    setSuccessMessage("Image Deleted successfully!");
                    gettAllImage();
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
        gettAllImage();
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
                   
                        <center>
                                            <h2>Architect Portfolio Image
                                            
                                            
                                     
                                </h2> <Link to="/addarchitectportfolioimage">Add Image</Link></center>
                               
                             
                                           
                                {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                                <div className="table-responsive transactions-table">
                                                    <table className="table table-bordernone m-0">
                                                        <thead>
                                                            <tr>
                                                                <th className="light-font">Image </th>
                                                                <th className="light-font">Title</th>
                                                                <th className="light-font">Portfolio Name</th>
                                                                 <th className="light-font">Image Url</th>                                                              
                                                                 <th className="light-font">Image Type</th>
                                                                <th className="light-font">Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                            allimage.map((row,index)=>{
                                                return(

                                                            <tr>
                                                                <td>{index+1}</td>
                                                                <td>{row.title}</td>
                                                                <td>{row.title_portfolio}</td>
                                                            
                                                                <td>{row.image_url}</td>
                                                                <td>{row.image_type}</td>
                                                                <td>
                                                                    <Link to={"/viewimage/"+row.image_id}  className="fa fa-eye fa-xl" style={{color:'blue'}}>
                                                                
                                                                </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <Link to={"/editimage/"+row.image_id} type="button"  className="fas fa-edit fa-xl" style={{color:'green'}} >
                                                                
                                                                </Link>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <Link data-id={row.image_id} onClick={handleDelete} className="fa fa-trash fa-xl" style={{color:'red'}}  >
                                                                    
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
   
export default Architectportfolioimage
