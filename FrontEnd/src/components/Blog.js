import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import { Link } from 'react-router-dom'
import configData from '../config.json';


const Blog = () => {
    const [allarticles,setAllArticles] = useState([]);

   

    const getAllArtilces = () => {
        axios.get(configData.SERVER_URL+"getArticles.php").then((response)=>{
            console.log(response)
            if(response.status==200)
            {
                setAllArticles(response.data);
            }
        });
    }
    useEffect(() =>{
        
        getAllArtilces();
        window.scroll(0,0);
    }
   

,[]);
  return (
    <div>
      {/* Blog */}

      <section className="property-section">
        <div className="container">
            <div className="row ratio_55">
                <div className="col">
                    <div className="title-1">
                        <span className="label label-gradient color-1">Sale</span>
                        <h2>Latest Blog</h2>
                    
                    </div>
                   
                    <div className="property-2 row column-space color-1">
                    {
                                            allarticles.map((row,index)=>{
                                                return(
                        <div className="col-xl-4 col-md-6 wow fadeInUp">
                            <div className="property-box">
                                <div className="property-image">
                                    <div className="property-slider color-1">
                                        <a href="#!">
                                        <img src={configData.ARTICLE_IMAGE + row.photo_article} height="200" style={{width:"100%"}}></img>

                                        </a>
                                    </div>
                                    <div className="labels-left">
                                        <div>
                                        </div>
                                    </div>
                                   
                                </div>

                                <div className="property-details" style={{height:"100%"}}>
                                    
                                        <h3>  {row.title}</h3>
                                 
                                    <p className="font-roboto">{row.description}</p>
                                   
                                    <div className="property-btn d-flex">
                                        <span>{row.add_date}</span>
                                        <Link to={"/blogdetails/"+row.article_id}  onclick="document.location='single-property-8.html'" className="btn btn-dashed btn-pill color-1">Details</Link>
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


    {/* <section class="ratio2_1 simple-blog">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title-3">
                       
                                     <span className="label label-gradient color-1"> Latest Blog</span>
                        <p class="font-roboto">Elegant retreat in Coral Gables setting. This home provides entertaining spaces with
                            kitchen opening</p>
                    </div>
                     
                                <div class="blog-2">
                              
                    <div className="col-xl-3 col-md-3 wow fadeInUp">
                            <div class="blog-wrap">
                                <div class="blog-image">
                                    <div>
                                        <img src="../assets/images/blog/1.jpg" class="bg-img img-fluid" width="700" height="500 " alt=""></img>
                                    </div>
                                   
                                </div>
                                <div class="blog-details">
                                    <h3>
                                        <a href="blog-detail-left-sidebar.html">
                                      
                                        </a>
                                    </h3>
                                    <p class="font-roboto">Residences can be classified by and how they are connected to neighbouring residences and land. 
                                        Different types of housing tenure can be used for the same physical type.</p>
                                    <a href="/blog">read more</a>
                                </div>
                            </div>
                        </div>
                       
                       
                        
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </section> */}
    {/* Blog */}
    </div>
  )
}

export default Blog
