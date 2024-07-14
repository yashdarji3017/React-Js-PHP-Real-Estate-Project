<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
// $post = file_get_contents('php://input');
// $post = json_decode($post);

$oldimage = $_POST["oldimage"];

if(empty($_FILES["profile_photo"]["name"]))
{
    $filename=$oldimage;
}
else
{
    //upload 1.jpg
    unlink("../uploads/admin/".$oldimage);
    $ext = pathinfo($_FILES["profile_photo"]["name"],PATHINFO_EXTENSION);// jpg
    $filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
    move_uploaded_file($_FILES["profile_photo"]["tmp_name"],"../uploads/admin/".$filename);
    //upload
}


//upload 1.jpg



$result = mysqli_query($conn,"update admin set profile_photo ='$filename' where login_id") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>