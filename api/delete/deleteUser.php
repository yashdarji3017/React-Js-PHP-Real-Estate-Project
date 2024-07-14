<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
$post = file_get_contents('php://input');
$post = json_decode($post);


$user_id = $_POST["id"];

$result = mysqli_query($conn,"delete from user where user_id='$user_id'");

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>