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
    unlink("../uploads/useraadharprofile/".$oldimage);
    $ext = pathinfo($_FILES["photo_file"]["name"],PATHINFO_EXTENSION);// jpg
    $filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
    move_uploaded_file($_FILES["photo_file"]["tmp_name"],"../uploads/useraadharprofile/".$filename);
    //upload
}

$oldimages = $_POST["oldimages"];


if(empty($_FILES["aadhar_photo"]["name"]))
{
    $filename1=$oldimages;
}
else
{
    //upload 1.jpg
    unlink("../uploads/useraadharprofile/aadhar/".$oldimages);
    $ext = pathinfo($_FILES["aadhar_photo"]["name"],PATHINFO_EXTENSION);// jpg
    $filename1 = time().rand(1111,9999).".".$ext; //5156164597898.jpg
    move_uploaded_file($_FILES["aadhar_photo"]["tmp_name"],"../uploads/useraadharprofile/aadhar/".$filename1);
    //upload
}

 


 
$result = mysqli_query($conn,"update user set firstname='$firstName',lastname='$lastName',contact='$contact',email_user='$email',password='$password',confirm_password='$confirm_password',about='$about',aadhar_no='$aadhar_no',city_id='$citiesId',state_id='$stateId',gender='$gender',verify='$verify',type='$type',address='$address',pincode='$pincode',photo_file='$filename',aadhar_photo='$filename1'  where user_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>