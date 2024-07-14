import { Link } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import configData from '../config.json';

 const Sidebar = ({click,open}) =>{
    const [login,setlogin] = useState([]);
    



     
      

     
  return (
    <>
          


    <div className="page-body-wrapper">
    
            <div className={"page-sidebar " +  (open ? 'close_icon':'')} >
           
            <div className="logo-wrap">
                
                <a href="index-2.html">
                   
                </a> 

                <div className={"back-btn d-lg-none d-inline-block"+(open ? 'full-menu':'')} >
                                   <div className="toggle-sidebar col-auto" onClick={click}>
               
               </div>
                </div>
            </div>
            
           

        </div>
       
        </div>

     </>
  )
}
export default Sidebar;

