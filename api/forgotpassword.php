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

$emailid = $_POST["emailid"];
$result = mysqli_query($conn,"select * from user where email_user='$emailid'") or die(mysqli_error($conn));

if(mysqli_num_rows($result)<=0)
{
    echo "no";
}
else
{
     //mail

     $result = mysqli_query($conn,"select * from user where email_user='$emailid'") or die(mysqli_error($conn));
     $password="";
     while($row=mysqli_fetch_assoc($result))
     {
        $password = $row["password"];
     }


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
        $mail->addAddress($emailid); 
        
        //$mail->addCC('cc@example.com'); 
        //$mail->addBCC('bcc@example.com'); 
        
        // Set email format to HTML 
        $mail->isHTML(true); 
        
        // Mail subject 
        $mail->Subject = 'Email From Alacto A Complete Solution For Your Real Estate'; 
        
        // Mail body content 
        $bodyContent = '<h1>Your Password : '.$password.'</h1>';
        $mail->Body    = $bodyContent; 
        
        // Send email 
        if(!$mail->send()) {
            echo "nomail"; 
        //  echo 'Message could not be sent. Mailer Error: '.$mail->ErrorInfo; 
        } else { 
            echo "Yes";
        // echo 'Message has been sent.'; 
        }
}
?>