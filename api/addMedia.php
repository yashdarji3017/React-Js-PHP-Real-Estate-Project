<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
$post = file_get_contents('php://input');
$post = json_decode($post);

 
$title = $_POST ["title"];
$image_url = $_POST ["image_url"];
$imagetype = $_POST ["imagetype"];
$propertyid = $_POST ["propertyid"];
$isactive = $_POST ["isactive"];

$ext = pathinfo($_FILES["media_file"]["name"],PATHINFO_EXTENSION);// jpg
$filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["media_file"]["tmp_name"],"uploads/media/".$filename);



 
$result = mysqli_query($conn,"insert into media(title,image_url,file_type,active,property_id,media_file) values('$title','$image_url','$imagetype','$isactive','$propertyid','$filename')") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>