<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$image_id = $_POST["id"];

$result = mysqli_query($conn,"delete from images where image_id='$image_id'");

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>