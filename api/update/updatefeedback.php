<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';

$id = $_POST["id"];

 
$name = $_POST ["name"];
$contact = $_POST ["contact"];
$email = $_POST ["email"];
$feedback = $_POST ["feedback"];
$feedback_date = $_POST ["feedback_date"];

$result = mysqli_query($conn,"update feedback set name='$name',contact='$contact',email='$email',feedback='$feedback',feedback_date='$feedback_date' where feedback _id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>