<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 


$inquiry_id =$_POST["id"];

$result = mysqli_query($conn,"delete from  inquiry where inquiry_id='$inquiry_id'");

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>