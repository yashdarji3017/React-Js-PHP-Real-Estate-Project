<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';

 
  
 
$comments = $_POST["comments"];
$comment_date = $_POST["comment_date"];
$type = $_POST ["type"];
$userid = $_POST ["userid"];
$architechid = $_POST ["architechid"];

 
$result = mysqli_query($conn,"insert into comments (comments,user_type,user_id,architech_id) values ('$comments','$type','$userid','$architechid')") or die(mysqli_error($conn));

 

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>