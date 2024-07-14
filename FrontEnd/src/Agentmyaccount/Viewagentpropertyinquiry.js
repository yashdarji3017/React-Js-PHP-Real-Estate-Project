import React, { useState ,useEffect} from 'react'
import { Link ,useParams} from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import AgentSide from './AgentSide';

const Viewagenpropertytinquiry  = () => {
    var [userid,setuserId] = useState("");
    var [username,setusername] = useState("");

    var [propertyid,setpropertyid] = useState("");
  var [inquiry,setinquiry] = useState("");
  var [contact,setcontact] = useState("");
  var [status,setstatus] = useState("");
  var [inquiry_date,setinquiry_date] = useState("");

        
        let {id} =useParams();
    useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);
        

        axios.post(configData.SERVER_URL+"getSinglepropertyinquiry.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                setuserId(result["firstname"]);
                setusername(result["lastname"]);
                setpropertyid(result["property_title"]);
                setinquiry(result["inquiry_text"]);
                setcontact(result["contact"]);
                setstatus(result["status"]);
                setinquiry_date(result["inquiry_date"]);
                window.scrollTo(0, 0);


            }


        }); 
    }) 
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
                                                        <h2>View Your Property Inquiry</h2></center>
                                                    </div>
                <div className="container-fluid">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="">
                                      <div className="">
                                      <table className="table table-bordered" cellPadding="20">
                                                <tr>
                                                    <th>User Name</th>
                                                     <td>{userid} {username}</td>
                                                </tr>
                                                <tr>
                                                    <th>Property Name</th>
                                                    <td>{propertyid}</td>
                                                 </tr>
                                                 <tr>
                                                    <th>inquiry</th>
                                                     <td>{inquiry}</td>
                                                </tr>
                                                <tr>
                                                    <th>Contact</th>
                                                    <td>{contact}</td>
                                                 </tr>
                                                 
                                                <tr>
                                                    <th>Inquiry Date</th>
                                                    <td>{inquiry_date}</td>
                                                 </tr>
                                                  
                                                             

                                                
                                            </table>
                                          
                                         
                                           
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

export default Viewagenpropertytinquiry;