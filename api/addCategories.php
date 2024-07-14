<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
// $post = file_get_contents('php://input');
// $post = json_decode($post);

$categories_name = $_POST["categories_name"];


//upload 1.jpg
$ext = pathinfo($_FILES["media_file"]["name"],PATHINFO_EXTENSION);// jpg
$filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["media_file"]["tmp_name"],"uploads/category/".$filename);
//upload


$result = mysqli_query($conn,"insert into  categories (categories_name,media_file) values ('$categories_name','$filename')") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>