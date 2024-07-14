<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$facilities_name = $_POST ["facilities_name"];
$id = $_POST ["id"];

$result = mysqli_query($conn,"update facilities  set facilities_name='$facilities_name' where facilities_id='$id'") or die(mysqli_error($conn));


if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>