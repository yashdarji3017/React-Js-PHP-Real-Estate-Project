<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
$package_title = $_POST ["package_title"];
$defination = $_POST ["defination"];
$price = $_POST ["price"];
$facilities = $_POST ["facilities"];
$total_property = $_POST ["total_property"];
$package_date = $_POST ["package_date"];
$active = $_POST ["acitve"];


 
$result = mysqli_query($conn,"insert into package (package_title,defination,price,facilities,total_property,package_date,active) values ('$package_title','$defination','$price','$facilities','$total_property','$package_date','$active')") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>