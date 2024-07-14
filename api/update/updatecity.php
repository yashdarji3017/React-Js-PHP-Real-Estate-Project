<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

 
$cityName = $_POST ["cityName"];
$stateid = $_POST ["stateid"];
$id = $_POST ["id"];

$result = mysqli_query($conn,"update city set city_name='$cityName',state_id='$stateid' where city_id='$id'")or die(mysqli_error($conn));


if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>
