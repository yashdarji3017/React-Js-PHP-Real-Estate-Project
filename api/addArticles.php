<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
$title = $_POST["title"];
$description = $_POST["description"];
$reference = $_POST["reference"];
$add_date = $_POST["add_date"];
$approve = $_POST["approve"];
$userid = $_POST ["userid"];
$architechid = $_POST ["architechid"];
$type = $_POST ["type"];


$ext = pathinfo($_FILES["photo_article"]["name"],PATHINFO_EXTENSION);// jpg
$filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["photo_article"]["tmp_name"],"uploads/articles/".$filename);

$ext = pathinfo($_FILES["pdf_article"]["name"],PATHINFO_EXTENSION);// jpg
$filename1 = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["pdf_article"]["tmp_name"],"uploads/articles/file/".$filename1);




 
$result = mysqli_query($conn,"insert into articles (title,description,reference,approve,photo_article,pdf_article,user_id,architech_id,usertype) values ('$title','$description','$reference','$approve','$filename','$filename1','$userid','$architechid','$type')") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>