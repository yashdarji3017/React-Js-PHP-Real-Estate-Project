<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
include 'connection.php';
$id=$_POST["id"];

$result  = mysqli_query($conn,"select p.*,c.*,a.first_name,a.last_name from  plansfile as p left join plans as c on c.plan_id=p.plan_id left join  architech as a on a.architech_id=c.architech_id where c.architech_id='$id'") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>