<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';

$name=$_POST["name"];

// $result  = mysqli_query($conn,"select * from  property where property_title like '%$name%'") or die(mysqli_error($conn));
$result  = mysqli_query($conn,"select a.*,c.* from property as a left join city as c on c.city_id=a.city_id where a.property_title like '%$name%' or c.city_name like '%$name%'") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>