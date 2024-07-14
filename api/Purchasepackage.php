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
    
    $transaction_no = $_POST ["transaction_no"];
    $purchase_date = $_POST ["purchase_date"];
    $packageid = $_POST ["packageid"];
    $pay = $_POST ["pay"];
    $userid = $_POST ["userid"];
       
    $result = mysqli_query($conn,"insert into packagepurchase (transaction_no,purchase_date,pay,user_id,package_id) values ('$transaction_no','$purchase_date','$pay','$userid','$packageid')") or die(mysqli_error($conn));
    
    //insert
    echo "Yes";
} else {
    // payment failed
    echo "No";
}

?>