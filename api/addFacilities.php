<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$facilities_name = $_POST["facilities_name"];
$propertyid = $_POST["propertyid"];




$result = mysqli_query($conn,"insert into facilities (facilities_name ) values ('$facilities_name')") or die(mysqli_error($conn));

$propertyid=mysqli_insert_id($conn);

if($propertyid=="propertyid"){

    mysql_query($conn,"insert into property_facility (property_id) values ('$propertyid')");
}

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>