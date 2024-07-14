<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';

$transaction_no = $_POST ["transaction_no"];
$purchase_date = $_POST ["purchase_date"];
$packageid = $_POST ["packageid"];
$pay = $_POST ["pay"];
$userid = $_POST ["userid"];
  
 
$result = mysqli_query($conn,"insert into packagepurchase (transaction_no,purchase_date,pay,user_id,package_id) values ('$transaction_no','$purchase_date','$pay','$userid','$packageid')") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>