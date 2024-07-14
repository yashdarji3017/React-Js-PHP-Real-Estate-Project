<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
    

 
$title = $_POST["title"];
$images_url = $_POST["images_url"];
$images_type = $_POST["images_type"];
$portfolioid = $_POST["portfolioid"];
 
$ext = pathinfo($_FILES["photo_file"]["name"],PATHINFO_EXTENSION);// jpg
$filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["photo_file"]["tmp_name"],"uploads/portfolio/".$filename);



 
$result = mysqli_query($conn,"insert into images (title,image_url,image_type,portfolio_id,photo_file) values ('$title','$images_url','$images_type','$portfolioid','$filename')") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>