<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 


$file_id = $_POST["id"];

$result = mysqli_query($conn,"delete from plansfile where file_id='$file_id'");


if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>