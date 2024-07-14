<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
// $post = file_get_contents('php://input');
// $post = json_decode($post);

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

$oldimage = $_POST["oldimage"];
$oldimages = $_POST["oldimages"];
$id = $_POST["id"];


if(empty($_FILES["photo_file"]["name"]))
{
    $filename=$oldimage;
}
else
{
    //upload 1.jpg
    unlink("../uploads/architechaadharprofile/".$oldimage);
    $ext = pathinfo($_FILES["photo_file"]["name"],PATHINFO_EXTENSION);// jpg
    $filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
    move_uploaded_file($_FILES["photo_file"]["tmp_name"],"../uploads/architechaadharprofile/".$filename);
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
    unlink("../uploads/architechaadharprofile/aadhar/".$oldimages);
    $ext = pathinfo($_FILES["aadhar_photo"]["name"],PATHINFO_EXTENSION);// jpg
    $filename1 = time().rand(1111,9999).".".$ext; //5156164597898.jpg
    move_uploaded_file($_FILES["aadhar_photo"]["tmp_name"],"../uploads/architechaadharprofile/aadhar/".$filename1);
    //upload
}

 
 


 
$result = mysqli_query($conn,"update architech set first_name='$firstName',last_name='$lastName',phone_no='$Phone',email='$email',password='$password',confirm_password='$confirmpassword',about_architech='$aboutArchitech',address='$address',pincode='$pincode',landmark='$landmark',qualification='$qualification',latitude='$latitude',longitude='$longitude',city_id='$citiesId',state_id='$stateId',gender='$gender',verify='$verify',block='$block',aadhar='$aadhar',photo_file='$filename',aadhar_photo='$filename1' where architech_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>