import React, { useState ,useEffect} from 'react'
import { Link ,useParams} from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import AgentSide from './AgentSide';

const Viewagentplan  = () => {
    var [plan_title,setplan_title] = useState("");
    var [visits,setvisits] = useState("");
    var [specification,setspecification] = useState("");
    var [price,setprice] = useState("");
    var [update_price,setupdate_price] = useState("");
    var [term_condition,setterm_condition] = useState("");
    var [description,setdescription] = useState("");
    var [add_date,setadd_date] = useState("");
    var [address,setaddress] = useState("");
    var [pincode,setpincode] = useState("");
    var [architechid,setarchitechId] = useState("");
    var [categoriesid,setcategoriesId] = useState("");
    var [citiesId,setcitiesId] = useState("");  
    var [stateId,setstateId] = useState("");
    var [active,setactive] = useState("");
    var [approve,setapprove] =useState("");
    var [photo_file,setphoto_file] =useState("");
    var [plan_file,setplan_file] =useState("");
    var [achitechname,setarchitechname] =useState("");
    var [imagename,setimagename] = useState("");
    var [imagenames,setimagenames] = useState("");
    var [extra,setextra] = useState("");

    const [plansfile,setPlansFile] = useState([]);
    
    const getPlansFile = () => {
        var postParams = new FormData();
        postParams.append("id",id);
        axios.post(configData.SERVER_URL+"getplanfileswisepurchase.php",postParams).then((response)=>{
             if(response.status==200)
            {
                setPlansFile(response.data);
            }
        });
    }

     
    
   let {id} =useParams();
    useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getSingleplans.php",postParams).then((response)=>{
            if(response.status == 200)
           
            {
                var result = response.data;
                
                console.log(response.data)

                setplan_title(result["plan_title"]);
                setvisits(result["visits"]);
                setspecification(result["specification"]);
                setprice(result["price"]);
                setupdate_price(result["update_price"]);
                setterm_condition(result["term_conditon"]);
                setdescription(result["description"]);
                 setaddress(result["address"]);
                setadd_date(result["add_date"]);
                setpincode(result["pincode"]);
                setarchitechId(result["first_name"]);
                setarchitechname(result["last_name"]);
                setcategoriesId(result["categories_name"]);
                setcitiesId(result["city_name"]);
                setstateId(result["state_name"]);
                setactive(result["active"]);
                setapprove(result["approve"]);
                setimagename(result["photo_file"]);
                setimagenames(result["plan_file"]);
                setextra(result["file_url"]);
                getPlansFile();
                window.scrollTo(0, 0);


             }
        });


    },[]);



    
      
    return (
<>

<section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <AgentSide/>
                    <div className="col-lg-9">
                        <div className="dashboard-content">
                            <div className="my-profile" id="profile">
                                <div className="profile-info">
                                   
                                    <div className="common-card">
                                        <div className="row">
                                            <div className="col-xxl-12">
                                                <div className="information-detail">
                                                <div className="common-header">
                                                    <center>
                                                        <h2>View Your Plan Purchase Details</h2>
                                                        <span><b>Scroll End Get Extra Plan Files</b></span>
                                                        </center>  </div>
                <div className="container-fluid">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="">
                                      <div className="">
                                            <table className="table table-bordered" cellPadding="20">
                                                <tr>
                                                    <th>Plan Title</th>
                                                    <td>{plan_title}</td>
                                                </tr>
                                                <tr>
                                                    <th>Visits</th>
                                                    <td>{visits}</td>
                                                    </tr>
                                                    <tr>
                                                    <th>Description</th>
                                                    <td>{description}</td>
                                                    </tr>
                                                    <tr>   
                                                    <th>Specification</th>
                                                    <td>{specification}</td>
                                                    </tr>
                                                    <tr>
                                                     <th>Update Price</th>
                                                     <td>{update_price}</td>
                                                     </tr>
                                                     <tr></tr>
                                                    <tr> 
                                                    <th>Term Condition</th>
                                                    <td>{term_condition}</td>
                                                    </tr>
                                                    <tr>
                                                      <th>Adress</th>
                                                      <td>{address}</td>
                                                      </tr>
                                                      <tr>
                                                     <th>Pincode</th>
                                                     <td>{pincode}</td>
                                                     </tr>
                                                     
                                                      
                                                    
                                                     <tr>
                                                     <th>City Name</th>
                                                     <td>{citiesId}</td>
                                                     </tr>
                                                     <tr> 
                                                     <th>State Name</th>
                                                     <td>{stateId}</td>
                                                     </tr>
                                                    


                                                     
                                                       
                                                     
                                                     <tr>
                                                     <th>Profile Photo</th>
                                                     <td><img src={configData.PLAN_IMAGE + imagename} width="100"/></td>
                                                     </tr> 
                                                     <tr>
                                                     <th>File</th>
                                                     <td><a target="_blank" href={configData.PLAN_IMAGES + imagenames}>Download</a></td>
                                                     </tr>
                                                      
                                             <br></br>

                                             


                                        
                                            </table>
                                            <div className="common-header">
                                                <center>
                                                        <h5>Plans Extra Files</h5>
                                                        </center>
                                                        <center>
                                                        <div className="table-responsive transactions-table">
                                        <table className="table table-bordernone m-0">
                                            
                                            <thead>
                                                
                                                <tr>
                                                    <th className="align-middle">Files </th>
                                                    <th className="align-middle">Files Title</th>
                                                    <th className="align-middle">Files Url</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                            plansfile.map((row,index)=>{
                                                return(
                                                <tr>

                                                            <td>{index+1}</td>
                                                             
                                                            <td>{row.file_title	}</td>
                                                            <td><a target="_blank" href={row.file_url}  className="center" alt="" >{row.file_url}</a></td>
                                                            
                                                             
                                                     
                                                    <td>
                                                        
                                                    </td>

                                                </tr>
                                                 );
                                                })
                                            }

                                            </tbody>
                                        </table>
                                    </div>
                                    </center>
                                                    </div>
                                         
                                           
                                         </div>
                                     
                                 <br></br>
                                      
                                         </div>
                                         </div>

                                           <br></br>   
                                            
                                    </div>
                                </div>
                                  </div>
                              </div>
                              <br></br>
            </div>
        </div>
        <br></br>

        </div>
        <br></br>

        </div>
        </div>
        <br></br>

        </div>
         

        </div>
        </div>
        <br></br>

        </section>
</>

    )
}

export default Viewagentplan;