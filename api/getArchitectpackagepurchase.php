<?php
header('Access-Control-Allow-Origin: *');

include 'connection.php';
$id=$_POST["id"];

$result  = mysqli_query($conn,"select p.*,u.*,a.* from packagepurchase as p left join architech as u on u.architech_id=p.architech_id left join package as a on a.package_id=u.package_id where p.architech_id='$id'") or die(mysqli_error($conn));
 
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>