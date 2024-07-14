<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
$id=$_POST["id"];


$result  = mysqli_query($conn,"select m.*,u.*,p.* from media as m left join property as p on p.property_id=m.property_id left join user as u on u.user_id=p.user_id where p.user_id='$id'") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>