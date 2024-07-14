<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
$post = file_get_contents('php://input');
$post = json_decode($post);

 
$name = $_POST ["name"];
$contact = $_POST ["contact"];
$email = $_POST ["email"];
$feedback = $_POST ["feedback"];
$feedback_date = $_POST ["feedback_date"];

$result = mysqli_query($conn,"insert into feedback(name,contact,email,feedback) values ('$name','$contact','$email','$feedback')") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>