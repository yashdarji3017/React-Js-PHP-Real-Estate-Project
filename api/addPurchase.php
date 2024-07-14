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


   
$result = mysqli_query($conn,"insert into  purchase (purchase_date,user_id,plan_id,status,pay,payment_mode,transaction_no) values ('$purchase_date','$userid','$planid', '$status','$pay','$payment','$transaction')") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>