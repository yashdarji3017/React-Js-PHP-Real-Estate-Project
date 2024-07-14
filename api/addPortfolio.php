<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
 
 
$title = $_POST ["title"];
$description = $_POST ["description"];
$start_date = $_POST ["start_date"];
$end_date = $_POST ["end_date"];
$architechid = $_POST ["architechid"];
$categoriesid = $_POST ["categoriesid"];
$verify = $_POST ["verify"];
$active = $_POST ["active"];
 

 
$result = mysqli_query($conn,"insert into  portfolio (title_portfolio,description,start_date,end_date,architech_id,categories_id,verify_portfolio,active) values ('$title','$description','$start_date','$end_date','$architechid','$categoriesid','$verify','$active')") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>