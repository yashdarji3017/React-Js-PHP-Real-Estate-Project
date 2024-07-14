<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
include 'connection.php';
$result  = mysqli_query($conn,"select p.*,c.*,a.first_name,a.last_name from  plans as p left join  categories as c on c.categories_id=p.categories_id  left join  architech as a on a.architech_id=p.architech_id where approve='Yes'") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>