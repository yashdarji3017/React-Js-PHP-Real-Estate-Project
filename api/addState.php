<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';



$stateName = $_POST ["stateName"];

$result = mysqli_query($conn,"insert into state (state_name) values ('$stateName')");

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>