import React, { useState ,useEffect} from 'react'
import { Link ,useParams} from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import AgentSide from './AgentSide';

const Viewagentmedia  = () => {
    var [title,settitle] = useState("");
    var [image_url,setimage_url] = useState("");
    var [imagetype,setimagetype] = useState("");
    var [propertyid,setpropertyid] = useState("");
    var [isactive,setisactive] = useState("");
    var [photo_file,setphoto_file] = useState("");
    var [imagename,setimagename] = useState("");


    
    
    
    let {id} =useParams();
    useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getSinglemedia.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                settitle(result["title"]);
                setimage_url(result["image_url"]);
                setimagetype(result["file_type"]);
                setpropertyid(result["property_title"]);
                setisactive(result["active"]);
                 setimagename(result["media_file"]);
                 window.scrollTo(0, 0);
             }
        });


    })


    
      
    return (
<>

<section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <AgentSide/>
                    <div className="col-lg-9">
                        <div className="dashboard-content">
                            <div className="my-profile" id="profile">
                                <div className="profile-info">
                                   
                                    <div className="common-card">
                                        <div className="row">
                                            <div className="col-xxl-12">
                                                <div className="information-detail">
                                                    <div className="common-header">
                                                    <center>
                                                        <h2>View Your Property Media Details</h2></center>
                                                    </div>
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
                                                    <td>{image_url}</td>
                                                    </tr>
                                                    <tr>   
                                                    <th>Property Name</th>
                                                    <td>{propertyid}</td>
                                                    </tr>
                                                    <tr>
                                                     <th>Type</th>
                                                     <td>{imagetype}</td>
                                                     </tr>
                                                     <tr></tr>
                                                    <tr> 
                                                    <th>Acitve</th>
                                                    <td>{isactive}</td>
                                                    </tr>
                                                    <tr>
                                                     <th>Media File</th>
                                                     <td><a target="_blank" href={configData.MEDIA_IMAGE + imagename}>Download</a></td>
                                                     </tr> 
                                                     
                                             
                                             
                                            </table>
                                          
                                         
                                           
                                         </div>
                                     
                                 <br></br>
                                      
                                         </div>
                                         </div>

                                           <br></br>   
                                            
                                    </div>
                                </div>
                                  </div>
                              </div>
                              <br></br>
            </div>
        </div>
        <br></br>

        </div>
        <br></br>

        </div>
        </div>
        <br></br>

        </div>
         

        </div>
        </div>
        <br></br>

        </section>
</>

    )
}

export default Viewagentmedia;