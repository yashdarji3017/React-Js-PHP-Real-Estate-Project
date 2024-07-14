<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';

 
  
 
$pid = $_POST["pid"];
$status = $_POST["status"];

 
$result = mysqli_query($conn,"update property set approve='$status' where property_id='$pid'") or die(mysqli_error($conn));

 

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>