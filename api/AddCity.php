<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
$cityName = $_POST ["cityName"];
$stateid = $_POST ["stateid"];

$result = mysqli_query($conn,"insert into city (city_name,state_id) values ('$cityName','$stateid')");

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>