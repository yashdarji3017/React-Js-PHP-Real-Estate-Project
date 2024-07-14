<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$plan_title = $_POST["plan_title"];
$visits = $_POST["visits"];
$specification = $_POST["specification"];
$price = $_POST["price"];
$update_price = $_POST["update_price"];
$term_condition = $_POST["term_condition"];
$description = $_POST["description"];
$add_date = $_POST["add_date"];
$architechid = $_POST["architechid"];
$categoriesid = $_POST["categoriesid"];
$pincode = $_POST["pincode"];
$address = $_POST["address"];
$pincode = $_POST["pincode"];
$stateId = $_POST["stateId"];
$citiesId = $_POST["citiesId"]; 
$active = $_POST["active"]; 
$approve = $_POST["approve"]; 
$id = $_POST["id"];

$oldimage = $_POST["oldimage"];
$oldimages = $_POST["oldimages"];

  
  
  
if(empty($_FILES["photo_file"]["name"]))
{
    $filename=$oldimage;
}
else
{
    //upload 1.jpg
    unlink("../uploads/planphoto/".$oldimage);
    $ext = pathinfo($_FILES["photo_file"]["name"],PATHINFO_EXTENSION);// jpg
    $filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
    move_uploaded_file($_FILES["photo_file"]["tmp_name"],"../uploads/planphoto/".$filename);
    //upload
}

$oldimages = $_POST["oldimages"];


if(empty($_FILES["plan_file"]["name"]))
{
    $filename1=$oldimages;
}
else
{
    //upload 1.jpg
    unlink("../uploads/planphoto/planfile/".$oldimages);
    $ext = pathinfo($_FILES["plan_file"]["name"],PATHINFO_EXTENSION);// jpg
    $filename1 = time().rand(1111,9999).".".$ext; //5156164597898.jpg
    move_uploaded_file($_FILES["plan_file"]["tmp_name"],"../uploads/planphoto/planfile/".$filename1);
    //upload
}
 
$result = mysqli_query($conn,"update plans set plan_title='$plan_title',visits='$visits',specification='$specification',price='$price',update_price='$update_price',term_conditon='$term_condition',description='$description',add_date='$add_date',architech_id='$architechid',categories_id='$categoriesid',address='$address',pincode='$pincode',state_id='$stateId',city_id='$citiesId',active='$active',approve='$approve',photo_file='$filename',plan_file='$filename1' where plan_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>