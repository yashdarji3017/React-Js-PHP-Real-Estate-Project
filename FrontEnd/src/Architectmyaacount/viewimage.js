import React, { useEffect,useState } from 'react'
import { Link,useParams} from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import Architectside from './Architectside';

const Viewimage  = ({open}) => {
    var [title,settitle] = useState("");
    var [images_url,setimages_Url] = useState("");
     var [images_type,setimages_type] = useState("");
     var [portfolioid,setportfolioId] = useState("");
     var [photo_file,setphoto_file] = useState("");
     var [imagename,setimagename] = useState("");



    
        let {id} =useParams();

        useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getSingleimage.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                console.log(response.data)
                
                 settitle(result["title"]);
                setimages_Url(result["image_url"]);
                setimages_type(result["image_type"]);
                setportfolioId(result["title_portfolio"]);
                setimagename(result["photo_file"]);
                window.scrollTo(0, 0);
            }
        });
    })
 
 
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
                                            <h2>View Image 
                                            
                                        
                                     
                                </h2> </center>
                               
 
                                           
                                 <br></br>
                                <div className="container-fluid">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="">
                                      <div className="">
                                      <table className="table table-bordered" cellPadding="20">
                                           <tr>
                                                    <th>Title</th>
                                                    <td>{title}</td>
                                                  </tr>
                                                
                                                <tr>
                                                    <th>Image Url</th>
                                                    <td>{images_url}</td>
                                                  </tr>
                                                
                                                <tr>
                                                    <th>Image Type</th>
                                                    <td>{images_type}</td>
                                                  </tr>
                                                
                                                <tr>
                                                    <th>Portfolio Name</th>
                                                    <td>{portfolioid}</td>
                                                  </tr>
                                                <tr>
                                                
                                                    <th>Image</th>
                                                    <td><img src={configData.PORTFOLIO_IMAGE + imagename} width="100"/></td>
                                                </tr>
                                                 
                                            
                                           </table>
                                           
                                         </div>
                                     
                                 
                                                
                                              
                                            
                                    </div>
                                </div>
                                  </div>
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

export default Viewimage;