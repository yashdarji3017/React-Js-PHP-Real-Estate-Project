<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
 
 
$title = $_POST ["title"];
$description = $_POST ["description"];
$start_date = $_POST ["start_date"];
$end_date = $_POST ["end_date"];
$architechid = $_POST ["user_id"];
$categoriesid = $_POST ["categoriesid"];
$verify = $_POST ["verify"];
$active = $_POST ["active"];
$id = $_POST ["id"];
 

 
$result = mysqli_query($conn,"update portfolio set title_portfolio='$title',description='$description',start_date='$start_date',end_date='$end_date',architech_id='$architechid',categories_id='$categoriesid',verify_portfolio='$verify',active='$active' where portfolio_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>