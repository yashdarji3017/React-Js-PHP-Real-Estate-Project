<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
$id = $_POST["id"];

$result  = mysqli_query($conn,"select * from  media where property_id='$id'") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>