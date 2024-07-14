<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';


 
  
 
$comments = $_POST["comments"];
$comment_date = $_POST["comment_date"];
$type = $_POST["type"];
$architechid = $_POST["architechid"];
$userid = $_POST["userid"];

$id = $_POST["id"];

 
$result = mysqli_query($conn,"update comments set comments='$comments',comment_date='$comment_date',user_type='$type',user_id='$userid',architech_id='$architechid' where comment_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>