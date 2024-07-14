import React from 'react'
import { Link } from 'react-router-dom'

const  Footer = () => {
    const scroll = () =>{
     
        window.scrollTo(0, 0);
    
    }
  return (
     <>
      
      <footer>
        <div className="footer footer-bg" style={{marginTop:''}}>
            <div className="container">
                <div className="row">
                    {/* <div className="col-xl-3">
                        <div className="footer-details text-center">
                            <a href="https://themes.pixelstrap.com/sheltos/index.html">
                            <img src="../assets/images/logo/1.png" alt="" className="img-fluid for-light"  width='100' height='100'></img>
                            </a>
                            <p>Elegant retreat in a quiet Coral Gables setting. This home provides
                                wonderful entertaining spaces with a chef kitchen opening
                            </p>
                            <h6>Contact us</h6>
                            <ul className="icon-list">
                                <li><a href="contact-3.html"><i className="fas fa-map-marker-alt"></i></a></li>
                                <li><a href="contact-3.html"><i className="fas fa-phone-alt"></i></a></li>
                                <li><a href="signup.html"><i className="fas fa-envelope"></i></a></li>
                                <li><a href="contact-3.html"><i className="fas fa-globe"></i></a></li>
                                <li><a href="contact-3.html"><i className="fas fa-wifi"></i></a></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="col-xl-12">
                        <div className="row">
                        <div className="col-lg-3 col-md-4">
                        <div className="footer-details text-center">
                            <a href="">
                            <img src="../assets/png/4.png" alt="" className="img-fluid for-light" style={{height:'100px' ,width:'150px'}}></img>
                            </a>
                            <p>Elegant retreat in a quiet Coral Gables setting. This home provides
                                wonderful entertaining spaces with a chef kitchen opening
                            </p>
                            <h6>Contact us</h6>
                            <h6>7069603017</h6>
                            <ul className="icon-list">
                                <li><a href=""><i className="fas fa-phone-alt"></i></a></li>
                                <li><a href=""><i className="fas fa-envelope"></i></a></li>
                                <li><a href=""><i className="fas fa-globe"></i></a></li>
                            </ul>
                        </div>

                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="footer-links footer-left-space">
                                    <h5 className="footer-title ">Useful links
                                        <span className="according-menu"><i className="fas fa-chevron-down"></i></span>
                                    </h5>
                                    <ul className="footer-content">
                                        <li>
                                            <Link to="/aboutus">About us</Link>
                                        </li>
                                        <li>
                                            <a href="/blog">Articles</a>
                                        </li>
                                        <li>
                                            <Link to="/contactus">Contact Us</Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="footer-links">
                                    <h5 className="footer-title">feature
                                        <span className="according-menu"><i className="fas fa-chevron-down"></i></span>
                                    </h5>
                                    <ul className="footer-content">
                                        <li>
                                            <Link to="/aboutus" >Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/package" >Package</Link>
                                        </li>
                                        <li>
                                            <Link to="/agentlist" >Agents</Link>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>



                            
                            <div className="col-lg-3 col-md-4">
                                <div className="footer-links">
                                    <h5 className="footer-title">Blog
                                    <span className="according-menu"><i className="fas fa-chevron-down"></i></span>

                                    </h5>
                                    
                                    <ul className="footer-content">
                                        <li>
                                            <a href="/blog" >Blog</a>
                                        </li>
                                       
                                       
                                    </ul>
                                    
                                </div>
                               
                            </div>
                           
                            
                        </div>
                        
                        
                    </div>
                   
                </div>
               
            </div>
            <br></br><br></br><br></br><br></br>
        </div>
        <div className="tap-top color-1" onClick={scroll}>
          <div>
          <i className="fa fa-arrow-up" aria-hidden="true"></i>

          </div>
        </div>
        <div className="sub-footer footer-light">
           
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-6">
                        <div className="copy-right">
                            <p className="mb-0">Copyright 2023, All Right Reserved Our Team</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 text-end">
                        <ul className="sub-footer-link">
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/" >Terms</Link></li>
                            <li><Link to="/">Privacy policy</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                        

                    </div>
                    
                </div>
            </div>
        </div>
       
    </footer>
    
      </>
  )
}


export default Footer