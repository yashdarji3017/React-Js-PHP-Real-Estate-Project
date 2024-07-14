import React,{useEffect} from 'react'

const AboutUs = ()=> {
    useEffect(() =>{
        
        
                window.scroll(0,0);
            }
       
       
    ,[]);
  return (
<>
<section class="about-main">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title-2">
                        <h2>About Us</h2>
                        <p class="font-roboto">Elegant retreat in Coral Gables setting. This home provides entertaining spaces with
                            kitchen opening</p>
                    </div>
                    <div class="user-about">
                        <div class="row">
                            <div class="col-xl-7 col-lg-5">
                                <div class="about-image">
                                    <div class="img-box side-left">
                                        <img src="../assets/images/banner-5.jpg" class="img-fluid" alt=""></img>
                                        <div class="side-effect"></div>
                                    </div>
                                    <div class="img-box img-abs side-right">
                                        <img src="../assets/images/banner-6.jpg" class="img-fluid" alt=""></img>
                                        <div class="side-effect"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-7">
                                <div class="about-content">
                                    <h3>We are the expert of team communication</h3>
                                    <p class="font-roboto">Residences can be classified by and how they are connected to neighbouring residences and land. 
                                        Different types of housing tenure can be used for the same physical type </p>
                                </div>
                                <div class="about-listing">
                                    <ul>
                                        <li>
                                            <h4>15,801</h4>
                                            <p>Total property</p>
                                        </li>
                                        <li>
                                            <h4>5792</h4>
                                            <p>Agents</p>
                                        </li>
                                        <li>
                                            <h4>3871</h4>
                                            <p>Agency</p>
                                        </li>
                                        <li>
                                            <h4>4791+</h4>
                                            <p>Sold out property</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <section class="service-section service-2 bg-light">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title-2">
                        <h2>Provided Services</h2>
                        <p>Residences can be classified into different type of housing tenure can used for same physical type.</p>
                    </div>
                    <div class="row property-service column-space about-service">
                        <div class="col-xl-4 col-md-6">
                            <div class="service-box">
                                <div class="hover-line">
                                    <svg class="service-icon">
                               
                                    </svg>
                                    <div>
                                        <svg class="icon-line-color">
                                           
                                        </svg>
                                    </div>
                                </div>
                                <a href="services.html"><h3>Less Price Package</h3></a>
                                <p class="font-roboto">Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef
                                    kitchen opening…</p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="service-box">
                                <div class="hover-line">
                                    <svg class="service-icon">
                                        
                                    </svg>
                                    <div>
                                        <svg class="icon-line-color">
                                            
                                        </svg>
                                    </div>
                                </div>
                                <a href="services.html"><h3>Fastest Service</h3></a>
                                <p class="font-roboto"> This home provides wonderful entertaining spaces with a chef
                                    kitchen opening… Elegant retreat in a quiet Coral Gables setting.</p>
                            </div>
                        </div>
                        <div class="col-xl-4 offset-xl-0 offset-md-3 col-md-6">
                            <div class="service-box">
                                <div class="hover-line">
                                    <svg class="service-icon">
                                   </svg>
                                    <div>
                                        <svg class="icon-line-color">
                                        </svg>
                                    </div>
                                </div>
                                <a href="services.html"><h3>Largest Real Estate</h3></a>
                                <p class="font-roboto">Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef
                                    kitchen opening…</p>
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

export default AboutUs