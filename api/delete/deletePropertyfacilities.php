<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';

$Propertyfacility =  $_POST["id"];

$result = mysqli_query($conn,"delete from property_facility where property_facility_id='$Propertyfacility'");

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>