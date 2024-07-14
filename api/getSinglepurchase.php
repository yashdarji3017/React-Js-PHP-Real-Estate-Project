<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
include 'connection.php';
$id=$_POST["id"];

$result  = mysqli_query($conn,"select p.*,u.*,a.* from purchase as p left join user as u on u.user_id=p.user_id left join plans as a on a.plan_id=p.plan_id where purchase_id='$id'") or die(mysqli_error($conn));
 
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response=$row;
}

echo json_encode($response);

?>