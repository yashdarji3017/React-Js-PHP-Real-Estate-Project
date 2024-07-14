<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
include 'connection.php';
$id=$_POST["id"];

$result  = mysqli_query($conn,"select l.*,p.* from log as l left join property_inquiry as p on p.property_inquiry_id=l.property_inquiry_id where l.log_id='$id'") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response=$row;
}

echo json_encode($response);

?>