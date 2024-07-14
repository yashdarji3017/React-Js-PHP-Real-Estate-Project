<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
$title = $_POST["title"];
$description = $_POST["description"];
$reference = $_POST["reference"];
$add_date = $_POST["add_date"];
$approve = $_POST["approve"];
$id = $_POST["id"];
$oldimage = $_POST["oldimage"];
$oldimages = $_POST["oldimages"];
$architechid = $_POST["architechid"];
$userid = $_POST["userid"];
$type = $_POST["type"];

if(empty($_FILES["photo_article"]["name"]))
{
    $filename=$oldimage;
}
else
{
    //upload 1.jpg
    unlink("../uploads/articles/".$oldimage);
    $ext = pathinfo($_FILES["photo_article"]["name"],PATHINFO_EXTENSION);// jpg
    $filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
    move_uploaded_file($_FILES["photo_article"]["tmp_name"],"../uploads/articles/".$filename);
    //upload
}

$oldimages = $_POST["oldimages"];


if(empty($_FILES["pdf_article"]["name"]))
{
    $filename1=$oldimages;
}
else
{
    //upload 1.jpg
    unlink("../uploads/articles/".$oldimages);
    $ext = pathinfo($_FILES["pdf_article"]["name"],PATHINFO_EXTENSION);// jpg
    $filename1 = time().rand(1111,9999).".".$ext; //5156164597898.jpg
    move_uploaded_file($_FILES["pdf_article"]["tmp_name"],"../uploads/articles/file/".$filename1);
    //upload
}





 
$result = mysqli_query($conn,"update articles set title='$title',description='$description',reference='$reference',add_date='$add_date',approve='$approve',photo_article='$filename',pdf_article='$filename1',user_id='$userid',architech_id='$architechid',usertype='$type' where article_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>