<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$facilities_id =  $_POST["id"];

$result = mysqli_query($conn,"delete from facilities where facilities_id='$facilities_id'");

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>