<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
include 'connection.php';

$utype=$_POST["utype"];
$result  = mysqli_query($conn,"select * from user where type='$utype'and verify='Yes'") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>