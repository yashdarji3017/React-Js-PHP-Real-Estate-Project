<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$cityId = $_POST["id"];

$result = mysqli_query($conn,"delete from city where city_id='$cityId'");

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>