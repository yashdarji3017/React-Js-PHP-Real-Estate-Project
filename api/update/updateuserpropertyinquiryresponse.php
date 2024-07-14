<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
 
$status = $_POST ["status   "];


$id = $_POST ["id"];


 
$result = mysqli_query($conn,"update property_inquiry set status='$status' where property_inquiry_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>