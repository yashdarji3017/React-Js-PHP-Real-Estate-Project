import React, { useEffect,useState } from 'react'
import { Link,useParams} from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import Architectside from './Architectside';

const Editimage  = ({open}) => {
    var [title,settitle] = useState("");
    var [images_url,setimages_Url] = useState("");
     var [images_type,setimages_type] = useState("");
     var [portfolioid,setportfolioId] = useState("");
     var [photo_file,setphoto_file] = useState("");
     var [imagename,setimagename] = useState("");
     var [oldimage,setoldimage] = useState("");
     var [successMessage,setSuccessMessage] = useState("");
     var [titleError,settitleError] = useState("");
     var [portfolioidError,setportfolioIdError] = useState("");

     var [images_urlError,setimages_UrlError] = useState("");
     var [images_typeError,setimages_typeError] = useState("");
       var [formvalid,setformvalid] = useState(true);   
   


     const [allportfolio,setAllPortfolio] = useState([]);

    const getAllPortfolio = () => {
        axios.get(configData.SERVER_URL+"getPortfolio.php").then((response)=>{
            
            if(response.status==200)
            {
                setAllPortfolio(response.data);
            }
        });
    }
    useEffect(()=>{
        getAllPortfolio();
     },[]);  
     const handlePortfolioChange = (e) =>{
        var  portfolioid = e.target.value;
        setportfolioId(portfolioid);
     };

    const handleForm = (e) => {
        e.preventDefault();
        
        if(title=="")
        {
            setformvalid(false);
            settitleError("Please Enter Title")
        }
        if(images_url=="")
        {
            setformvalid(false);
            setimages_UrlError("Please Enter url")
        }
        if(images_type=="")
        {
            setformvalid(false);
            setimages_typeError("Please select type")
        }
        if(portfolioid=="")
        {
            setformvalid(false);
            setportfolioIdError("Please select portfolio")
        }
        if(title!=="" && images_url!=="" && images_type!=="" && portfolioid!=="" )
        {
     
       setformvalid(true)
        var postParams = new FormData();
        postParams.append("title",title);
        postParams.append("images_url",images_url);
        postParams.append("images_type",images_type);
        postParams.append("portfolioid",portfolioid);
        postParams.append("photo_file",photo_file);
        postParams.append("id",id);
        postParams.append("oldimage",oldimage);
         
        axios.post(configData.SERVER_URL+"update/updateimage.php",postParams).then((response)=>{
         if(response.status == 200)
            {
                var result = response.data;
                if(result=="Yes")
                { 
                    window.scrollTo(0, 0);
                    setSuccessMessage("Image Updated successfully!");
                   // alert("Data Inserted");
                }
                else
                {
                    alert("Error");
                }
            }
        });
        //API
    }
    else
        {
            window.scrollTo(0, 0);
        }
    }; 
        let {id} =useParams();

        useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getSingleimage.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                console.log(response.data)
                
                 settitle(result["title"]);
                setimages_Url(result["image_url"]);
                setimages_type(result["image_type"]);
                setportfolioId(result["portfolio_id"]);
                setimagename(result["photo_file"]);
                setoldimage(result["photo_file"]);
                window.scrollTo(0, 0);

            }
        });
    },[]);
 
 
    return (
        <>
             <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <Architectside/>
                    <div className="col-lg-9">  
                    <div className="sidebar-user sticky-cls">
                    
                  
                                       
                                           

                                      
                                       
                                         
                                           
                                        
                    <div className="card-body report-table">
                   
                        <center>
                                            <h2>Edit Image
                                            
                                        
                                     
                                </h2> </center>
                               
 
                                           
                                 
                                    <div className="">
                                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="">
                                    <div className=" pb-0">
                                        <div className="row"><div className="card-body admin-form">
                                            {successMessage!="" && <div className="alert alert-success">
                                                    {successMessage}
                                                </div>}
                                           
                                            <form method='POST' onSubmit={handleForm}  className="row gx-3">
                                                    <div className="form-group col-md-4 col-sm-6">
                                                        <label>Title </label>
                                                        <input type="text" className="form-control" value={ title} onChange={(e) => settitle(e.target.value)} placeholder="enter the title"></input>
                                                        {(formvalid===false && title=="")&&(<><p className="error">{titleError}</p></>)}

                                                    </div>
                                                     
                                                    <div className="form-group col-md-4 col-sm-6">
                                                        <label>Portfolio Name</label>
                                                        <div>
                                                       <select value={portfolioid} onChange={handlePortfolioChange} className="form-control"  >
                                                            <option>Please Enter Portfolio </option>
                                                            {
                                            allportfolio.map((row,index)=>{
                                                return(  
                                                    <option value={row.portfolio_id}>{row.title_portfolio} </option>
                                                 );
                                            })
                                        }
                                                        </select>
                                                    </div>                                                           </div>
                                                    <div className="form-group col-md-4 col-sm-6">
                                                        <label>Images Url</label>
                                                        <input type="text" className="form-control"  value={images_url} onChange={(e) => setimages_Url(e.target.value)} placeholder="enter the image url"></input>
                                                        {(formvalid===false && images_url=="")&&(<><p className="error">{images_urlError}</p></>)}

                                                    </div>
                                                    <div className="form-group col-md-12 col-sm-6">
                                                <label  >Images type  </label>
                                                <select value={images_type} className="form-control" onChange={(e)=>setimages_type(e.target.value)}>
                                                    <option >Please Select Type</option>
                                                    <option value="Image">Image</option>
                                                    <option value="PDF">PDF</option>
                                                    <option value="Video">Video</option>

                                                </select>
                                                {(formvalid===false && images_type=="")&&(<><p className="error">{images_typeError}</p></>)}

                                            </div>
                                                    <div className="form-group col-sm-12">
                                                        <label>Images </label>
                                                        <img src={configData.PORTFOLIO_IMAGE + imagename} width="100"/>

                                                        <input type="file" className="form-control" onChange={(e) => setphoto_file(e.target.files[0])}></input>
                                                    </div>
                                              
                                                <div className="form-btn">
                                                    <button type="submit" className="btn btn-pill btn-gradient color-4">Update</button>
                                                    <button type="button" className="btn btn-pill btn-dashed color-4">Cancel</button>
                                                </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default Editimage;