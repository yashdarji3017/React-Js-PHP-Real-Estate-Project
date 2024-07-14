<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$categories_id = $_POST["id"];

$result = mysqli_query($conn,"delete from categories where categories_id='$categories_id'");

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>