import React, { useState ,useEffect} from 'react'
import { Link ,useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json'; 
const Package = () => {
 const [allpackage,setpackage] = useState([]);
 const navigate = useNavigate();

        const getpackage = () => {
            var postParams = new FormData();
            postParams.append("id",setpackage);
            axios.post(configData.SERVER_URL+"getPackageFront.php",postParams).then((response)=>{
                 if(response.status == 200)
                {
                    setpackage(response.data);
                }
            });
        }
       
      useEffect(()=>{
        window.scrollTo(0,0)
            getpackage();
         },[]);    
        
        
         const [paymentId, setPaymentId] = useState('');
        

            const options1 = {
           key: 'rzp_test_qbPyndOjmZn0je',
           amount: 100 * 100,
           currency: 'INR',
           name: 'Alacto',
           description: 'Package Purchase Description',
           image: '../assets/png/2.png',
           handler: function (response) {
             setPaymentId(response.razorpay_payment_id);
         
             var postParams = new FormData();
             postParams.append("userid",localStorage.getItem("userid"));
             postParams.append("packageid",'31'); 
              
             postParams.append("transaction_no","123"); 
             postParams.append("purchase_date","2022-02-22"); 
             postParams.append("pay","yes"); 
             postParams.append("payment_id",response.razorpay_payment_id ); 
         
             axios.post(configData.SERVER_URL+"Purchasepackage.php", postParams).then((response)=>{
                 
             if(response.status == 200)
                 {
                     var result = response.data;
                     alert(result)
                      if(result=="Yes")
                      { 
                          alert("Package  Purchase successfully")
                          navigate("/thankyou");
                          window.scrollTo(0, 0);
                    
                      }
                      else
                      {
                          alert("Error");
                      }
                 }
             });
     
     
           },
           prefill: {
             email: 'customer@example.com',
             contact: '9999999999',
           },
           notes: {
             address: 'Razorpay Corporate Office',
           },
           theme: {
             color: '#F37254',
           },
         };
       
        

        const options2 = {
           key: 'rzp_test_qbPyndOjmZn0je',
           amount: 300 * 100,
           currency: 'INR',
           name: 'Alacto',
           description: 'Purchase Description',
           image: 'https://example.com/your_logo',
           handler: function (response) {
             setPaymentId(response.razorpay_payment_id);
         
             var postParams = new FormData();
             postParams.append("userid",localStorage.getItem("userid"));
             postParams.append("packageid",'32'); 
              
             postParams.append("transaction_no","123"); 
             postParams.append("purchase_date","2022-02-22"); 
             postParams.append("pay","yes"); 
             postParams.append("payment_id",response.razorpay_payment_id ); 
         
             axios.post(configData.SERVER_URL+"Purchasepackage.php", postParams).then((response)=>{
                 
             if(response.status == 200)
                 {
                     var result = response.data;
                     alert(result)
                      if(result=="Yes")
                      { 
                          alert("Package  Purchase successfully")
                          navigate("/thankyou");
                          window.scrollTo(0, 0);
                    
                      }
                      else
                      {
                          alert("Error");
                      }
                 }
             });
     
     
           },
           prefill: {
             email: 'customer@example.com',
             contact: '9999999999',
           },
           notes: {
             address: 'Razorpay Corporate Office',
           },
           theme: {
             color: '#F37254',
           },
         };
       
        

            const options3 = {
           key: 'rzp_test_qbPyndOjmZn0je',
           amount: 600 * 100,
           currency: 'INR',
           name: 'Alacto',
           description: 'Purchase Description',
           image: 'https://example.com/your_logo',
           handler: function (response) {
             setPaymentId(response.razorpay_payment_id);
         
             var postParams = new FormData();
             postParams.append("userid",localStorage.getItem("userid"));
             postParams.append("packageid",'33'); 
              
             postParams.append("transaction_no","123"); 
             postParams.append("purchase_date","2022-02-22"); 
             postParams.append("pay","yes"); 
             postParams.append("payment_id",response.razorpay_payment_id ); 
         
             axios.post(configData.SERVER_URL+"Purchasepackage.php", postParams).then((response)=>{
                 
             if(response.status == 200)
                 {
                     var result = response.data;
                     alert(result)
                      if(result=="Yes")
                      { 
                          alert("Package  Purchase successfully")
                          navigate("/thankyou");
                          window.scrollTo(0, 0);
                    
                      }
                      else
                      {
                          alert("Error");
                      }
                 }
             });
     
     
           },
           prefill: {
             email: 'customer@example.com',
             contact: '9999999999',
           },
           notes: {
             address: 'Razorpay Corporate Office',
           },
           theme: {
             color: '#F37254',
           },
         };
       
        

            const options4 = {
           key: 'rzp_test_qbPyndOjmZn0je',
           amount: 800 * 100,
           currency: 'INR',
           name: 'Alacto',
           description: 'Purchase Description',
           image: 'https://example.com/your_logo',
           handler: function (response) {
             setPaymentId(response.razorpay_payment_id);
         
             var postParams = new FormData();
             postParams.append("userid",localStorage.getItem("userid"));
             postParams.append("packageid",'34'); 
              
             postParams.append("transaction_no","123"); 
             postParams.append("purchase_date","2022-02-22"); 
             postParams.append("pay","yes"); 
             postParams.append("payment_id",response.razorpay_payment_id ); 
         
             axios.post(configData.SERVER_URL+"Purchasepackage.php", postParams).then((response)=>{
                 
             if(response.status == 200)
                 {
                     var result = response.data;
                     alert(result)
                      if(result=="Yes")
                      { 
                          alert("Package  Purchase successfully")
                          navigate("/thankyou");
                          window.scrollTo(0, 0);
                    
                      }
                      else
                      {
                          alert("Error");
                      }
                 }
             });
     
     
           },
           prefill: {
             email: 'customer@example.com',
             contact: '9999999999',
           },
           notes: {
             address: 'Razorpay Corporate Office',
           },
           theme: {
             color: '#F37254',
           },
         };
       
         
      
      const Packagepurchase = () =>{
     
       var pay = new window.Razorpay(options1);
       pay.open();
         //Payment
         // const rzp = new Razorpay(options);
         // rzp.open();
     
         //Payment
     
       };
       const Packagepurchase1 = () =>{
     
        var pay = new window.Razorpay(options2);
        pay.open();
          //Payment
          // const rzp = new Razorpay(options);
          // rzp.open();
      
          //Payment
      
        };
        const Packagepurchase2 = () =>{
     
            var pay = new window.Razorpay(options3);
            pay.open();
              //Payment
              // const rzp = new Razorpay(options);
              // rzp.open();
          
              //Payment
          
            };
            const Packagepurchase3 = () =>{
     
                var pay = new window.Razorpay(options4);
                pay.open();
                  //Payment
                  // const rzp = new Razorpay(options);
                  // rzp.open();
              
                  //Payment
              
                };

              

      
     
  return (
    <div>
      
      <section className="pricing-section slick-between slick-shadow pricing-inner">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="title-2">
                        <h2>pricing Plan</h2>
                    </div>
                  
                   <div className='col-lg-12'>
                   <div className="col-12 mt-1">
                            <div className="pricing-box">
                               
                                   
                                    <h3>Gold</h3>
                                    <p className="font-roboto">Elegant retreat in a quiet Coral Gables setting. This home provides opening…</p>
                               
                                <ul>
                                    <li>4 Property Post</li>
                                    
                                </ul>
                                <div className="price" onClick={Packagepurchase}>
                                    <span className="label label-light label-flat color-2">Month</span>
                                    <h4>₹100 </h4>
                                    <span className="light-text">Per</span>
                                </div>
                            </div>
                       </div>
                        
                            <div className="col-12 mt-2">
                            <div className="pricing-box">
                               
                                    <h3>Platinum</h3>
                                    <p className="font-roboto">This home provides opening. Elegant retreat in a quiet Coral Gables setting.</p>
                               
                                <ul>
                                <li>8 Property</li>
                                </ul>
                               
                                 <div className="price"
                                    onClick={Packagepurchase1}>
                                
                                  <span className="label label-light label-flat color-2">Month</span>
                               
                                  <h4>₹300</h4>
                                    <span className="light-text">Per</span>
                                </div>
                                
                               
                                
                       </div>
                       </div>
                       
                        <div className='col-12 mt-2'>
                            <div className="pricing-box">
                                
                                    <h3>Diamond</h3>
                                    <p className="font-roboto">Elegant retreat in a quiet Coral Gables setting. This home provides opening…</p>
                                
                                <ul>
                                <li>12 Property</li>
                                </ul>
                                <div className="price" onClick={Packagepurchase2}>
                                    <span className="label label-light label-flat color-2">Month</span>
                                    <h4>₹600</h4>
                                    <span className="light-text">Per</span>
                                </div>
                            </div>
                        </div>
                       
                        
                        <div className='col-12 mt-2'>
                            <div className="pricing-box">
                               
                                    <h3>Business</h3>
                                    <p className="font-roboto">This home provides opening. Elegant retreat in a quiet Coral Gables setting.</p>
                              
                                <ul>
                                <li>16 Property</li>
                                </ul>
                                <div className="price" onClick={Packagepurchase3}>
                                    <span className="label label-light label-flat color-2">Month</span>
                                    <h4>₹800.00</h4>
                                    <span className="light-text">Per</span>
                                </div>
                            </div>
                        </div>
                        
                        </div>   
                    </div>
                    </div>
                    </div>
                    
           
    </section>
    </div>
  )
}

export default Package
