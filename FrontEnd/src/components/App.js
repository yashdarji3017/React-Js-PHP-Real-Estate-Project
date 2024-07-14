import React, { useState } from "react";
import Header from "./Header";
 
import Footer from "./Footer"
import Architect from "./Architect"
import { Routes, Route } from 'react-router-dom';

import ArchitectDetails from "./ArchitectDetails";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import Property from "./Property";
import PropertyDetails from "./PropertyDetails";
import Plans from "./Plans";
import PlansDetails from "./PlanDetails";
import Regarchitect from "./Regarchitect";
import Addproperty from "./Addproperty";
import Login from "./login/Login";
import Registration from "./login/Registration";

import MyUserprofile from "../Usermyaccount/Myprofile";


import MyAgnetprofile from "../Agentmyaccount/Myprofile";


import MyArchitectprofile from "../Architectmyaacount/Myprofile";
import Userchangepassword from "../Usermyaccount/Userchangepassword";
import Userproperty from "../Usermyaccount/Userproperty";
import Usercomments from "../Usermyaccount/Usercomment";
import Homepage from "./HomePage/Homepage";
import Userpackage from "../Usermyaccount/Userpackage";
import Userplan from "../Usermyaccount/Userplan";
import Userpropertyinquiry from "../Usermyaccount/Userpropertyinqiury";
import Side from "../Usermyaccount/Side";
import Architectlogin from "./login/Architectlogin";
import Package from "./Package";
import AgentSide from "../Agentmyaccount/AgentSide";
import Agentchangepassword from "../Agentmyaccount/Agentchangepassword";
import Agentcomments from "../Agentmyaccount/Agentcomment";
import Agentinquiry from "../Agentmyaccount/Agentinquiry";
import Agentpackage from "../Agentmyaccount/Agentpackage";
import Agentproperty from "../Agentmyaccount/Agentproperty";
import Agentpropertyinquiry from "../Agentmyaccount/Agentpropertyinqiury";
import Agentplan from "../Agentmyaccount/Agentplan";
import Userarchitectinquiry from "../Usermyaccount/Userarchitectinquiry";
import Userinquiry from "../Usermyaccount/Userinquiry";
import Userpropertymedia from "../Usermyaccount/Userpropertymedia";
import Addpropertymedia from "../Usermyaccount/Addpropertymedia";
import Editprofile from "../Usermyaccount/Editprofile";
import Logout from "../Usermyaccount/Logout";
import Thankyou from "./Thankyou";
import Agentpropertymedia from "../Agentmyaccount/Agentpropertymedia";
import Agentarchitectinquiry from "../Agentmyaccount/Agentarchitectinquiry";
import Agentlogout from "../Agentmyaccount/Agentlogout";
import Agentarticles from "../Agentmyaccount/Agentarticles";
import Agentaddarticles from "../Agentmyaccount/Agentaddarticles";
import Addagentpropertymedia from "../Agentmyaccount/Addagentpropertymedia";
import Architectside from "../Architectmyaacount/Architectside";
import Editarchitectprofile from "../Architectmyaacount/Editarchitectprofile";
import Otp from "./UserOtp";
import Viewuserplan from "../Usermyaccount/Viewuserplan";
import Architectlogout from "../Architectmyaacount/Architectlogout";
import Architectchangepassword from "../Architectmyaacount/Architectchangepassword";
import Architectpackage from "../Architectmyaacount/Architectpackage";
import Useraddpropertyfacilities from "../Usermyaccount/Useraddpropertyfacilities";
import Addpropertyfacilities from "../Usermyaccount/Addpropertyfacilities";
import Architectportfolio from "../Architectmyaacount/Architectportfolio";
import Architectplans from "../Architectmyaacount/Architectplan";
import Architectplansfile from "../Architectmyaacount/Architectplanfile";
import Architectplanspurchase from "../Architectmyaacount/Architectplanpurchase";
import Architectproject from "../Architectmyaacount/Architectproject";
import Architectarticles from "../Architectmyaacount/Architectarticles";
import Architectcustomerinquiry from "../Architectmyaacount/Architectcustomerinquiry";
import Addarchitectportfolio from "../Architectmyaacount/Addarchitectportfolio";
import Editarchitectportfolio from "../Architectmyaacount/Editarchitectportfolio";
import Viewarchitectportfolio from "../Architectmyaacount/Viewarchitectportfolio";
import Addarchitectplans from "../Architectmyaacount/Addarchitectplans";
import Editarchitectplans from "../Architectmyaacount/Editarchitectplans";
import Viewarchitectplans from "../Architectmyaacount/Viewarchitectplans";
import Addarchitectplansfile from "../Architectmyaacount/Addarchitectplansfile";
import Editarchitectplansfile from "../Architectmyaacount/Editarchitectplansfile";
import Viewarchitectplansfile from "../Architectmyaacount/Viewarchitectplansfile";
import Viewarchitecplanspurchase from "../Architectmyaacount/Viewarchitectplanspurchase";
import Addarchitectproject from "../Architectmyaacount/Addarchitectproject";
import Editarchitectproject from "../Architectmyaacount/Editarchitectproject";
import Viewarchitectproject from "../Architectmyaacount/Viewarchitectproject";
import Addarchitectarticles from "../Architectmyaacount/Addarchitectarticles";
import Viewarchitectarticles from "../Architectmyaacount/Viewarchitectarticles.js";
import Editarchitectarticles from "../Architectmyaacount/Editarchitectarticles";
import ForgotPassword from "./login/ForgotPassword";
import Editproperty from "../Usermyaccount/Editproperty";

import Viewagentplan from "../Agentmyaccount/Viewagentplan";
import Viewuserproperty from "../Usermyaccount/Viewuserproperty";
import Editagentproperty from "../Agentmyaccount/Editproperty";
import Viewagentproperty from "../Agentmyaccount/Viewagentproperty";
import Editagentmedia from "../Agentmyaccount/Editagentmedia";
import Viewagentmedia from "../Agentmyaccount/Viewagentmedia";
import Editusermedia from "../Usermyaccount/Editusermedia";
import Viewusermedia from "../Usermyaccount/Viewusermedia";
import Agentpropertyfacilities from "../Agentmyaccount/Agentpropertyfacilities";
import Addagenttpropertyfacilities from "../Agentmyaccount/Addagentpropertyfacilities";
import Editagentpropertyfacilities from "../Agentmyaccount/Editagentpropertyfacilities";
import Viewagentpropertyfacilities from "../Agentmyaccount/Viewagentpropertyfacilities";
import Edituserpropertyfacilities from "../Usermyaccount/EditUserpropertyfacilities";
import Viewuserpropertyfacilities from "../Usermyaccount/ViewUserpropertyfacilities";
import Viewagentcomments from "../Agentmyaccount/Viewagentcomments";
import Viewusercomments from "../Usermyaccount/Viewusercomments";
import Viewuserpackage from "../Usermyaccount/Viewuserpackage";
import Viewagentpackage from "../Agentmyaccount/Viewagentpackage";
import Editagentarticles from "../Agentmyaccount/Editagentarticles";
import Viewagentarticles from "../Agentmyaccount/Viewagentarticles";
import Viewagentarchitectinquiry from "../Agentmyaccount/Viewagentarchitectinquiry";
import Viewuserarchitectinquiry from "../Usermyaccount/Viewagentarchitectinquiry";
import Viewagentinquiry from "../Agentmyaccount/Viewagentinquiry";
import Viewuserinquiry from "../Usermyaccount/Viewuserinquiry";
import Viewuserpropertyinquiry from "../Usermyaccount/Viewuserpropertyinquiry";
import Viewagenpropertytinquiry from "../Agentmyaccount/Viewagentpropertyinquiry";
import Viewarchitectcustomerinquiry from "../Architectmyaacount/Viewcustomerinquiry";
import Agentlist from "./Agentlist";
import AgentDetails from "./Agentdetails";
import Homepages from "./HomePage/Homepages";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Blog from "./Blog";
import Backsidebar from "./Backsidebar";
import ArchitectOtp from "./Architechcheckotp";
import ArchitectForgotPassword from "./login/Architectforgotpassword";
import Editagentprofile from "../Agentmyaccount/Editprofile";
import Architectportfolioimage from "../Architectmyaacount/Architectportfolioimage";
import Addportfolioimage from "../Architectmyaacount/Addportfolioimage";
import Editimage from "../Architectmyaacount/Editimage";
import Viewimage from "../Architectmyaacount/viewimage";
import Searchproperty from "./Searchproperty";
import Architectportfoliodetails from "./ArchitectportfolioDetails";
import Projectdetails from "./ProjectDetails";
import Blogdetails from "./BlogDetails";
import Edituserpropertyinquiryresponse from "../Usermyaccount/EditUserpropertyinquirystatus";
import EditAgentpropertyinquiryresponse from "../Agentmyaccount/EditAgentpropertyinquirystatus";
  
function App(){
        const[open,setOpen] = useState(false);
 const handleClick =()=>{
  setOpen(!open);
 };
    return(
        <>

        <Header click={handleClick} open={open}/>      
        <Backsidebar click={handleClick} open={open}/>
        <Routes>
        
        <Route  path='/' element={<Homepages />}/>
        <Route  path='/aboutus' element={<AboutUs />}/>
        <Route  path='/contactus' element={<ContactUs />}/>
        <Route  path='/blog' element={<Blog />}/>

        <Route path='/architect' element={<Architect />} />
        <Route path='/addarchitect' element={<Regarchitect />} />
        <Route path='/architectdetails/:id' element={<ArchitectDetails/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/projects' element={<Projects/>} />

        <Route path='/property' element={<Property/>} />
        <Route path='/addproperty' element={<Addproperty />} />

        <Route path='/propertydetails/:id' element={<PropertyDetails/>} />
        <Route path='/plans' element={<Plans/>} />
        <Route path='/plandetails/:id' element={<PlansDetails/>} />
        {localStorage.getItem("isclientlogin") &&<Route path='/package' element={<Package/>} />}

        
        <Route path='/login' element={<Login/>} />
        <Route path='/architectlogin' element={<Architectlogin/>} />

        <Route path='/registration' element={<Registration/>} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
        <Route path='/architectforgotpassword' element={<ArchitectForgotPassword/>} />

        <Route path='/otp' element={<Otp/>} />
        <Route path='/architectotp' element={<ArchitectOtp/>} />

        <Route path='/thankyou' element={<Thankyou/>} />
        <Route path='/agentlist' element={<Agentlist/>} />
        <Route path='/agentdetails/:id' element={<AgentDetails/>} />
        <Route path='/searchproperty/:name' element={<Searchproperty/>} />
        <Route path='/searchproperty/:name' element={<Searchproperty/>} />
        <Route path='/architectprojectdetails/:id' element={<Projectdetails/>} />
        <Route path='/blogdetails/:id' element={<Blogdetails/>} />
        <Route path='/architectportfoliodetails/:id' element={<Architectportfoliodetails/>} />

 

        <Route  element={<Side/>} />

        <Route path='/usermyprofile' element={<MyUserprofile/>} />
        <Route path='/userchangepassword' element={<Userchangepassword/>} />
        <Route path='/userproperty' element={<Userproperty/>} />
        <Route path='/editproperty/:id' element={<Editproperty/>} />
        <Route path='/viewauproperty/:id' element={<Viewuserproperty/>} />

        <Route path='/usercomments' element={<Usercomments/>} />
        <Route path='/viewusercomments/:id' element={<Viewusercomments/>} />
       
        <Route path='/userpackage' element={<Userpackage/>} />
        <Route path='/viewuserpackage/:id' element={<Viewuserpackage/>} />

        <Route path='/userarchitectinquiry' element={<Userarchitectinquiry/>} />
        <Route path='/viewuserarchitectinquiry/:id' element={<Viewuserarchitectinquiry/>} />

        <Route path='/userplan' element={<Userplan/>} />
        <Route path='/viewuserplanpurchase/:id' element={<Viewuserplan/>} />

        <Route path='/userpropertyinquiry' element={<Userpropertyinquiry/>} />
        <Route path='/viewuserpropertyinquiry/:id' element={<Viewuserpropertyinquiry/>} />

        <Route path='/userinquiry' element={<Userinquiry/>} />
        <Route path='/viewuserinquiry/:id' element={<Viewuserinquiry/>} />

        <Route path='/userpropertymedia' element={<Userpropertymedia/>} />
        <Route path='/addpropertymedia' element={<Addpropertymedia/>} />
        <Route path='/edituserpropertymedia/:id' element={<Editusermedia/>} />
        <Route path='/viewuserpropertymedia/:id' element={<Viewusermedia/>} />

        <Route path='/edituserprofile/:id' element={<Editprofile/>} />
        <Route path='/userlogout' element={<Logout/>} />


        <Route path='/userpropertyfacilitites' element={<Useraddpropertyfacilities/>} />
        <Route path='/addpropertyfacilities' element={<Addpropertyfacilities/>} />
        <Route path='/edituserpropertyfacilities/:id' element={<Edituserpropertyfacilities/>} />
        <Route path='/viewuserpropertyfacilities/:id' element={<Viewuserpropertyfacilities/>} />
        <Route path='/edituserpropertyinquiryresponse/:id' element={<Edituserpropertyinquiryresponse/>} />

       
        <Route  element={<AgentSide/>} />

        <Route path='/agentmyprofile' element={<MyAgnetprofile/>} />
        <Route path='/agenteditprofile/:id' element={<Editagentprofile/>} />
        

        <Route path='/agentchangepassword' element={<Agentchangepassword/>} />
        <Route path='/agentcomment' element={<Agentcomments/>} />
        <Route path='/viewagentcomments/:id' element={<Viewagentcomments/>} />

        <Route path='/agentinquiry' element={<Agentinquiry/>} />
        <Route path='/viewagentinquiry/:id' element={<Viewagentinquiry/>} />

        <Route path='/agentpackage' element={<Agentpackage/>} />
        <Route path='/viewagentpackage/:id' element={<Viewagentpackage/>} />

        <Route path='/agentproperty' element={<Agentproperty/>} />
        <Route path='/editagentproperty/:id' element={<Editagentproperty/>} />
        <Route path='/viewagentproperty/:id' element={<Viewagentproperty/>} />

        <Route path='/agentpropertymedia' element={<Agentpropertymedia/>} />
        <Route path='/addagentpropertymedia' element={<Addagentpropertymedia/>} />
        <Route path='/editagentpropertymedia/:id' element={<Editagentmedia/>} />
        <Route path='/viewagentpropertymedia/:id' element={<Viewagentmedia/>} />

        <Route path='/agentpropertyfacilities' element={<Agentpropertyfacilities/>} />
        <Route path='/addagentpropertyfacilities' element={<Addagenttpropertyfacilities/>} />
        <Route path='/editagentpropertyfacilities/:id' element={<Editagentpropertyfacilities/>} />
        <Route path='/viewagentpropertyfacilities/:id' element={<Viewagentpropertyfacilities/>} />



        <Route path='/agentpropertyinquiry' element={<Agentpropertyinquiry/>} />
        <Route path='/viewagentpropertyinquiry/:id' element={<Viewagenpropertytinquiry/>} />
        <Route path='/editagentpropertyinquiry/:id' element={<EditAgentpropertyinquiryresponse/>} />

        <Route path='/agentarchitectinquiry' element={<Agentarchitectinquiry/>} />
        <Route path='/viewagentarchitectinquiry/:id' element={<Viewagentarchitectinquiry/>} />

        <Route path='/agentplan' element={<Agentplan/>} />
        <Route path='/viewagentplan/:id' element={<Viewagentplan/>} />


        <Route path='/agentarticles' element={<Agentarticles/>} />
        <Route path='/agentaddarticles' element={<Agentaddarticles/>} />
        <Route path='/editagentarticles/:id' element={<Editagentarticles/>} />
        <Route path='/viewagentarticles/:id' element={<Viewagentarticles/>} />

        <Route path='/agentlogout' element={<Agentlogout/>} />

       
        
        <Route element={<Architectside/>} />
        {localStorage.getItem("isclientlogin") && <Route path='/architechmyprofile' element={<MyArchitectprofile/>} /> }
        <Route path='/editarchitectprofile/:id' element={<Editarchitectprofile/>} />
        <Route path='/architectlogout' element={<Architectlogout/>} />
        <Route path='/architectchangepassword' element={<Architectchangepassword/>} />
        <Route path='/architectpackage' element={<Architectpackage/>} />
        <Route path='/architectportfolio' element={<Architectportfolio/>} />
        <Route path='/architectplans' element={<Architectplans/>} />
        <Route path='/architectplansfiles' element={<Architectplansfile/>} />
        <Route path='/architectplanpurchase' element={<Architectplanspurchase/>} />
        <Route path='/architectproject' element={<Architectproject/>} />
        <Route path='/architectarticles' element={<Architectarticles/>} />
        <Route path='/addarchitectarticles' element={<Addarchitectarticles/>} />
        <Route path='/viewarchitectarticles/:id' element={<Viewarchitectarticles/>} />
        <Route path='/editarchitectarticles/:id' element={<Editarchitectarticles/>} />

        <Route path='/architectcustomerinquiry' element={<Architectcustomerinquiry/>} />
        <Route path='/viewarchitectcustomerinquiry/:id' element={<Viewarchitectcustomerinquiry/>} />

        <Route path='/architectportfolioimage' element={<Architectportfolioimage/>} />
        <Route path='/addarchitectportfolioimage' element={<Addportfolioimage/>} />
        <Route path='/editimage/:id' element={<Editimage/>} />
        <Route path='/viewimage/:id' element={<Viewimage/>} />

        <Route path='/addarchitectportfolio' element={<Addarchitectportfolio/>} />
        <Route path='/editarchitectportfolio/:id' element={<Editarchitectportfolio/>} />
        <Route path='/viewarchitectportfolio/:id' element={<Viewarchitectportfolio/>} />
        <Route path='/addarchitectplans' element={<Addarchitectplans/>} />
        <Route path='/editarchitectplans/:id' element={<Editarchitectplans/>} />
        <Route path='/viewarchitectplans/:id' element={<Viewarchitectplans/>} />
        <Route path='/addarchitectplansfile' element={<Addarchitectplansfile/>} />
        <Route path='/editarchitectplansfile/:id' element={<Editarchitectplansfile/>} />
        <Route path='/viewarchitectplansfile/:id' element={<Viewarchitectplansfile/>} />
        <Route path='/viewplanpurchase/:id' element={<Viewarchitecplanspurchase/>} />
        <Route path='/addarchitectproject' element={<Addarchitectproject/>} />
        <Route path='/editarchitectproject/:id' element={<Editarchitectproject/>} />
        <Route path='/viewarchitectproject/:id' element={<Viewarchitectproject/>} />
       
       
      
        </Routes>
        
       
        <Footer/>
            











          
         
        
        </>
        )
        
}

export default  App;