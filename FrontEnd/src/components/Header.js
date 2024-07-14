import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const  Header = ({click,open}) => {
    
    
  return (
    <>
        <header className="header-9 inner-page light-header shadow-cls fixed-header"  >
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="menu">
                        <div className="brand-logo"style={{
                                                                        height:'10%',
                                                                        width:'20%',
                                                                        marginEnd:'5%'     

                                                                    }}>
                            <Link to="">
                            <img src="../assets/png/2.png" alt="" class="img-fluid for-light"  width='100' height='100' style={{marginLeft:"10%"}}></img>
                            </Link>
                        </div>

                        <nav>
                            <div class="main-navbar">
                                <div id="mainnav">
                                    <div class="toggle-nav" onClick={click}><i class="fa fa-bars sidebar-bar"></i></div>
                                    <ul class={"nav-menu"+ (open ? ' open':'') }>
                                        <li class="back-btn" onClick={click}>
                                            <div class={"mobile-back text-end"+ (open ? ' ':'open') } >
                                                <span>Back</span>
                                                <i aria-hidden="true" class="fa fa-angle-right ps-2"></i>
                                            </div>
                                        </li>
                                        <li className="dropdown">
                                            <a href="/"  className="nav-link menu-title" style={{color:'black'}}>Home</a>
                                          
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/architect" className="nav-link menu-title" style={{color:'black'}}>Architect</Link>
                                           
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/property" className="nav-link menu-title" style={{color:'black'}}>property</Link>
                                           
                                        </li>
                                        <li className="dropdown">
                                            <Link to="/plans" className="nav-link menu-title" style={{color:'black'}}>Plans</Link>
                                            
                                        </li>
                                       
                                        <li className="dropdown">
                                            <Link to="/agentlist" className="nav-link menu-title" style={{color:'black'}}>Agents</Link>
                                       
                                        </li>
                                        {!localStorage.getItem("isclientlogin") && <li className="dropdown">
                                            <Link to="/login" className="nav-link menu-title" style={{color:'black'}}>Login</Link>
                                        </li> }
                                        
                                        {!localStorage.getItem("isclientlogin") &&  <li className="dropdown">
                                            <Link to="/registration" className="nav-link menu-title" style={{color:'black'}}>Registration</Link>
                                       
                                        </li> }
                                        
                                        { localStorage.getItem("isclientlogin") && localStorage.getItem("type")=="User" && <li className="dropdown">
                                            <Link to="/usermyprofile" className="nav-link menu-title">My Account</Link>
                                           
                                        </li> }
                                        { localStorage.getItem("isclientlogin") && localStorage.getItem("type")=="Architech" && <li className="dropdown">
                                        <Link to="/architechmyprofile" className="nav-link menu-title">My Account</Link>

                                        </li> }
                                        { localStorage.getItem("isclientlogin") && localStorage.getItem("type")=="Agent" && <li className="dropdown">
                                            <Link to="/agentmyprofile" className="nav-link menu-title">My Account</Link>
                                            
                                        </li> }
                                      
                                    </ul>
                                </div>
                            </div>
                        </nav>
                     
                    
                    </div>
                    
                </div>
                
            </div>
        </div>
    </header>



   
    

    
    </>
  )
}

export default Header