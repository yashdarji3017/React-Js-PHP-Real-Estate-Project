<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
 

$propertyid = $_POST ["propertyid"];
$facilitiesid = $_POST ["facilitiesid"];
 


 
$result = mysqli_query($conn,"insert into  property_facility(property_id,facilities_id ) values('$propertyid','$facilitiesid')") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>