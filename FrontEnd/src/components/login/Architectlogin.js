import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import configData from '../config.json';





const Architectlogin = () => {
    var [email, setemail] = useState("");
    var [password, setpassword] = useState("");
    var [emailErrro, setemailError] = useState("");
    var [passwordError, setpasswordError] = useState("");
    var [successMessage, setSuccessMessage] = useState("");
    var [formvalid, setformvalid] = useState(true);

    const [admin, setAdmin] = useState([]);

    const navigate = useNavigate();

    useEffect(() =>{
        window.scrollTo(0,0);
       
       
    },[]);


    const handleForm = (e) => {
        e.preventDefault();
        //API
        if (email == "") {
            setformvalid(false);
            setemailError("Please Enter Valid Email")
        }
        if (password == "") {
            setformvalid(false);
            setpasswordError("Please Enter Valid Password")
        }
        else {
            setformvalid(true)
            var postParams = new FormData();
            postParams.append("email", email);
            postParams.append("password", password);

            axios.post(configData.SERVER_URL + "architectlogin.php", postParams).then((response) => {
                if (response.status == 200) {
                    var result = response.data;
                    console.log(result);

                    if (result["status"] == "yes") {
                        localStorage.setItem("isclientlogin", "yes");
                        localStorage.setItem("userid", result["userdata"]["architech_id"]);
                        localStorage.setItem("type", "Architech");
                        localStorage.setItem("name", result["userdata"]["first_name"]+" "+  result["userdata"]["last_name"]);
                        navigate("/architechmyprofile");
                        window.location.reload(false);


                        // localStorage.clear();
                        // navigate("/");
                        // window.location.reload(false);
                    }
                    else {
                        alert("Please Enter Valid Email Or Password");
                    }
                }
            });
            //API

        }
        window.scrollTo(0, 0);
    };

    return (
        <>


            {/* <img src="./assets/images/svg/3.jpg" className="img-fluid" alt=""></img> */}



            <section className="small-section get-in-touch">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 contact-img">
                            <img src="../assets/images/inner-pages/1.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="log-in">
                                <div className="mb-4 text-start">
                                    <h2>Architect Log in</h2>
                                </div>
                                {successMessage != "" && <div className="alert alert-success">
                                    {successMessage}
                                </div>}
                                <form method='POST' onSubmit={handleForm} className="row gx-3">
                                    <div className="form-group col-md-12">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fa fa-user"></i>
                                                </div>
                                            </div>
                                            <input value={email} onChange={(e) => setemail(e.target.value)} type="text" autoComplete="off" className="form-control" placeholder='UserName'></input>
                                            {(formvalid === false && email == "") && (<><p className="error">{emailErrro}</p></>)}
                                        </div>
                                    </div>

                                    <div className="form-group col-md-12">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fa fa-key"></i>
                                                </div>
                                            </div>
                                            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" placeholder="Enter your password"></input>
                                            {(formvalid === false && password == "") && (<><p className="error">{passwordError}</p></>)}
                                        </div>
                                    </div>
                                    <label><Link to="/registration"><b>Create Account</b></Link></label>
                                    <label><Link to="/architectforgotpassword"><b>Forgot Password</b></Link></label>

                                    <div className="col-md-12 submit-btn">
                                        <button className="btn btn-gradient color-2 btn-pill" type="submit">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>








        </>
    )
}

export default Architectlogin;