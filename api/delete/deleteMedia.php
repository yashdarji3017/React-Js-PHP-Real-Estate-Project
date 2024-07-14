<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';



$media_id = $_POST["id"];

$result = mysqli_query($conn,"delete from media where media_id='$media_id'");

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>