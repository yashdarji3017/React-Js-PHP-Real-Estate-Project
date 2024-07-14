<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
$cat  = $_POST["cat"];
if($cat=="")
{
    $result  = mysqli_query($conn,"select * from  property") or die(mysqli_error($conn));

}
else
{
    $result  = mysqli_query($conn,"select * from  property where categories_id='$cat'") or die(mysqli_error($conn));

}
$response=array();

while($row=mysqli_fetch_assoc($result))
{
    $response[]=$row;
}

echo json_encode($response);

?>