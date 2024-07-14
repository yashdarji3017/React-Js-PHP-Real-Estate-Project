import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useParams } from "react-router-dom";
import configData from '../config.json';
import Side from './Side';

const Viewuserproperty = () => {
    var [property_title,setproperty_title] = useState("");
    var [description,setdescription] = useState("");
    var [bedroom,setbedroom] = useState("");
    var [hall,sethall] = useState("");
    var [kitchen,setkitchen] = useState("");
    var [master,setmaster] = useState("");
    var [price,setprice] = useState("");
    var [address,setaddress] = useState("");
    var [landmark,setlandmark] = useState("");
    var [pincode,setpincode] = useState("");
    var [latitude,setlatitude] = useState("");
    var [longitude,setlongitude] = useState("");
    var [area,setarea] = useState("");
    var [furnished,setfurnished] = useState("");
    var [floors,setfloors] = useState("");
    var [numbers,setnumbers] = useState("");
    var [property,setproperty] = useState("");
    var [available,setavailable] = useState("");
    var [parking,setparking] = useState("");
    var [isavailable, setisavailable] = useState("");
    var [isapprove,setisapprove] = useState("");
    var [isactive,setisactive] = useState("");
    var [build_date,setbuild_date] = useState("");
    var [projectid,setprojectid] = useState("");
    var [userid,setuserId] = useState("");
    var [categoriesid,setcategoriesId] = useState("");
    var [citiesId,setCitiesId] = useState("");  
    var [stateId,setStateId] = useState("");
    var [userid,setuserId] = useState("");
    var [username,setusername] = useState("");
    var [photo_file,setphoto_file] = useState("");
    var [pdf_file,setpdf_file] = useState("");  
    var [imagename,setimagename] = useState("");
    var [imagenames,setimagenames] = useState("");

      
    let {id} =useParams();
useEffect(() =>{
    var postParams = new FormData();
    postParams.append("id",id);

    axios.post(configData.SERVER_URL+"getSingleproperty.php",postParams).then((response)=>{
        if(response.status == 200)
        {
            var result = response.data;
            setproperty_title(result["property_title"]);
            setdescription(result["description_property"]);
            setbedroom(result["bedroom"]);
            sethall(result["hall"]);
            setkitchen(result["kitchen"]);
            setmaster(result["master"]);
            setprice(result["price"]);
            setaddress(result["address_property"]);
            setlandmark(result["landmark_property"]);
            setpincode(result["pincode_property"]);
            setlatitude(result["latitude_property"]);
            setlongitude(result["longitude_property"]);
            setarea(result["area_property"]);
            setfurnished(result["furnished"]);
            setfloors(result["floors"]);
            setnumbers(result["numbers"]);
            setparking(result["parking"]);
             setproperty(result["property"]);
            setisavailable(result["available"]);
             setisapprove(result["approve"]);
            setisactive(result["active"]);
            setbuild_date(result["build_date"]);
            setprojectid(result["project_title"]);
            setuserId(result["firstname"]);
            setusername(result["lastname"]);
            setcategoriesId(result["categories_name"]);
            setCitiesId(result["city_name"]);
             setStateId(result["state_name"]);
           
             setimagename(result["property_photo"]);
            setimagenames(result["pdf_property"]);
            window.scrollTo(0,0)



         }
    });


})
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
                                            <h2>View Your Property Details
                                            
                                        
                                     
                                </h2> </center>
                               
 
                                           
                                 <br></br>
                                <div className="container-fluid">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="">
                                      <div className="">
                                      <table className="table table-bordered" cellPadding="20">
                                                <tr>
                                                    <th>Property Title</th>
                                                     <td>{property_title}</td>
                                                </tr>
                                                <tr>
                                                    <th>Description</th>
                                                    <td>{description}</td>
                                                 </tr>
                                                  <tr>
                                                    <th>Bedroom</th>
                                                    <td>{bedroom}</td>
                                                </tr>
                                                <tr>
                                                    <th>Hall</th>
                                                    <td>{hall}</td>
                                                </tr>
                                                <tr>
                                                    <th>Kitchen</th>
                                                    <td>{kitchen}</td>
                                                 </tr>
                                                 <tr>
                                                    <th>Master</th>
                                                    <td>{master}</td>
                                                </tr>
                                                <tr>
                                                    <th>Price</th>
                                                    <td>{price}</td>
                                                </tr>
                                                <tr>
                                                    <th>Address</th>
                                                    <td>{address}</td>
                                                </tr>
                                                <tr>
                                                    <th>Landmark</th>
                                                    <td>{landmark}</td>
                                                </tr>
                                                <tr>
                                                    <th>Pincode</th>
                                                    <td>{pincode}</td>
                                                </tr>
                                                <tr>
                                                    <th>Latitude</th>
                                                    <td>{latitude}</td>
                                                </tr>
                                                <tr>
                                                    <th>Area</th>
                                                    <td>{area}</td>
                                                </tr>
                                                <tr>
                                                    <th>Longitude</th>
                                                    <td>{longitude}</td>
                                                </tr>
                                                <tr>
                                                    <th>Furnished</th>
                                                    <td>{furnished}</td>
                                                </tr>
                                                <tr>
                                                    <th>Floors</th>
                                                    <td>{floors}</td>
                                                </tr>
                                                <tr>
                                                    <th>Number</th>
                                                    <td>{numbers}</td>
                                                </tr>
                                                <tr>
                                                    <th>Property Buy/Rend</th>
                                                    <td>{property}</td>
                                                </tr>
                                                
                                                <tr>
                                                    <th>Parking</th>
                                                    <td>{parking}</td>
                                                </tr>
                                                <tr>
                                                    <th>Available</th>
                                                    <td>{isavailable}</td>
                                                </tr>
                                                <tr>
                                                    <th>Approve</th>
                                                    <td>{isapprove}</td>
                                                </tr>
                                                <tr>
                                                    <th>Acitve</th>
                                                    <td>{isactive}</td>
                                                </tr>
                                                <tr>
                                                    <th>Build Date</th>
                                                    <td>{build_date}</td>
                                                </tr>
                                                <tr>
                                                    <th>Project Name</th>
                                                    <td>{projectid}</td>
                                                </tr>
                                                <tr>
                                                    <th>User Name</th>
                                                    <td>{userid} {username}</td>
                                                </tr>
                                                <tr>
                                                    <th>Categories Name</th>
                                                    <td>{categoriesid}</td>
                                                </tr>
                                                <tr>
                                                    <th>City</th>
                                                    <td>{citiesId}</td>
                                                </tr>
                                                <tr>
                                                    <th>State</th>
                                                    <td>{stateId}</td>
                                                </tr>
                                                <tr>
                                                     <th>Property Main Image</th>
                                                     <td><img src={configData.PROPERTY_IMAGE + imagename} width="100"/></td>
                                                     </tr>

                                                     <tr>
                                                     <th>Property File</th>
                                                     <td><a target="_blank" href={configData.PROPERTY_IMAGES + imagenames}>Download</a></td>
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
   
export default Viewuserproperty
