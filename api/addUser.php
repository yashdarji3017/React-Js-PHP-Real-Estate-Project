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

 $otp=rand(1111,9999);
 
$response=array();

 
$result = mysqli_query($conn,"insert into  user (firstname,lastname,contact,email_user,password,confirm_password,about,aadhar_no,city_id,state_id,gender,verify,type,address,pincode,photo_file,aadhar_photo,otp) values ('$firstName','$lastName','$contact','$email','$password','$confirm_password','$about','$aadhar_no','$citiesId','$stateId','$gender','$verify','$type','$address','$pincode','$filename','$filename1','$otp')") or die(mysqli_error($conn));

$id=mysqli_insert_id($conn);

if($type=="Agent")
{
    $currdate = date('Y-m-d');
    mysqli_query($conn,"insert into packagepurchase (user_id,package_id,transaction_no,purchase_date,pay) values ('$id','$package','1234','$currdate','yes')");
}
else
{
    $currdate = date('Y-m-d');
    mysqli_query($conn,"insert into packagepurchase (user_id,package_id,transaction_no,purchase_date,pay) values ('$id','35','1234','$currdate','yes')");
}

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