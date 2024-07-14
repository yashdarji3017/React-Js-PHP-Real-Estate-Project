<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
 
$subject = $_POST ["subject"];
$contact = $_POST ["contact"];
$email = $_POST ["email"];
$inquiry_date = $_POST ["inquiry_date"];
$userid = $_POST ["userid"];
$architechid = $_POST ["architechid"];

$id = $_POST ["id"];


 
$result = mysqli_query($conn,"update inquiry set subject='$subject',contact='$contact',email_inquiry='$email',inquiry_date='$inquiry_date',user_id='$userid',architech_id='$architechid' where inquiry_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>