<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
$package_title = $_POST ["package_title"];
$defination = $_POST ["defination"];
$price = $_POST ["price"];
$facilities = $_POST ["facilities"];
$total_property = $_POST ["total_property"];
$package_date = $_POST ["package_date"];
$active = $_POST ["active"];
$id = $_POST["id"];

 
 
$result = mysqli_query($conn,"update package set package_title='$package_title',defination='$defination',price='$price',facilities='$facilities',total_property='$total_property',package_date='$package_date',active='$active' where package_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>