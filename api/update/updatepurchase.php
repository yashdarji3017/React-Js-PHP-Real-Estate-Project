<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$purchase_date = $_POST ["purchase_date"];
$userid = $_POST ["userid"];
$planid = $_POST ["planid"];
$status = $_POST ["status"];
$pay = $_POST ["pay"];
$payment = $_POST ["payment"];
$transaction = $_POST ["transaction"];
$id = $_POST["id"];


   
$result = mysqli_query($conn,"update purchase set purchase_date='$purchase_date',user_id='$userid',plan_id='$planid',status='$status',pay='$pay',payment_mode='$payment',transaction_no='$transaction' where purchase_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>