
import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import { Link } from "react-router-dom";

import configData from '../config.json';
const Architect = () =>{
    const [allarchitech,setArchitech] = useState([]);

    const getAllArchitech = () => {
        axios.get(configData.SERVER_URL+"getArchitectFront.php").then((response)=>{
            console.log(response.data)
            if(response.status==200)
            {
                setArchitech(response.data);
            }
        });
    }
    useEffect(()=>{
        window.scrollTo(0,0);
        getAllArchitech();
     },[]);

  return (
     <>
       <section className="agent-section property-section">
            <div className="container">
                 <div className="col-lg-12">


            
            <div className="filter-panel">
                <div className="top-panel">
                    <div>
                        <h2>Architect Listing</h2>
                        
                    </div>
                   <Link to="/addarchitect" className="top-panel">Register As Architect</Link>
                </div>
            </div>
            <div className="property-wrapper-grid">
                <div className="property-2 row column-sm property-label property-grid">
                {
                                                        allarchitech.map((row,index)=>{
                                                return(
                    <div className="col-xl-3 col-md-6 wow fadeInUp">
                        <div className="property-box" style={{height:"100%"}}>
                            <div className="agent-image">
                            <div className="agent-overlay"></div>
                                <img src={configData.ARCHITECH_IMAGE + row.photo_file}  style={{width:"100%" , }} height="300"></img>
                                   
                                    <div className="overlay-content">
                                        
                                       
                                   
                                </div>
                            </div>
                            <div className="agent-content" style={{}}>
                            <h5>{row.first_name} {row.last_name}</h5> 
                                                                    <p className="font-roboto">Real estate Architect</p>
                                                                    <ul className="agent-contact">
                                                                        <li>
                                                                            <i className="fas fa-phone-alt"></i>
                                                                            <span className="character">{row.phone_no}</span>
                                                                             
                                                                        </li>
                                                                        <li><i className="fas fa-envelope"></i> {row.email}</li>
                                                                        <li><i className="fas fa-fax"></i> {row.qualification}</li>
                                                                        <li><i className="fas fa-fas fa-building"></i> {row.city_name}</li>
                                                                         
                                                                    </ul>
                              
                                <Link to={"/architectdetails/"+row.architech_id}>View profile <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                                                                        );
                                                                    })
                                                 }
                </div>
            </div>
        </div>
        
    </div>
</section>

      </>
  )
}


export default Architect