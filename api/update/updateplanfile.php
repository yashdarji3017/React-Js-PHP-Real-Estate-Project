<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$file_title = $_POST["file_title"];
$file_url = $_POST["file_url"];
$active = $_POST["active"];
$free = $_POST["free"];
 
 
$id = $_POST["id"];



 
$result = mysqli_query($conn,"update plansfile set file_title='$file_title',file_url='$file_url',active='$active',free='$free' where file_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>