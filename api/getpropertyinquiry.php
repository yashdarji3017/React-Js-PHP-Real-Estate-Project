<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
include 'connection.php';

$result  = mysqli_query($conn,"select u.*,pr.*,p.* from property_inquiry as p left join user as u on u.user_id=p.user_id left join property as pr on pr.property_id=p.property_id") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>