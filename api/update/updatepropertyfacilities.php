<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
 

$propertyid = $_POST ["propertyid"];
$facilitiesid = $_POST ["facilitiesid"];
 
$id = $_POST["id"];


 
$result = mysqli_query($conn,"update  property_facility set property_id='$propertyid',facilities_id='$facilitiesid' where property_facility_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>