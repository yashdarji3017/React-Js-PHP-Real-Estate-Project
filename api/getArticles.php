<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
include 'connection.php';
$result  = mysqli_query($conn,"select c.*,u.*,a.* from  articles as c left join  architech as a on a.architech_id=c.architech_id left join user as u on u.user_id=c.user_id") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>