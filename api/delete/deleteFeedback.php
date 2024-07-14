<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$feedback_id =  $_POST["id"];

$result = mysqli_query($conn,"delete from feedback where feedback_id='$feedback_id'");


if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>