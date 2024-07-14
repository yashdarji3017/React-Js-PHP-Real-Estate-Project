<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

 
$architech_id = $_POST["id"];
$result = mysqli_query($conn,"delete from architech where architech_id='$architech_id'");
 
if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>