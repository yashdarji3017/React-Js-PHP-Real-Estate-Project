<?php
include 'connection.php';
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
$id = $_POST ["id"];

$stateName = $_POST ["stateName"];
 
$result  = mysqli_query($conn,"update state set state_name='$stateName' where  state_id='$id'") or die(mysqli_error($conn));
 
if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}

?>