<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

 
$email = $_POST ["email"];
$password = $_POST ["password"];

$result = mysqli_query($conn,"select * from admin where email='$email' and password='$password'");
$response=array();
if(mysqli_num_rows($result)<=0)
{
    $response["status"]="no";
}
else
{
    $response["status"]="yes";
}
echo json_encode($response);
?>
