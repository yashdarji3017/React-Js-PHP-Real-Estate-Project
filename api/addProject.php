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


$ext = pathinfo($_FILES["photo_file_project"]["name"],PATHINFO_EXTENSION);// jpg
$filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["photo_file_project"]["tmp_name"],"uploads/project/".$filename);

$ext = pathinfo($_FILES["pdf_file"]["name"],PATHINFO_EXTENSION);// jpg
$filename1 = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["pdf_file"]["tmp_name"],"uploads/project/file/".$filename1);


 
$result = mysqli_query($conn,"insert into project(project_title,facility,description,address,landmark,pincode,latitude,longitude,enrollment,total_building,area,additonal_info,contect_number,email,city_id,state_id,booked,architech_id,photo_file_project,pdf_file) values('$title','$facility','$description','$address','$landmark','$pincode','$latitude','$longitude','$enrollment','$total_building','$area','$additional_info','$contect_number','$email','$citiesId','$stateId','$book','$architechid','$filename','$filename1')") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>