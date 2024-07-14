import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import { Link,useParams } from "react-router-dom";

import configData from '../config.json';
import { type } from '@testing-library/user-event/dist/type';
const Projectdetails =()  =>{
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
                 window.scrollTo(0,0)

             }
        });


    })




  return (
     <>
     <section className="without-top property-main small-section">
        <div className="single-property-section">
            <div className="container">
                <div className="single-title">
                    <div className="left-single">
                        <div className="d-flex">
                            <h2 className="mb-0">{title}</h2>
                        </div>
                        <p className="mt-1">{address}
                            {citiesId},
                            {stateId}</p>
                       
                       
                    </div>
                    <div className="right-single">
                        
                        <h2 className="price">{contect_number} <span>Contact</span></h2>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
       <section className="single-property mt-0 pt-0">
<div className="container">
    <div className="row ratio_55">
        <div className="col-xl-12 col-lg-8">
            <div className="description-section tab-description">
                <div className="description-details">
                <div className="">
                    <div className="image_section row zoom-gallery-multiple gx-3">
                       
                    <div className="col-sm-6">
                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="img-property">

                            <a target="_blank" href={configData.PROJECT_IMAGE + imagename}>
                            <img src={configData.PROJECT_IMAGE + imagename} className="img-fluid bg-img"/>
                            </a>
                            </div>
</div>
</div>                    </div>       
                        
                    

                       </div>
                       
                    </div>
                    <div className="desc-box">
                        <ul className="nav nav-tabs line-tab" id="top-tab" role="tablist">
                            <li className="nav-item"><a className="nav-link active"
                                    href="#about">About</a></li>
                            
                        </ul>
                        <div className=" tab-content" id="top-tabContent">
                            <div className="tab-pane fade show active about page-section" id="about">
                                <h4 className="content-title">Project Details
                                    </h4>
                                <div className="row">
                                    <div className="col-md-6 col-xl-4">
                                        <ul className="property-list-details">
                                            <li><span>Project Type :</span>{facility}</li>
                                            <li><span>Architect Name :</span>{architechid} {architechname}</li>
                                            <li><span>Contact :</span>{contect_number}</li>
                                            <li><span>Email :</span>{email}</li>
                                            <li><span>Total Building :</span>{total_building}</li>
                                            <li><span>Area :</span>{area} sq/ft</li>
                                            
                                            




                                        </ul>
                                    </div>
                                   
                                    <div className="col-md-6 col-xl-4">
                                       
                                    </div>
                                </div>
                                <h4 className="content-title mt-4">Attachments</h4>
                               
                                    <i className="far fa-file-pdf fa-lg">&nbsp;</i><a target="_blank" className="attach-file" href={configData.PROJECT_IMAGES + imagenames}>Download Project Document</a>

                                <h4 className="mt-4">Propject Brief</h4>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="font-roboto">{description}</p>
                                       
                                    </div>
                                    
                                </div>
                                <br></br>
                               
                                <br></br>
                               
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


export default Projectdetails