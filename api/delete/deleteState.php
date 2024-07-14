<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';

$stateId = $_POST["id"];
$result = mysqli_query($conn,"delete from state where state_id='$stateId'");
 
if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>