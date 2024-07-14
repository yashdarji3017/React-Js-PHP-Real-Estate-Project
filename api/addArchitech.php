<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
// Import PHPMailer classes into the global namespace 
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\SMTP; 
use PHPMailer\PHPMailer\Exception; 
 
// Include library files 
require 'PHPMailer/Exception.php'; 
require 'PHPMailer/PHPMailer.php'; 
require 'PHPMailer/SMTP.php'; 

$firstName = $_POST ["firstName"];
$lastName = $_POST ["lastName"];
$Phone = $_POST ["phone"];
$email = $_POST ["email"];
$password = $_POST ["password"];
$confirmpassword = $_POST ["confirmpassword"];
$aboutArchitech = $_POST["aboutArchitech"];
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


$ext = pathinfo($_FILES["photo_file"]["name"],PATHINFO_EXTENSION);// jpg
$filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["photo_file"]["tmp_name"],"uploads/architechaadharprofile/".$filename);

$ext = pathinfo($_FILES["aadhar_photo"]["name"],PATHINFO_EXTENSION);// jpg
$filename1 = time().rand(1111,9999).".".$ext; //5156164597898.jpg
move_uploaded_file($_FILES["aadhar_photo"]["tmp_name"],"uploads/architechaadharprofile/aadhar/".$filename1);

$otp=rand(1111,9999);
 
$response=array();


 
$result = mysqli_query($conn,"insert into architech (first_name,last_name,phone_no,email,password,confirm_password,about_architech,address,pincode,landmark,qualification,latitude,longitude,city_id,state_id,gender,verify,block,aadhar,photo_file,aadhar_photo,otp) values ('$firstName','$lastName','$Phone','$email','$password','$confirmpassword','".mysqli_real_escape_string($con,$aboutArchitech)."','$address','$pincode','$landmark','$qualification','$latitude','$longitude','$citiesId','$stateId','$gender','$verify','$block','$aadhar','$filename','$filename1','$otp')") or die(mysqli_error($conn));

$id=mysqli_insert_id($conn);

if($result)
{
  //mail

// Create an instance; Pass `true` to enable exceptions 
$mail = new PHPMailer; 
 
    // Server settings 
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;    //Enable verbose debug output 
$mail->isSMTP();                            // Set mailer to use SMTP 
$mail->Host = 'smtp.gmail.com';           // Specify main and backup SMTP servers 
$mail->SMTPAuth = true;                     // Enable SMTP authentication 
$mail->Username = 'therealalacto103@gmail.com';       // SMTP username 
$mail->Password = 'pbtrhcugmpqkiasa';         // SMTP password 
$mail->SMTPSecure = 'ssl';                  // Enable TLS encryption, `ssl` also accepted 
$mail->Port = 465;                          // TCP port to connect to 
     
    // Sender info 
$mail->setFrom('therealalacto103@gmail.com', 'Alacto'); 
$mail->addReplyTo('therealalacto103@gmail.com', 'Alacto'); 
     
    // Add a recipient 
$mail->addAddress($email); 
     
    //$mail->addCC('cc@example.com'); 
    //$mail->addBCC('bcc@example.com'); 
     
    // Set email format to HTML 
$mail->isHTML(true); 
     
    // Mail subject 
$mail->Subject = 'Email From Alacto A Complete Solution For Your Real Estate'; 
     
    // Mail body content 
$bodyContent = '<h1>Your OTP : '.$otp.'</h1>';
$mail->Body    = $bodyContent; 
     
    // Send email 
    if(!$mail->send()) { 
        //  echo 'Message could not be sent. Mailer Error: '.$mail->ErrorInfo; 
      } else { 
         // echo 'Message has been sent.'; 
      }
          //mail
         $response["status"]="Yes";
         $response["userid"]=$id;
         $response["email"]=$email;
      
      }
      
      else
      {
          $response["status"]="No";
      }
      echo json_encode($response);
      ?>