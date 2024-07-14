import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import { Link, useNavigate } from "react-router-dom";

import configData from '../config.json';
const Property = () => {
    var [filter,setfilter] = useState("");
    var [categoriesid,setcategoriesId] = useState("");

    const [categories,setcategories] = useState([]);
    const navigate = useNavigate();
    const getcategories = () => {
       
        axios.get(configData.SERVER_URL+"getCategories.php").then((response)=>{
            
             if(response.status==200)
            {
              
                setcategories(response.data);
            }
        });
    }
    const handleCategoriesChange = (e) =>{
        var categoriesid = e.target.value;
        var postParams = new FormData();
            postParams.append("cat",categoriesid);
        axios.post(configData.SERVER_URL+"getcatproperty.php",postParams).then((response)=>{
            if(response.status==200)
            {
                setproperty(response.data);
            }
        });
        setcategoriesId(categoriesid);
     }; 
     

        const [allproperty,setproperty] = useState([]);
    
        const getAllPortfolio = () => {
            axios.get(configData.SERVER_URL+"getpropertyFront.php").then((response)=>{
                 
                if(response.status==200)
                {
                    setproperty(response.data);
                }
            });
        }
        useEffect(()=>{
            getAllPortfolio();
            getcategories();
            window.scrollTo(0,0)

         },[]);
  return (
     <>
       <section className="property-section">
        <div className="container-fluid col-lg-11">
    <div className="row ratio_55 zoom-gallery property-box-flat">
        <div className="col-lg-12">
        <div className="filter-panel">
                <div className="top-panel">
                    <div>
                        <h2>Property Listing</h2>
                        
                    </div>
                   <Link to="/addproperty" className="top-panel">Sell Property</Link>
                </div>
            </div>
            <div className="row column-space no-slider-property">
                <div className=''>
                <div className="form-group col-md-12 col-sm-6">
                                                <label>Categories Wise Property</label>
                                                <div>
                                                       <select onChange={handleCategoriesChange} className="form-control"  >
                                                            <option value="">Please Select Categoires</option>
                                                            {
                                            categories.map((row,index)=>{
                                                return(  
                                                    <option value={row.categories_id }>{row.categories_name	}</option>
                                                 );
                                            })
                                        }
                                                        </select>
                                                    </div> 
                                                    </div>
                </div>

                
                 {
                                                       allproperty.map((row,index)=>{
                                                return(
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
                    <div className="property-box"style={{
                                                               height:'100%'        
                                                                    }}>
                        <div className="property-image">
                            
                            <div className="property-slider color-3">
                                <a href="">
                                <img src={configData.PROPERTY_IMAGE+ row.property_photo } width="290" height="300"/>
                                    
                                </a>
                               
                            </div>
                           
                            <span className="label label-white label-lg label-flat color-3">₹{row.price}</span>
                            
                        </div>
                        <div className="property-details">
                            <h3><a href="">{row.property_title}</a></h3>
                           
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
                                    <div className="d-flex">
                                        
                                        <span>City: {row.city_name}</span>
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
                            <div className="mt-3 text-start" style={{display:'grid'}}>
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


export default Property