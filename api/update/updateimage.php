<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
    

 
$title = $_POST["title"];
$images_url = $_POST["images_url"];
$images_type = $_POST["images_type"];
$portfolioid = $_POST["portfolioid"];
$id = $_POST["id"];
$oldimage = $_POST["oldimage"];


if(empty($_FILES["photo_file"]["name"]))
{
    $filename=$oldimage;
}
else
{
    //upload 1.jpg
    unlink("../uploads/portfolio/".$oldimage);
    $ext = pathinfo($_FILES["photo_file"]["name"],PATHINFO_EXTENSION);// jpg
    $filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
    move_uploaded_file($_FILES["photo_file"]["tmp_name"],"../uploads/portfolio/".$filename);
    //upload
}



 
$result = mysqli_query($conn,"update images set title='$title',image_url='$images_url',image_type='$images_type',portfolio_id='$portfolioid',photo_file='$filename' where image_id='$id' ") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>