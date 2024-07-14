<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
$id=$_POST["id"];

$result  = mysqli_query($conn,"select u.*,pr.*,p.* from property_inquiry as p left join user as u on u.user_id=p.user_id left join property as pr on pr.property_id=p.property_id where pr.user_id='$id'") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>