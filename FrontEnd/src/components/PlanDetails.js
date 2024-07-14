import React, { useState ,useEffect} from 'react'
import { Link ,useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';
import configData from '../config.json'; 


 const PlanDetails = () => {
    const navigate = useNavigate();
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
  var [plan_id,setplan_id] = useState("");

   

   
  let {id} =useParams();
  useEffect(() =>{
      var postParams = new FormData();
      postParams.append("id",id);

      axios.post(configData.SERVER_URL+"getSingleplans.php",postParams).then((response)=>{
          if(response.status == 200)
          {
              var result = response.data;
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
              setplan_id(result["plan_id"]);
              window.scrollTo(0, 0);


           }
      });


  },[]);


    const [paymentId, setPaymentId] = useState('');
  
    const options = {
      key: 'rzp_test_qbPyndOjmZn0je',
      amount: update_price * 100,
      currency: 'INR',
      name: 'My Store',
      description: 'Purchase Description',
      image: '../assets/png/2.png',
      handler: function (response) {
        setPaymentId(response.razorpay_payment_id);


        var postParams = new FormData();
        postParams.append("user_id",localStorage.getItem("userid"));
        postParams.append("plan_id",id); 
        postParams.append("status","complete"); 
        postParams.append("payment_mode","online"); 
        postParams.append("transaction_no","123"); 
        postParams.append("purchase_date","2022-02-22"); 
        postParams.append("pay","yes"); 
        postParams.append("payment_id",response.razorpay_payment_id ); 
    
        axios.post(configData.SERVER_URL+"purchaseplan.php", postParams).then((response)=>{
            
        if(response.status == 200)
            {
                var result = response.data;
                 if(result=="Yes")
                 { 
                     alert("Plan Purchase successfully")
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
  
    
  const PurchasePlan = () =>{

  var pay = new window.Razorpay(options);
  pay.open();
    //Payment
    // const rzp = new Razorpay(options);
    // rzp.open();

    //Payment

  };


  
 
   return (

   <>
 
       <section className="single-property mt-0 pt-0 ">
       <div className="container">
       
    <div className="row ratio_55">
        <div className="col-xl-12 col-lg-8">
            <div className="description-section tab-description">
                <div className="description-details">
                    <div className="image_section row zoom-gallery-multiple gx-3">
                        
                        <div className="col-sm-4">
                            <div className="row">
                               
                               
                            </div>
                        </div>
                    </div>
                    <div className="desc-box">
                        <ul className="nav nav-tabs line-tab" id="top-tab" role="tablist">
                            <li className="nav-item"><label className="nav-link active"
                                    >Plan Details</label></li>
                           
                        </ul>
                        <div className=" tab-content" id="top-tabContent">
                            <div className="tab-pane fade show active about page-section" id="about">
                                   
                                
                                <div className="row">
                                    <div className="col-md-6 col-xl-6">
                                        <ul className="property-list-details">
                                            <li><span>Plan Title:</span>{plan_title}</li>
                                            <li><span>Categories Name:</span>{categoriesid}</li>
                                            <li><span>Architect Name:</span>{architechid} {achitechname}</li>
                                            <li><span>Price:</span>₹{update_price}</li>
                                            <li><span>Visits:</span>{visits}</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-xl-6">
                                    <div className="agent-image">
                                    <a target="_blank" className="attach-file" href={configData.PLAN_IMAGE + imagename}>

                                    <img target="_blank" className="attach-file mt-2" src={configData.PLAN_IMAGE + imagename} height="200" width="250"></img>
                                    </a>
        </div>
                                    </div>

                                     <br></br> 
                                     <br></br>
                                    <div className="col-md-6 col-xl-12">
                                    <br></br>
                                    {
                                    localStorage.getItem("isclientlogin") && 
                                    <a className="btn btn-gradient color-1 btn-block btn-pill" onClick={PurchasePlan}>
                                    Purchase Plan</a>
                                        }</div>
                                        
                                   
                                  
                                </div>
                                <br></br>
                                <h4 className="content-title mt-4">Attachments</h4>
                                <i className="far fa-file-pdf fa-xl"></i>&nbsp;
                                    <a target="_blank" className="attach-file" href={configData.PLAN_IMAGES + imagenames}>Download</a>
                                      <br></br>               
                                    <div className="row">
                                    <div className="col-md-4 col-lg-4">
                                    <br></br>
                                        <h4>Specification</h4>
                                        <p class="font-roboto">{specification}</p>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                        <br></br>
                                        <h4>Description</h4>
                                        <p class="font-roboto">{description}</p>
                                        </div>
                                        <div className="col-md-4 col-xl-4">
                                        <br></br>
                                        <h4>Term & Condition</h4>
                                        <p class="font-roboto">{term_condition}</p>
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
 
 export default PlanDetails
 