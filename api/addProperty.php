<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$property_title = $_POST ["property_title"];
$description = $_POST ["description"];
$bedroom = $_POST ["bedroom"];
$hall = $_POST ["hall"];
$kitchen = $_POST ["kitchen"];
$master = $_POST ["master"];
$price = $_POST ["price"];
$parking = $_POST ["parking"];

$address = $_POST ["address"];
$pincode = $_POST ["pincode"];
$landmark = $_POST ["landmark"];
$area = $_POST ["area"];
$latitude = $_POST ["latitude"];
$longitude = $_POST ["longitude"];
$citiesId = $_POST ["citiesId"];
$stateId = $_POST ["stateId"];
$furnished = $_POST ["furnished"];
$floors = $_POST  ["floors"];
$numbers = $_POST  ["numbers"];
$build_date = $_POST  ["build_date"];
$projectid = $_POST ["projectid"];
$userid = $_POST ["user_id"];
$categoriesid = $_POST ["categoriesid"];
$property = $_POST ["property"];
$isavailable = $_POST ["isavailable"];
$isapprove = $_POST ["isapprove"];
$isactive = $_POST ["isactive"];
$exit = $_POST ["exit"];
$cctv = $_POST ["cctv"];
$wifi = $_POST ["wifi"];
$air = $_POST ["air"];
$security = $_POST ["security"];
$terrace = $_POST ["terrace"];
$lift = $_POST ["lift"];
$balcony = $_POST ["balcony"];


 
 
$ext = pathinfo($_FILES["property_photo"]["name"],PATHINFO_EXTENSION);// jpg
$filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["property_photo"]["tmp_name"],"uploads/property/".$filename);

$ext = pathinfo($_FILES["pdf_property"]["name"],PATHINFO_EXTENSION);// jpg
$filename1 = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["pdf_property"]["tmp_name"],"uploads/property/file/".$filename1);


$result = mysqli_query($conn,"insert into property(property_title,description_property,bedroom,hall,kitchen,master,price,address_property,landmark_property,pincode_property,latitude_property,longitude_property,area_property,furnished,floors,numbers,build_date,project_id,user_id,categories_id,property,city_id,state_id,available,approve,active,property_photo,pdf_property,parking_property,eexit,cctv,wifi,air,security,terrace,lift,balcony) values('$property_title','$description','$bedroom','$hall','$kitchen','$master','$price','$address','$landmark','$pincode','$latitude','$longitude','$area','$furnished','$floors','$numbers','$build_date','$projectid','$userid', '$categoriesid','$property','$citiesId','$stateId','$isavailable','$isapprove','$isactive','$filename','$filename1','$parking','$exit','$cctv','$wifi','$air','$security','$terrace','$lift','$balcony')") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>