<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
 

$title = $_POST ["title"];
$facility = $_POST ["facility"];
$description = $_POST ["description"];
$address = $_POST ["address"];
$landmark = $_POST ["landmark"];
$pincode = $_POST ["pincode"];
$latitude = $_POST ["latitude"];
$longitude = $_POST ["longitude"];
$enrollment = $_POST ["enrollment"];
$total_building = $_POST ["total_building"];
$area = $_POST ["area"];
$additional_info = $_POST ["additional_info"];
$contect_number = $_POST ["contect_number"];
$citiesId = $_POST ["citiesId"];
$stateId = $_POST ["stateId"];
$email = $_POST ["email"];
$book = $_POST  ["book"];
$architechid = $_POST  ["architechid"];
$id = $_POST ["id"];

$oldimage = $_POST ["oldimage"];
$oldimages = $_POST ["oldimages"];

if(empty($_FILES["photo_file_project"]["name"]))
{
    $filename=$oldimage;
}
else
{
    //upload 1.jpg
    unlink("../uploads/project/".$oldimage);
    $ext = pathinfo($_FILES["photo_file_project"]["name"],PATHINFO_EXTENSION);// jpg
    $filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
    move_uploaded_file($_FILES["photo_file_project"]["tmp_name"],"../uploads/project/".$filename);
    //upload
}

$oldimages = $_POST["oldimages"];


if(empty($_FILES["pdf_file"]["name"]))
{
    $filename1=$oldimages;
}
else
{
    //upload 1.jpg
    unlink("../uploads/project/file/".$oldimages);
    $ext = pathinfo($_FILES["pdf_file"]["name"],PATHINFO_EXTENSION);// jpg
    $filename1 = time().rand(1111,9999).".".$ext; //5156164597898.jpg
    move_uploaded_file($_FILES["pdf_file"]["tmp_name"],"../uploads/project/file/".$filename1);
    //upload
}

 
$result = mysqli_query($conn,"update project set project_title='$title',facility='$facility',description='$description',address='$address',landmark='$landmark',pincode='$pincode',latitude='$latitude',longitude='$longitude',enrollment='$enrollment',total_building='$total_building',area='$area',additonal_info='$additional_info',contect_number='$contect_number',email='$email',city_id='$citiesId',state_id='$stateId',booked='$book',architech_id='$architechid',photo_file_project='$filename',pdf_file='$filename1' where project_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>