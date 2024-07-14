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

$subject = $_POST ["subject"];
$contact = $_POST ["contact"];
$email = $_POST ["email"];
$inquiry_date = date('Y-m-d');
$userid = $_POST ["userid"];
$architechid = $_POST ["architechid"];
$name = $_POST ["name"];



 
$result = mysqli_query($conn,"insert into inquiry (subject,contact,email_inquiry,user_id,architech_id) values ('$subject','$contact','$email','$userid','$architechid')") or die(mysqli_error($conn));

if($result)
{
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
     
    $emailid="";
     $result = mysqli_query($conn,"select * from architech where architech_id='$architechid'");
     while($row=mysqli_fetch_assoc($result))
     {
        $emailid = $row["email"];
     }
     // Add a recipient 
     $mail->addAddress($emailid); 
     
     //$mail->addCC('cc@example.com'); 
     //$mail->addBCC('bcc@example.com'); 
     
     // Set email format to HTML 
     $mail->isHTML(true); 
     
     // Mail subject 
     $mail->Subject = 'Email From Alacto A Complete Solution For Your Real Estate'; 
     
     // Mail body content 
     $bodyContent = '<h1>New Inquiry</h1>';
     $bodyContent .= '<h2>Subject : '.$subject.'</h2>';
     $bodyContent .= '<h2>Email : '.$email.'</h2>';
     $bodyContent .= '<h2>Inquiry Date : '.date('d-m-Y').'</h2>';
     $bodyContent .= '<h2>Customer Contact : '.$contact.'</h2>';
     $bodyContent .= '<h2>Customer Name : '.$name.'</h2>';
     $mail->Body    = $bodyContent; 
     
     // Send email 
     if(!$mail->send()) {
         echo "Yes"; 
     //  echo 'Message could not be sent. Mailer Error: '.$mail->ErrorInfo; 
     } else { 
         echo "Yes";
     // echo 'Message has been sent.'; 
     }
}
else
{
    echo "No";
}
?>