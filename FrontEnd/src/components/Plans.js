import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import configData from '../config.json';

const Plans = () => {

  const [allplan,setAllplans] = useState([]);
    
  const getAllplans = () => {
      axios.get(configData.SERVER_URL+"getPlanFront.php").then((response)=>{
          console.log(response)
          if(response.status==200)
          {
              setAllplans(response.data);
              
          }
      });
  }
   useEffect(()=>{
    window.scrollTo(0,0)
    getAllplans();
 },[]);  


  return (
    <>
    <section className="property-section">
        <div className="container">
            <div className="row ratio_65">
                <div className="col-12 property-grid-slider property-grid-3">
                    <div className="filter-panel">
                        <div className="top-panel">
                            <div>
                                <h2>Architect Plans</h2>
                            </div>
                            
                        </div>
                    </div>
                   
                    <div className="property-wrapper-grid list-view">
                        <div className="property-2 row column-sm property-label property-grid list-view no-sidebar">
                            <div className="col-md-12 col-xl-6">
                            {

allplan.map((row,index)=>{
    return(
                                <div className="property-box mt-2">
                                    
                                    <div className="">
                                        <div className="">
                                        <div className="agent-image">   
                                                                                     <a>
                                                <img src={configData.PLAN_IMAGE+ row.photo_file} style={{width:'100%'}} height="250"/>
                                                </a>
                                            </div>
                                            
                                        </div>
                                       
                                                       
                                       
                                    </div>
                                    <div className="property-details" >
                                        <span className="font-roboto">{row.plan_title}</span>
                                        
                                            <h3>Architech Name: {row.first_name} {row.last_name}</h3>
                                      
                                        <h6>{row.update_price}₹
</h6>
                                       
                                        <ul>
                                            <li>Visits : {row.visits}</li>
                                
                                            
                                           
                                        </ul>
                                        <div className="property-btn d-flex">
                                            <span>{row.add_date}</span>
                                            <Link to={"/plandetails/"+row.plan_id} className="btn btn-dashed btn-pill color-2">Details</Link>

                                        </div>
                                    </div>
                                    &nbsp;<br></br></div>
                                
                                  );
                                })
                            } 
<br></br>
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

export default Plans
