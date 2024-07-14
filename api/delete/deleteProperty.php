<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$property_id =  $_POST["id"];
 


 
$result = mysqli_query($conn,"delete from property where property_id='$property_id'");
 

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>