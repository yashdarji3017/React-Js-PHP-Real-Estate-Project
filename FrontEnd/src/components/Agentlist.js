import React, { useState,useEffect } from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';

const Agentlist = () => {
   
    var [type,setType] = useState("Agent");
    var [userid,setuserId] = useState("");

    var [utype,setuype] = useState("Agent");
    const [alluser,setAlluser] = useState([]);

    const getAlluser = () => {
        var postParams = new FormData();
        postParams.append("utype",utype);

       
        axios.post(configData.SERVER_URL+"getAgentFront.php",postParams).then((response)=>{

            if(response.status==200)
            {
                setAlluser(response.data);
            }
        });
    }
    useEffect(()=>{
        window.scroll(0,0);
        getAlluser();
     },[]);
     
  return (
    <div>
      <section className="agent-section property-section">
        <div className="container">
            <div className="row ratio2_3 agent-section property-section ">
                <div className="col-lg-12">
                    <div className="filter-panel">
                        <div className="top-panel">
                            <div>
                                <h2>Agent Listing</h2>
                            </div>
                           
                        </div>
                    </div>
                    <div className="property-wrapper-grid">
                        <div className="property-2 row column-sm property-label property-grid">
                        {
                                                                alluser.map((row,index)=>{
                                                                    return(  
                            <div className="col-xl-4 col-md-6 wow fadeInUp" style={{margin:'',padding:''}}>
                           
                                <div className="property-box">
                                    <div className="agent-image">
                                        <div>
                                        <img src={configData.USER_IMAGE + row.photo_file} style={{width:"100%"}} alt=""></img>
                                            <span className="label label-shadow">2 properties</span>
                                            <div className="agent-overlay"></div>
                                            <div className="overlay-content">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="agent-content">
                                        <h3><a href="agent-profile.html">{row.firstname} {row.lastname}</a></h3>
                                        <p className="font-roboto">Real estate Agent</p>
                                        <ul className="agent-contact">
                                            <li>
                                                <i className="fas fa-phone-alt"></i>{row.contact}</li>
                                              
                                                
                                            
                                            <li><i className="fas fa-envelope"></i>{row.email_user}</li>
                                            <li><i className="fas fa-fax"></i>{row.gender}</li>
                                        </ul>
                                        <Link to={"/agentdetails/"+ row.user_id}>View profile <i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            
                           </div>
                           );
                        })
                    }
                            {/* // <div className="col-xl-4 col-md-6 wow fadeInUp">
                            //     <div className="property-box">
                            //         <div className="agent-image">
                            //             <div>
                            //                 <img src="../assets/images/avatar/3.jpg" className="bg-img" alt=""/>
                            //                 <span className="label label-shadow">3 properties</span>
                            //                 <div className="agent-overlay"></div>
                            //                 <div className="overlay-content">
                                                
                            //                 </div>
                            //             </div>
                            //         </div>
                            //         <div className="agent-content">
                            //             <h3><a href="agent-profile.html">Greta Life</a></h3>
                            //             <p className="font-roboto">Real estate agent</p>
                            //             <ul className="agent-contact">
                            //                 <li>
                            //                     <i className="fas fa-phone-alt"></i> 
                            //                     <span className="phone-number">+91 5470087201</span>
                            //                     <span className="character">+91 547008****</span>
                            //                     <span className="label label-light label-flat color-2">
                            //                         show    
                            //                         <span>hide</span>
                            //                     </span>
                            //                 </li>
                            //                 <li><i className="fas fa-envelope"></i> life@gmail.in</li>
                            //                 <li><i className="fas fa-fax"></i> 248 200 325</li>
                            //             </ul>
                            //             <a href="agent-profile.html">View profile <i className="fas fa-arrow-right"></i></a>
                            //         </div>
                            //     </div>
                            // </div>
                            // <div className="col-xl-4 col-md-6 wow fadeInUp">
                            //     <div className="property-box">
                            //         <div className="agent-image">
                            //             <div>
                            //                 <img src="../assets/images/avatar/2.jpg" className="bg-img" alt=""/>
                            //                 <span className="label label-shadow">6 properties</span>
                            //                 <div className="agent-overlay"></div>
                            //                 <div className="overlay-content">
                                               
                            //                 </div>
                            //             </div>
                            //         </div>
                            //         <div className="agent-content">
                            //             <h3><a href="agent-profile.html">Bob Frapples</a></h3>
                            //             <p className="font-roboto">Sales Executive</p>
                            //             <ul className="agent-contact">
                            //                 <li>
                            //                     <i className="fas fa-phone-alt"></i> 
                            //                     <span className="phone-number">+91 2714203587</span>
                            //                     <span className="character">+91 271420****</span>
                            //                     <span className="label label-light label-flat color-2">
                            //                         show    
                            //                         <span>hide</span>
                            //                     </span>
                            //                 </li>
                            //                 <li><i className="fas fa-envelope"></i> bob@gmail.in</li>
                            //                 <li><i className="fas fa-fax"></i> 571 241 925</li>
                            //             </ul>
                            //             <a href="agent-profile.html">View profile <i className="fas fa-arrow-right"></i></a>
                            //         </div>
                            //     </div>
                            // </div> */}
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    </div>
  )
}

export default Agentlist
