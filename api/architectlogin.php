<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

 
$email = $_POST ["email"];
$password = $_POST ["password"];

$result = mysqli_query($conn,"select * from architech where email='$email' and password='$password' and verify='yes'");
$response=array();
if(mysqli_num_rows($result)<=0)
{
    $response["status"]="no";
}
else
{
    $response["status"]="yes";
    $result = mysqli_query($conn,"select * from architech where email='$email' and password='$password' and verify='yes'");
    $row=mysqli_fetch_assoc($result);
    $response["userdata"]=$row;
}
echo json_encode($response);
?>
