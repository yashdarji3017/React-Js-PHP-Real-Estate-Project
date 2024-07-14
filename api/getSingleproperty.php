<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
$id=$_POST["id"];

$result  = mysqli_query($conn,"select p.*,u.*,c.*,s.*,ca.*,pr.*,s.state_id as sstate_id,p.city_id as ccity_id from  property p left join city as c on c.city_id=p.city_id left join state as s on s.state_id=c.state_id left join user as u on u.user_id=p.user_id left join  categories as ca on ca.categories_id=p.categories_id left join project as pr on pr.project_id=p.project_id where p.property_id='$id'") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response=$row;
}

echo json_encode($response);

?>