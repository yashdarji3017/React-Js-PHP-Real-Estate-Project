<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$plan_id =$_POST["id"];


$result = mysqli_query($conn,"delete from plans where plan_id='$plan_id'");

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>