import React, { useEffect, useState} from 'react'
import axios  from 'axios';
import { Link, useParams,useNavigate } from "react-router-dom";
import configData from '../config.json';



const Homepages = () => {
        
        var [name,setname] = useState("");  
        var [contact,setcontact] = useState("");
        var [email,setemail] = useState("");
       
        var [feedback,setfeedback] = useState("");
        var [successMessage,setSuccessMessage] = useState("");
        var [feedback_date,setfeedback_date] = useState("");
        const [search,setSearch] = useState();
        const navigate = useNavigate();

        const handleSearch = () =>{
            if(search!="")
            {
                navigate("/searchproperty/"+search);
            }
        };
    const handleForm = (e) => {
        e.preventDefault();
        
        //API
         var postParams = new FormData();
    
         postParams.append("name",name);
         postParams.append("contact",contact);
         postParams.append("email",email);
         postParams.append("feedback",feedback);
         postParams.append("feedback_date",'');
    
         postParams.append("userid",localStorage.getItem("userid"));
        //  postParams.append("architechid",localStorage.getItem("architectid"));
         
    
         axios.post(configData.SERVER_URL+"addfeedback.php",postParams).then((response)=>{
         if(response.status == 200)
            {
                var result = response.data;
                 alert(result)
                if(result=="Yes")
                    { 
                        
                        alert("Feedback Inserted successfully!");
                       // alert("Data Inserted");
                    }
                else
                {
                    alert("Error");
                }
            }
           
        });
        //API
    
    };
        useEffect(() =>{
            window.scrollTo(0,0);
           
           
        },[]);
       /// window.location.reload(false);
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
                        <Link to="/addproperty"  type="button" className="btn btn-gradient btn-pill color-1">submit
                            property</Link>

                      
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
 {/* Sales */}
 <section className="property-section">
        <div className="container">
            <div className="row ratio_55">
                <div className="col">
                    <div className="title-1">
                        <span className="label label-gradient color-1">Sale</span>
                        <h2>Latest For Sale</h2>
                    
                    </div>
                    <div class="col-md-12">
                    <div className="form-group search-form">
                                <div class="input-group">

                                    <input type="text" onChange={(e)=>setSearch(e.target.value)} className="form-control" placeholder="Search here..">
                                    
                                    </input>
                                    <button id="search-button" onClick={handleSearch} type="button" className="btn btn-gradient btn-pill color-1">
                            <i class="fas fa-search"></i>
                                </button>
                                </div>
                        
                        
                      </div>
                      </div>
                    <div className="property-2 row column-space color-1">
                        <div className="col-xl-4 col-md-6 wow fadeInUp">
                            <div className="property-box">
                                <div className="property-image">
                                    <div className="property-slider color-1">
                                        <a href="#!">
                                            <img src="../assets/images/property/30.jpg" className="bg-img" height="300" width="500" style={{width:'100%'}} alt=""/>
                                        </a>
                                    </div>
                                    <div className="labels-left">
                                        <div>
                                            <span className="label label-shadow">sale</span>
                                        </div>
                                    </div>
                                   
                                </div>

                                <div className="property-details">
                                    <a href="single-property-8.html">
                                        <h3>Avantis Ofira Posh</h3>
                                    </a>
                                    <h6 className="color-1">₹15 Lakhs</h6>
                                    <p className="font-roboto">Real estate is divided into several categories, including residential property, commercial property and industrial property.</p>
                                    <ul>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt=""/>Bed : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt=""/>Baths : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt=""/>Sq Ft : 5000</li>
                                    </ul>
                                    <div className="property-btn d-flex">
                                        <span>August 4, 2022</span>
                                        <Link to="propertydetails/89"   className="btn btn-dashed btn-pill color-1">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 wow fadeInUp">
                            <div className="property-box">
                                <div className="property-image">
                                    <div className="property-slider color-1">
                                        <a href="#!">
                                            <img src="../assets/images/property/31.jpg" className="bg-img" height="300" width="500" style={{width:'100%'}} alt=""/>
                                            
                                        </a>
                                   
                                    </div>
                                    <div className="labels-left">
                                        <div>
                                            <span className="label label-shadow">sale</span>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="property-details">
                                    <a href="single-property-8.html">
                                        <h3>Sneh Villa</h3>
                                    </a>
                                    <h6 className="color-1">₹15 Lakhs</h6>
                                    <p className="font-roboto">The most common and most absolute type of estate, the tenant enjoys the greatest discretion over the disposal of the property.</p>
                                    <ul>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt=""/>Bed : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt=""/>Baths : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt=""/>Sq Ft : 5000</li>
                                    </ul>
                                    <div className="property-btn d-flex">
                                        <span>December 1, 2022</span>
                                        <Link to="propertydetails/88" type="button"  className="btn btn-dashed btn-pill color-1">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 wow fadeInUp">
                            <div className="property-box">
                                <div className="property-image">
                                    <div className="property-slider color-1">
                                        <a href="#!">
                                            <img src="../assets/images/property/32.jpg" className="bg-img" height="300" width="500" style={{width:'100%'}} alt=""/>
                                            
                                        </a>
                                       
                                    </div>
                                    <div className="labels-left">
                                        <div>
                                            <span className="label label-shadow">sale</span>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="property-details">
                                    <a href="single-property-8.html">
                                        <h3>Imperial Blossom The Valley Of Gardens</h3>
                                    </a>
                                    <h6 className="color-1">₹15 Lakhs</h6>
                                    <p className="font-roboto">Real estate market in most countries are not as organize or efficient as markets for other, more liquid investment instruments.</p>
                                    <ul>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt=""/>Bed : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt=""/>Baths : 4</li>
                                        <li><img src="https://themes.pixelstrap.com/sheltos/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt=""/>Sq Ft : 5000</li>
                                    </ul>
                                    <div className="property-btn d-flex">
                                        <span>June 20, 2022</span>
                                        <Link to="propertydetails/90" type="button"  className="btn btn-dashed btn-pill color-1">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Sales */}
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
                                            <img src="../assets/images/about/16.jpeg" className="img-fluid bg-img" alt=""></img>
                                        </div>
                                        <div className="about-overlay"></div>
                                        <div className="overlay-content">
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="our-details">
                                        <a href="agent-profile.html"><h6 className="d-flex">Yagnik Savaliya<span className="label-heart color-1 ms-2"><i
                                                    className="fas fa-heart"></i></span></h6></a>
                                        <h3>Urban District Real.</h3>
                                        <span className="font-roboto"><i data-feather="mail" className="me-1"></i>John@inspirythemes.com</span>
                                        <p className="font-roboto">A real estate agent or broker is a person who represents sellers or buyers advised to consult a licensed.</p>
                                        <Link to="/agentdetails/132" className="btn btn-gradient btn-pill color-1 mt-2"><i data-feather="eye"></i>View Portfolio</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="about-content row">
                                <div className="col-xl-6">
                                    <div className="about-image">
                                        <div>
                                            <img src="../assets/images/about/11.jpeg" className="img-fluid bg-img" alt=""></img>
                                        </div>
                                        <div className="about-overlay"></div>
                                        <div className="overlay-content">
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="our-details">
                                        <a href="agent-profile.html"><h6 className="d-flex">Dixant Kanthariya <span className="label-heart color-1 ms-2"><i
                                                    className="fas fa-heart"></i></span></h6></a>
                                        <h3>Blue Cottage Estate</h3>
                                        <span className="font-roboto"><i data-feather="mail" className="me-1"></i>Leena@inspirythemes.com</span>
                                        <p className="font-roboto">They are responsible for managing employees and overseeing daily productivity.</p>
                                        <Link to="/agentdetails/133" className="btn btn-gradient btn-pill color-1 mt-2"><i data-feather="eye"></i>View Portfolio</Link>
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

<section className="small-section contact-2">
<div className="container">
    <div className="row gx-3">
    <div className="title-1">
                        <span className="label label-gradient color-1">Contact</span>
                        <h2>Contact Us</h2>
                        
                    </div>
        <div className="col-xl-6 col-lg-5">
            
            <div className="log-in px-xxl-5 px-lg-4">
                <div className="mb-4 text-start">
                    <h2>Let's Get In Touch</h2>
                </div>
                {successMessage!=="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                <form method='POST' onSubmit={handleForm}  className="row gx-3">
                                        <div className="form-group col-md-6">
                                        
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i data-feather="user"></i>
                                </div>
                            </div>
                            <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" placeholder="Enter your name" required=""></input>
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
                                    value={contact} onChange={(e) => setcontact(e.target.value)}
                                    className="form-control" 
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
                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" placeholder="email address" required=""></input>
                        </div>
                    </div>
                    <div className="form-group col-md-12">
                        <textarea value={feedback} onChange={(e) => setfeedback(e.target.value)} className="form-control" placeholder="Write Something Here" id="exampleFormControlTextarea1" rows="3">
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
    {/* happy */}
    </div>
    
  )
}

export default Homepages
