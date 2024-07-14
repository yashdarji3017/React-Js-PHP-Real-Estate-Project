import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link,useParams } from "react-router-dom";
import configData from '../config.json';

const Searchproperty = ({open}) => {
    const [allproperty,setProperty] = useState([]);
    var [successMessage,setSuccessMessage] = useState("");

    const getproperty = () => {
      
        axios.get(configData.SERVER_URL+"getProperty.php").then((response)=>{
            if(response.status == 200)
            {
                setProperty(response.data);
            }
        });
    }
    let {name} = useParams();

    useEffect(() =>{
        var postParams = new FormData();
        postParams.append("name",name);

        axios.post(configData.SERVER_URL+"getsearchproperty.php",postParams).then((response)=>{
            
            if(response.status == 200)
            {
                setProperty(response.data);
               
            }
           
        });

       
      
       
     },[]);

    
  return (
    <>
       <section className="property-section">
        <div className="container">
            <div className="row ratio_55">
                <div className="col">
                    <div className="title-1">
                        <span className="label label-gradient color-1">Sale</span>
                        <h2>Latest For Sale</h2>
                    
                    </div>
                  
                    <div className="row column-space no-slider-property">
                
                 {
                                                       allproperty.map((row,index)=>{
                                                return(
                                                 
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
                    <div className="property-box"style={{
                                                                       
                                                                    }}>
                        <div className="property-image">
                            
                            <div className="property-slider color-3">
                                <a href="#!">
                                <img src={configData.PROPERTY_IMAGE+ row.property_photo } width="290" height="300"/>
                                    
                                </a>
                               
                            </div>
                           
                            <span className="label label-white label-lg label-flat color-3">₹{row.price}</span>
                            
                        </div>
                        <div className="property-details">
                            <h3>{row.property_title}</h3>
                           
                            <ul className="icon-property">
                                <li>
                                    <div className="d-flex">
                                        
                                        <span>Title: {row.property_title}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        
                                        <span>Area: {row.area_property} sq ft</span>
                                    </div>
                                </li>
                            </ul>
                                           
                            <ul className="icon-property mb-0">
                                <li>
                                    <div className="d-flex">
                                        
                                        <span>Rooms: {row.master}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        
                                       Build-Date:
                                       <span>{row.build_date}</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-3 text-start">
                                <Link to={"/propertydetails/"+row.property_id} className="btn btn-light-bg btn-flat color-3">View Details</Link>
                            </div>
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

export default Searchproperty;