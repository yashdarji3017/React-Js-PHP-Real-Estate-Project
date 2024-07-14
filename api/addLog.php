<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
// $post = file_get_contents('php://input');
// $post = json_decode($post);

$propertyinquiryid = $_POST ["propertyinquiryid"];
$status = $_POST ["status"];
$remark = $_POST ["remark"];
$log_date = $_POST ["log_date"];
  

 
 


 
$result = mysqli_query($conn,"insert into log (property_inquiry_id,status,remark,log_date) values ('$propertyinquiryid','$status','$remark','$log_date')") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>