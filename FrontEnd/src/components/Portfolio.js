import React, { useEffect, useState} from 'react'
import axios  from 'axios';
import { Link, useParams } from "react-router-dom";


import configData from '../config.json';

function Portfolio() {
    const [allportfolio,setAllPortfolio] = useState([]);
    const [allimage,setAllImage] = useState([]);
    
    const gettAllImage = () => {
        axios.get(configData.SERVER_URL+"getImage.php").then((response)=>{
            console.log(response)
            if(response.status==200)
            {
                setAllImage(response.data);
                
            }
        });
    }
    const getAllPortfolio = () => {
        axios.get(configData.SERVER_URL+"getPortfolio.php").then((response)=>{
            console.log(response)
            if(response.status==200)
            {
                setAllPortfolio(response.data);
                
            }
        });
    } 
    useEffect(()=>{
        getAllPortfolio();
        gettAllImage();
        window.scrollTo(0,0)

     },[]); 
  return (
     <>
         <section className="portfolio-creative odd-even ratio_55">
        <div className="container">
             <div className="filter-panel">
                <div className="top-panel">
                    <div>
                        <h2>Architect Portfolio</h2>
                        
                    </div>
                </div>
            </div>
        {
                                            allportfolio.map((row,index)=>{
                                                return(
            <div className="row">
                
                <div className="col-lg-6">
                { allimage.map((row)=>{
                                                return(
                    <div className="wow zoomIn">
                  
                    <img src={configData.PORTFOLIO_IMAGE + row.photo_file} width="500" height="300"/>
                    </div>
                    );
                })
            } 
                </div>
                
                <div className="col-lg-6">
                    <div className="content-sec wow zoomIn">
                        <div>
                            <h3>{row.title_portfolio}</h3>
                            <p className="font-roboto">
                            {row.description}</p>
                            <Link className="btn btn-gradient btn-pill color-1">Read More</Link>
                        </div>
                    </div>
                </div>
               
            </div>
           );
        })
    } 
        </div>

</section>

      </>
  )
}


export default Portfolio