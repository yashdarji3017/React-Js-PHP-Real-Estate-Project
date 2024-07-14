import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useParams } from "react-router-dom";
import configData from '../config.json';
import Architectside from './Architectside';

const Viewarchitectproject = () => {
    var [title,settitle] = useState("");
    var [facility,setfacility] = useState("");
    var [description,setdescription] = useState("");
    var [address,setaddress] = useState("");
    var [landmark,setlandmark] = useState("");
    var [pincode,setpincode] = useState("");
    var [latitude,setlatitude] = useState("");
    var [longitude,setlongitude] = useState("");
    var [enrollment,setenrollment] = useState("");
    var [total_building,settotal_building] = useState("");
    var [area,setarea] = useState("");
    var [additional_info,setadditional_info] = useState("");
    var [contect_number,setcontect_number] = useState("");
    var [email,setemail] = useState("");
    var [book,setBook] = useState("");
    var [architechid,setarchitechId] = useState("");
    var [architechname,setarchitechname] = useState("");

    var [photo_file,setphoto_file] = useState("");  
    var [pdf_file,setpdf_file] = useState("");
    var [citiesId,setCitiesId] = useState("");  
    var [stateId,setStateId] = useState("");
    var [imagename,setimagename] = useState("");
    var [imagenames,setimagenames] = useState("");


    
    let {id} =useParams();
    useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getSingleproject.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                settitle(result["project_title"]);
                setfacility(result["facility"]);
                setdescription(result["description"]);
                setaddress(result["address"]);
                setlandmark(result["landmark"]);
                setpincode(result["pincode"]);
                setlatitude(result["latitude"]);
                setlongitude(result["longitude"]);
                setenrollment(result["enrollment"]);
                settotal_building(result["total_building"]);
                setarea(result["area"]);
                setadditional_info(result["total_building"]);
                setcontect_number(result["contect_number"]);
                setemail(result["email"]);
                setBook(result["booked"]);
                setarchitechId(result["first_name"]);
                setarchitechname(result["last_name"]);
                 setCitiesId(result["city_name"]);
                setStateId(result["state_name"]);
                 setimagename(result["photo_file_project"]);
                 setimagenames(result["pdf_file"]);
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
                                            <h2>View Architect Project
                                            
                                        
                                     
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
                                                    <th>Facility</th>
                                                    <td>{facility}</td>
                                                    </tr>
                                                    <tr>   
                                                    <th>Description</th>
                                                    <td>{description}</td>
                                                    </tr>
                                                    <tr>
                                                     <th>Address</th>
                                                     <td>{address}</td>
                                                     </tr>
                                                      
                                                    <tr> 
                                                    <th>Enrollment No</th>
                                                    <td>{enrollment}</td>
                                                    </tr>
                                                    <tr>
                                                    <th>Email ID</th>
                                                     <td>{email}</td>
                                                     </tr>
                                                     <tr>
                                                      <th>Total Building</th>
                                                      <td>{total_building}</td>
                                                      </tr>
                                                      <tr>
                                                     <th>Area</th>
                                                     <td>{area}</td>
                                                     </tr>
                                                     <tr>
                                                     <th>Additional Info</th>
                                                     <td>{additional_info}</td>
                                                     </tr>
                                                     <tr>
                                                     <th>Contact</th>
                                                     <td>{contect_number}</td>
                                                     </tr>
                                                     <tr>
                                                     <th>Pincode</th>
                                                     <td>{pincode}</td>
                                                     </tr>
                                                     <tr>
                                                     <th>Landmark</th>
                                                     <td>{landmark}</td>
                                                     </tr>
                                                     <tr>
                                                     <th>Latitude</th>
                                                     <td>{latitude}</td>
                                                     </tr>
                                                     <tr>
                                                     <th>Longitude</th>
                                                     <td>{longitude}</td>
                                                     </tr>
                                                     <tr>
                                                     <th>Book ?</th>
                                                     <td>{book}</td>
                                                     </tr>
                                                     <tr>
                                                     <th>Architech Name</th>
                                                     <td>{architechid} {architechname}</td>
                                                     </tr>
                                                      

                                                     <tr>
                                                     <th>From City</th>
                                                     <td>{citiesId}</td>
                                                     </tr>
                                                     <tr> 
                                                     <th>From State</th>
                                                     <td>{stateId}</td>
                                                     </tr>
                                                     <tr>
                                                     <th>Project Photo</th>
                                                     <td><img src={configData.PROJECT_IMAGE + imagename} width="100"></img></td>
                                                     </tr><tr>
                                                     <th>Project File</th>
                                                     <td><a target="_blank" href={configData.PROJECT_IMAGES + imagenames}>Download</a></td>
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
   
export default Viewarchitectproject
