<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
include 'connection.php';
$id=$_POST["id"];

 

$result  = mysqli_query($conn,"select u.*,c.*,s.* from user as u left join city as c on c.city_id=u.city_id left join state as s on s.state_id=c.state_id where u.user_id='$id'") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response=$row;
}

echo json_encode($response);

?>