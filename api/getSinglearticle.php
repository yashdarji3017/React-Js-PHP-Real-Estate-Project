<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
include 'connection.php';
$id=$_POST["id"];

$result  = mysqli_query($conn,"select a.*,u.*,ar.* from articles as a left join  architech as ar on ar.architech_id=a.architech_id left join user as u on u.user_id=a.user_id where a.article_id='$id'") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response=$row;
}

echo json_encode($response);

?>