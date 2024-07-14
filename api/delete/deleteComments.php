<?php
header('Access-Control-Allow-Origin: *');
include './connection.php';
 

$comment_id =  $_POST["id"];
 


 
$result = mysqli_query($conn,"delete from  comments where comment_id='$comment_id'");
 

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>