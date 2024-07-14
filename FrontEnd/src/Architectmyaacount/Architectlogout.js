import React,{useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Architectside from './Architectside';


const Architectlogout = () => {
    const navigate = useNavigate();
    const deletedata = () =>{
        
            

             localStorage.clear();
             navigate("/");
             window.location.reload(false);
        

    }

    useEffect(()=>{
        window.scrollTo(0, 0);
     },[]);   
   
    return (
        <div>
            <section className="user-dashboard small-section">
            <div className="container">
                <div className="row">
                    <Architectside/>
                    <div className="col-lg-9">  
                    <div className="sidebar-user sticky-cls">
                    
                  
                                       
                                           

                                      
                                       
                                         
                                           
                                        
                    <div className="card-body report-table">
                   
                        <center style={{marginTop:'20%',paddingBlockEnd:'20%'}}>
                                            <h2>Are You Sure Log Out
                                           <br></br> <Link onClick={deletedata}>Click Here</Link>                                             
                                            
                                     
                                </h2>
                                </center>
                               
                             
                                           
                               
                                                                   </div>
                            </div>
                        </div>

                    </div>
                </div>
            
        </section>
        </div>




    )
}

export default Architectlogout
