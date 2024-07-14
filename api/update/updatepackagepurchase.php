<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

  
 


 
 $start_date = $_POST ["start_date"];
 $end_date = $_POST ["end_date"];
 $transaction_no = $_POST ["transaction_no"];
 $purchase_date = $_POST ["purchase_date"];
 $pay = $_POST ["pay"];
 $userid = $_POST ["userid"];
 $planid = $_POST ["planid"];
 $id = $_POST["id"];

 
$result = mysqli_query($conn,"update packagepurchase set start_date='$start_date',end_date='$end_date',transaction_no='$transaction_no',purchase_date='$purchase_date',pay='$pay',user_id='$userid',plan_id='$planid' where packagepurchase_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>