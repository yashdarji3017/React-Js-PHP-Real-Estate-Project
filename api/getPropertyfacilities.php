<?php
include 'connection.php';
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$result  = mysqli_query($conn,"select p.*,c.*,a.* from  property_facility as p left join  property as c on c.property_id=p.property_id  left join  facilities as a on a.facilities_id=p.facilities_id") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>