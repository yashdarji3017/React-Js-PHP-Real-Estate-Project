import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
     },[]);
  return (
    <div>
         <section className="home-section layout-1 layout-9">
<div className="container">
    <div className="row">
        <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="home-main arrow-light">
                <div className="home-content">
                    <div>
                        <img src="../assets/images/signature/3.png" className="img-fluid" alt=""></img>
                        <h6>Want to buy or rent Home ?</h6>
                        <h1>Find Better Places to <span className="typed"> Live</span></h1>
                        <button onclick="document.location='submit-property.html'" type="button" className="btn btn-gradient btn-pill color-1">submit
                            property</button>

                      
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="layout-right-img">
                <img src="../assets/images/layout-9.png" alt="" className="img-fluid"></img>
            </div>
        </div>
    </div>
</div>
<div className="snow-effect"></div>
</section>

<section className="offer-section banner-section layout9 slick-between ">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="title-1 text-white">
                        <span className="label label-gradient color-1">New Offer</span>
                        <h2>Our New Offer</h2>
                        
                    </div>
                    <div className="offer-slider">
                        <div>
                        <div className="offer-wrapper">
                                <div className="media">
                                    <div className="offer-icon">
                                        <img src="../assets/images/others/icon-1.png" alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h6>Alacto</h6>
                                        <h3>Looking for the new home?</h3>
                                        <p>5 offers on day, trusted by a community of thousands of users. 15 new offers every day.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="offer-wrapper">
                                <div className="media">
                                    <div className="offer-icon">
                                        <img src="../assets/images/others/icon-2.png" alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h6>Alacto</h6>
                                        <h3>Are you looking for Flat?</h3>
                                        <p>New offers on site, trusted
                                            by a community of thousands of users.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

{/* Agent */}
<section className="about-section about-between ratio_square">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="title-1">
                        <span className="label label-gradient color-1">Agent</span>
                        <h2>Meet our Agent</h2>
                        
                    </div>
                    

                    <div className="about-1 about-wrap">
                        <div>
                            <div className="about-content row">
                                <div className="col-xl-6">
                                    <div className="about-image">
                                        <div>
                                            <img src="../assets/images/about/1.jpg" className="img-fluid bg-img" alt=""></img>
                                        </div>
                                        <div className="about-overlay"></div>
                                        <div className="overlay-content">
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="our-details">
                                        <a href="agent-profile.html"><h6 className="d-flex">Sanem Bolat <span className="label-heart color-1 ms-2"><i
                                                    className="fas fa-heart"></i></span></h6></a>
                                        <h3>Urban District Real.</h3>
                                        <span className="font-roboto"><i data-feather="mail" className="me-1"></i>John@inspirythemes.com</span>
                                        <p className="font-roboto">A real estate agent or broker is a person who represents sellers or buyers advised to consult a licensed.</p>
                                        <a href="agent-profile.html" className="btn btn-gradient btn-pill color-1 mt-2"><i data-feather="eye"></i>View Portfolio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="about-content row">
                                <div className="col-xl-6">
                                    <div className="about-image">
                                        <div>
                                            <img src="../assets/images/about/2.jpg" className="img-fluid bg-img" alt=""></img>
                                        </div>
                                        <div className="about-overlay"></div>
                                        <div className="overlay-content">
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="our-details">
                                        <a href="agent-profile.html"><h6 className="d-flex">Leena David <span className="label-heart color-1 ms-2"><i
                                                    className="fas fa-heart"></i></span></h6></a>
                                        <h3>Blue Cottage Estate</h3>
                                        <span className="font-roboto"><i data-feather="mail" className="me-1"></i>Leena@inspirythemes.com</span>
                                        <p className="font-roboto">They are responsible for managing employees and overseeing daily productivity.</p>
                                        <a href="agent-profile.html" className="btn btn-gradient btn-pill color-1 mt-2"><i data-feather="eye"></i>View Portfolio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 {/* Package and Submit property   */}
<section className="banner-section layout9 parallax-image">
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="title-1">
                    <span className="label label-gradient color-1">Buy or sell</span>
                </div>
                <div className="light-bg banner-1">
                    <span className="big-gradient">*</span>
                    <span className="small-white">*</span>
                    <h6>Alacto real estate</h6>
                    <h2>Looking to Buy a new property or Sell an existing one?
                        Real Homes provides an easy solution!</h2>
                    <div className="button-banner">
                        <Link to="/package" className="btn btn-gradient btn-pill color-1">Browse Package</Link>
                        <Link to="/addproperty" className="btn btn-white btn-pill color-1"> <span>Submit property</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* contact us */}
<section className="small-section contact-2" >
<div className="container">
<div className="title-1">
                        <span className="label label-gradient color-1">Contact Us</span>
                        <h2>Contact Us</h2>
                        
                    </div>
    <div className="row gx-3">
        
        <div className="col-xl-6 col-lg-5">
            <div className="log-in px-xxl-5 px-lg-4">
                <div className="mb-4 text-start">
                    <h2>Let's Get In Touch</h2>
                </div>
                <form className="row gx-3">
                    <div className="form-group col-md-12">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i data-feather="user"></i>
                                </div>
                            </div>
                            <input type="text" className="form-control" placeholder="Enter your name" required=""></input>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i data-feather="phone"></i>
                                </div>
                            </div>
                            <input 
                                    placeholder="phone number"
                                    className="form-control" 
                                    name="mobnumber" 
                                    id="tbNumbers" 
                                    oninput="maxLengthCheck(this)"
                                    type = "tel"
                                    // onkeypress="javascript:return isNumber(event)"
                                    maxlength = "9"
                                    required="">
                                        </input>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i data-feather="mail"></i>
                                </div>
                            </div>
                            <input type="email" className="form-control" placeholder="email address" required=""></input>
                        </div>
                    </div>
                    <div className="form-group col-md-12">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">Write here something
                        </textarea>
                    </div>
                    <div className="submit-btn with-captcha">
                        
                        <div>
                        </div>
                        <button className="btn btn-gradient color-2 btn-flat" type="submit">Send Your Message</button>
                    </div>
                    
                </form>
            </div>
        </div>

        <div className="col-xl-6 col-lg-7 contact_section contact_wrap_2">
            <div className="row contact-detail theme-card">
                <div className="col-lg-12 p-0">
                    <div className="contact-content">
                        <h2>Welcome to Alacto !!</h2>
                        <p className="font-roboto">Connected residences might be owned by a single entity and leased out, 
                            or owned separately with an agreement covering the relationship between units and common areas and concerns.</p>
                    </div>
                </div>
                
                <div className="col-sm-12 p-0">
                    <div className="contact_wrap shadow-none text-start ps-0">
                        <i data-feather="mail"></i>
                        <h4>Online Contact</h4>
                        <ul>
                            <li><b>Inquiries</b>: therealalacto103@gmail.com</li>
                        
                            <li><b>Site</b> :www.alacto.com</li>
                            <li><b>Contact</b>: +91 7069603017</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        



    </div>
</div>
</section>
{/* happy */}
<section className="testimonial-bg testimonial-layout9">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="title-1 text-white">
                        <span className="label label-gradient color-1">Our</span>
                        <h2>Happy clients</h2>
                       
                    </div>
                    <div className="testimonial-2 arrow-light">
                        <div>
                            <div className="client-slider light-bg">
                                <ul className="user-list">
                                    <li><img src="../assets/images/testimonial/12.jpeg" alt=""/></li>
                                    <li>
                                        <img src="../assets/images/testimonial/13.jpeg" alt=""/>
                                        <div className="heart-bg">
                                        </div>
                                        <img src="../assets/images/testimonial/heart.png" alt="" className="heart-icon"/>
                                    </li>
                                    <li><img src="../assets/images/testimonial/14.jpg" alt=""/></li>
                                </ul>
                                <p>To be successful in real estate, you must always and consistently put your clients' best interests first. When you do..!</p>
                                <h6>real estate</h6>
                                <ul className="client-rating">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                </ul>
                                <a href="agent-profile.html"><span className="label label-white label-lg label-pill"><span className="gradient-1">Dev
                                    Bundela</span></span></a>
                            </div>
                        </div>
                        <div>
                            <div className="client-slider light-bg">
                                <ul className="user-list">
                                    <li><img src="../assets/images/testimonial/13.jpeg" alt=""/></li>
                                    <li>
                                        <img src="../assets/images/testimonial/14.jpg" alt=""/>
                                        <div className="heart-bg">
                                        </div>
                                        <img src="../assets/images/testimonial/heart.png" alt="" className="heart-icon"/>
                                    </li>
                                    <li><img src="../assets/images/testimonial/12.jpeg" alt=""/></li>
                                </ul>
                                <p>If I were a professional wrestler, I’d want a name that strikes fear in most people. Something like, ‘The Underwriter.</p>
                                <h6>real estate</h6>
                                <ul className="client-rating">
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                </ul>
                                <span className="label label-white label-lg label-pill"><span className="gradient-1"> Yash Darji </span></span>
                            </div>
                            
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    
  )
}

export default Homepage
