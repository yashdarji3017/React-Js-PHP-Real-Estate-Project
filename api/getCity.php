<?php
include 'connection.php';
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$result  = mysqli_query($conn,"select c.*,s.* from city as c left join state as s on s.state_id=c.state_id") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>