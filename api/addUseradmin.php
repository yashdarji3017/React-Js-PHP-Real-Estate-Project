<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 
 

$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$contact = $_POST["contact"];
$email = $_POST["email"];
$password = $_POST["password"];
$confirm_password = $_POST["confirm_password"];
$citiesId = $_POST["citiesId"];
$stateId = $_POST["stateId"];
$gender = $_POST["gender"];
$verify = $_POST["verify"];
$type = $_POST["type"];
$address = $_POST["address"];
$pincode = $_POST["pincode"];
$about = $_POST["about"];
$aadhar_no = $_POST["aadhar_no"];
$package = $_POST["package"];
 
$ext = pathinfo($_FILES["photo_file"]["name"],PATHINFO_EXTENSION);// jpg
$filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["photo_file"]["tmp_name"],"uploads/useraadharprofile/".$filename);

$ext = pathinfo($_FILES["aadhar_photo"]["name"],PATHINFO_EXTENSION);// jpg
$filename1 = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["aadhar_photo"]["tmp_name"],"uploads/useraadharprofile/aadhar/".$filename1);


 
$result = mysqli_query($conn,"insert into  user (firstname,lastname,contact,email_user,password,confirm_password,about,aadhar_no,city_id,state_id,gender,verify,type,address,pincode,photo_file,aadhar_photo) values ('$firstName','$lastName','$contact','$email','$password','$confirm_password','$about','$aadhar_no','$citiesId','$stateId','$gender','$verify','$type','$address','$pincode','$filename','$filename1')") or die(mysqli_error($conn));




if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>