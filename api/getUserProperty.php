<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';

$id=$_POST["id"];
//$result  = mysqli_query($conn,"select * from  property where user_id='$id'") or die(mysqli_error($conn));
$result  = mysqli_query($conn,"select p.*,u.*,ca.* from  property p left join user as u on u.user_id=p.user_id left join  categories as ca on ca.categories_id=p.categories_id where p.user_id='$id'") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>