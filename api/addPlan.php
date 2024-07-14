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
  
  
$ext = pathinfo($_FILES["photo_file"]["name"],PATHINFO_EXTENSION);// jpg
$filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["photo_file"]["tmp_name"],"uploads/planphoto/".$filename);
 
$ext = pathinfo($_FILES["plan_file"]["name"],PATHINFO_EXTENSION);// jpg
$filename1 = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["plan_file"]["tmp_name"],"uploads/planphoto/planfile/".$filename1); 


 
$result = mysqli_query($conn,"insert into plans (plan_title,visits,specification,price,update_price,term_conditon,description,add_date,architech_id,categories_id,address,pincode,state_id,city_id,active,approve,photo_file,plan_file) values ('$plan_title','$visits','$specification','$price','$update_price','$term_condition','$description','$add_date','$architechid','$categoriesid','$address','$pincode' ,'$stateId', '$citiesId','$active', '$approve','$filename','$filename1')") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>