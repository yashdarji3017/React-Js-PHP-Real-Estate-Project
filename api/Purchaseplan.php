<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
require_once('vendor/autoload.php');
use Razorpay\Api\Api;

//use Razorpay\Api\Api;
$api_key="rzp_test_qbPyndOjmZn0je";
$api_secret="IYU6i0IEtnzNh81bM834fEUk";
$api = new Api($api_key, $api_secret);

$payment_id = $_POST['payment_id'];

$payment = $api->payment->fetch($payment_id);

if ($payment->status == 'authorized') {
   

    //insert
    $purchase_date = $_POST ["purchase_date"];
    $userid = $_POST ["user_id"];
    $planid = $_POST ["plan_id"];
    $status = $_POST ["status"];
    $pay = $_POST ["pay"];
    $payment = $_POST ["payment_mode"];
    $transaction = $_POST ["transaction_no"];
    
    
       
    $result = mysqli_query($conn,"insert into  purchase (purchase_date,user_id,plan_id,status,pay,payment_mode,transaction_no) values ('$purchase_date','$userid','$planid', '$status','$pay','$payment','$transaction')") or die(mysqli_error($conn));
    
    //insert
    echo "Yes";
} else {
    // payment failed
    echo "No";
}

?>