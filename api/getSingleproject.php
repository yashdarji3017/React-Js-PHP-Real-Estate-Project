
<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
$id=$_POST["id"];

$result  = mysqli_query($conn,"select p.*,c.*,s.*,a.* from  project as p left join city as c on c.city_id=p.city_id left join state as s on s.state_id=c.state_id left join  architech as a on a.architech_id=p.architech_id where p.project_id='$id'") or die(mysqli_error($conn));
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response=$row;
}

echo json_encode($response);

?>