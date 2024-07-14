<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';

$id=$_POST["id"];

$result  = mysqli_query($conn,"select i.*,u.*,a.* from inquiry as i left join user as u on u.user_id=i.user_id  left join  architech as a on a.architech_id=i.architech_id where i.user_id='$id'") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>