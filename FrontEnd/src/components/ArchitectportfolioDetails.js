import React, { useState ,useEffect} from 'react'
import { Link ,useParams} from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
const Architectportfoliodetails = () => {
    var [title,setTitle] = useState("");
    var [description,setDescription] = useState("");
     
    var [start_date,setStart_date] = useState("");
    var [end_date,setEnd_date] =useState("");
    var [architechid,setarchitechId] = useState("");
    var [categoriesid,setcategoriesId] = useState("");
    var [verify,setVerify] = useState("");
    var [active,setActive] =useState("");
    var [architechname,setarchitechname] = useState("");
     
   
   
    

    let {id} = useParams();

     useEffect(()=>{
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getSingleportfolio.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                console.log(response.data)
                setTitle(result["title_portfolio"]);
                setDescription(result["description"]);
                setStart_date(result["start_date"]);
                setEnd_date(result["end_date"]);
                setVerify(result["verify_portfolio"]);
                setActive(result["active"]);
                setarchitechId(result["first_name"]);
                setcategoriesId(result["categories_name"]);
                setarchitechname(result["last_name"]);
                gettAllImage();
                window.scrollTo(0,0)
             }
        });
    },[]);

    const [allimage,setAllImage] = useState([]);
   
    
            const gettAllImage = () => {
              var postParams = new FormData();
             postParams.append("id",id);
           
             axios.post(configData.SERVER_URL+"getporfoliowiseimage.php",postParams).then((response)=>{
            if(response.status==200)
            {
                setAllImage(response.data);
            }
        });
    }
        
    
  return (
    <div>
       <section className="ratio_40">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="blog-single-detail theme-card">
                        <h1>Architect Portfolio</h1>
                        <div className="blog-title">
                            <ul className="post-detail">
                                <li>{start_date}</li>
                                <li>{architechid} {architechname}</li>
                              
                            </ul>
                            <h3>{title}</h3>
                        </div>
                        <div className="details-property">
                            <div className="row">
                                <h3>Portfolio Description :</h3>
                                <p className="col-xl-12">{description}</p>
                                   
                            </div>
                        </div>


                            <h3>Portfolio Image:</h3>
                            <div className="image_section row zoom-gallery-multiple gx-3 mt-3">                
   
                            { 
         allimage.map((row,index)=>{
    return(
            <div className="col-sm-6 mt-3">    
                                        <div className="row">
                                        <div className="col-lg-12">
                                            <div className="img-property">        
            <a target="_blank" href={configData.PORTFOLIO_IMAGE + row.photo_file}>
                            <img target="_blank" src={configData.PORTFOLIO_IMAGE + row.photo_file}  className="img-fluid bg-img" alt=""/>
                            </a>
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
                </div>
          
    </section>
    </div>
  )
}

export default Architectportfoliodetails
