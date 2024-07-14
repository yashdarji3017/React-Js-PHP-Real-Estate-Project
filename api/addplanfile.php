<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$file_title = $_POST["file_title"];
$file_url = $_POST["file_url"];
$active = $_POST["active"];
$free = $_POST["free"];
$planid = $_POST["planid"];
 
 
 


 
$result = mysqli_query($conn,"insert into plansfile (plan_id,file_title,file_url,active,free) values ('$planid','$file_title','$file_url','$active','$free')") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>