<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
$id=$_POST["id"];

$result  = mysqli_query($conn,"select c.*,u.*,a.* from  comments as c left join  architech as a on a.architech_id=c.architech_id left join user as u on u.user_id=c.user_id where c.user_id='$id'") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>