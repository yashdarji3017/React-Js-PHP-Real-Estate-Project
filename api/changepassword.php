<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
$userid=$_POST["userid"];
$oldpassword=$_POST["oldpassword"];
$newpassword  = $_POST["newpassword"];
$newconfirmpassword  = $_POST["newconfirmpassword"];

$result = mysqli_query($conn,"select * from user where user_id='$userid' and password='$oldpassword'") or die(mysqli_error($conn));

if(mysqli_num_rows($result)<=0)
{
    echo "nomatch";
}
else
{
    $result = mysqli_query($conn,"update user set password='$newpassword',confirm_password='$newconfirmpassword' where user_id='$userid'");
    if($result)
    {
        echo "Yes";
    }
    else
    {
        echo "No";
    }
}
?>