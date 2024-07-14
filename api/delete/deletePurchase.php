<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';



$purchase_id = $_POST["id"];


$result = mysqli_query($conn,"delete from purchase where purchase_id='$purchase_id'");

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>