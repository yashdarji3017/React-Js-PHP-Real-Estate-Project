<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';


$project_id = $_POST["id"];


$result = mysqli_query($conn,"delete from project where project_id='$project_id'");

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>