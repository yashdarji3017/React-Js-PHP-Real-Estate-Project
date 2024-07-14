import React, { useState ,useEffect} from 'react'
import { Link ,useParams} from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json';
import Architectside from './Architectside';

const Viewarchitectcustomerinquiry  = () => {
    var [subject,setSubject] = useState("");
    var [contact,setContact] = useState("");
    var [email,setEmail] = useState("");
    var [inquiry_date,setInquiry_date] = useState("");
    var [userid,setuserId] = useState("");
    var [username,setusername] = useState("");
    var [architechid,setarchitechId] = useState("");
    var [architechiname,setarchitechname] = useState("");

    
    let {id} =useParams();
    useEffect(() =>{
        var postParams = new FormData();
        postParams.append("id",id);

        axios.post(configData.SERVER_URL+"getSingleinquiry.php",postParams).then((response)=>{
            if(response.status == 200)
            {
                var result = response.data;
                setSubject(result["subject"]);
                setContact(result["contact"]);
                setEmail(result["email_inquiry"]);
                setInquiry_date(result["inquiry_date"]);
                setuserId(result["firstname"]);
                setusername(result["lastname"]);
                setarchitechId(result["first_name"]);
                setarchitechname(result["last_name"]);
                window.scrollTo(0, 0);
            
                //setmedia_file(result["media_file"]);
            }
        });


    })
    return (
<>

<section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <Architectside/>
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
                                                        <h2>View Customer Inquiry Details</h2></center>
                                                    </div>
                <div className="container-fluid">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="">
                                      <div className="">
                                      <table className="table table-bordered" cellPadding="20">
                                                <tr>
                                                    <th>Subject</th>
                                                     <td>{subject}</td>
                                                </tr>
                                                <tr>
                                                    <th>Contact</th>
                                                    <td>{contact}</td>
                                                 </tr>
                                                  <tr>
                                                    <th>Email</th>
                                                    <td>{email}</td>
                                                </tr>
                                                <tr>
                                                    <th>Inquiry Date</th>
                                                    <td>{inquiry_date}</td>
                                                </tr>
                                                <tr>
                                                    <th>User Name</th>
                                                    <td>{userid} {username}</td>
                                                 </tr>
                                                 <tr>
                                                    <th>Architech Name</th>
                                                    <td>{architechid} {architechiname}</td>
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

export default Viewarchitectcustomerinquiry;