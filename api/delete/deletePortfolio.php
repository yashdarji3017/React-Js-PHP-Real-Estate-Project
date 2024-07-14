<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$portfolio_id = $_POST["id"];

$result = mysqli_query($conn,"delete from portfolio where portfolio_id='$portfolio_id'");

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>