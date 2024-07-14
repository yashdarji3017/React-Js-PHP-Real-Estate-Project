<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
$article_id =  $_POST["id"];
 


 
$result = mysqli_query($conn,"delete from  articles where article_id='$article_id'");
 

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>