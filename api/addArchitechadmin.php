<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
// Import PHPMailer classes into the global namespace 


$firstName = $_POST ["firstName"];
$lastName = $_POST ["lastName"];
$Phone = $_POST ["phone"];
$email = $_POST ["email"];
$password = $_POST ["password"];
$confirmpassword = $_POST ["confirmpassword"];
$aboutArchitech = $_POST ["aboutArchitech"];
$address = $_POST ["address"];
$pincode = $_POST ["pincode"];
$landmark = $_POST ["landmark"];
$qualification = $_POST ["qualification"];
$latitude = $_POST ["latitude"];
$longitude = $_POST ["longitude"];
$citiesId = $_POST ["citiesId"];
$stateId = $_POST ["stateId"];
$gender = $_POST ["gender"];
$verify = $_POST  ["verify"];
$block = $_POST  ["block"];
$aadhar = $_POST  ["aadhar"];
$otp = $_POST  ["otp"];


$ext = pathinfo($_FILES["photo_file"]["name"],PATHINFO_EXTENSION);// jpg
$filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["photo_file"]["tmp_name"],"uploads/architechaadharprofile/".$filename);

$ext = pathinfo($_FILES["aadhar_photo"]["name"],PATHINFO_EXTENSION);// jpg
$filename1 = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["aadhar_photo"]["tmp_name"],"uploads/architechaadharprofile/aadhar/".$filename1);



 
$result = mysqli_query($conn,"insert into architech (first_name,last_name,phone_no,email,password,confirm_password,about_architech,address,pincode,landmark,qualification,latitude,longitude,city_id,state_id,gender,verify,block,aadhar,photo_file,aadhar_photo,otp) values ('$firstName','$lastName','$Phone','$email','$password','$confirmpassword','$aboutArchitech','$address','$pincode','$landmark','$qualification','$latitude','$longitude','$citiesId','$stateId','$gender','$verify','$block','$aadhar','$filename','$filename1','$otp')") or die(mysqli_error($conn));

if($result)
{
   
     echo "Yes";
}
else
{
        echo "No";
}
?>