<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 


$package_id =  $_POST["id"];

$result = mysqli_query($conn,"delete from package where package_id='$package_id'");

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>