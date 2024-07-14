<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
 
$title = $_POST ["title"];
$image_url = $_POST ["image_url"];
$imagetype = $_POST ["imagetype"];
$propertyid = $_POST ["propertyid"];
$isactive = $_POST ["isactive"];

$id = $_POST["id"];

$oldimage = $_POST["oldimage"];

if(empty($_FILES["photo_file"]["name"]))
{
    $filename=$oldimage;
}
else
{
    //upload 1.jpg
    unlink("../uploads/media/".$oldimage);
    $ext = pathinfo($_FILES["media_file"]["name"],PATHINFO_EXTENSION);// jpg
    $filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
    move_uploaded_file($_FILES["media_file"]["tmp_name"],"../uploads/media/".$filename);
    //upload
}



 
$result = mysqli_query($conn,"update media set title='$title',image_url='$image_url',file_type='$imagetype ',active='$isactive',property_id='$propertyid',media_file='$filename' where media_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>