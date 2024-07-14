<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
$result  = mysqli_query($conn,"select * from  property") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>