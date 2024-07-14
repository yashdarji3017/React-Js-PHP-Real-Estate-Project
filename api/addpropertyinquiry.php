<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
// $post = file_get_contents('php://input');
// $post = json_decode($post);

// Import PHPMailer classes into the global namespace 
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\SMTP; 
use PHPMailer\PHPMailer\Exception; 
 
// Include library files 
require 'PHPMailer/Exception.php'; 
require 'PHPMailer/PHPMailer.php'; 
require 'PHPMailer/SMTP.php'; 


$userid = $_POST ["userid"];
$propertyid = $_POST ["propertyid"];
$inquiry = $_POST ["inquiry"];
$contact = $_POST ["contact"];
$status = $_POST ["status"];
$inquiry_date = date('Y-m-d');
$iemail = $_POST ["iemail"];
$name = $_POST ["name"];

 
$result = mysqli_query($conn,"insert into property_inquiry (user_id,property_id,inquiry_text,contact,status,inquiry_email) values ('$userid','$propertyid','$inquiry','$contact','$status','$iemail')") or die(mysqli_error($conn));

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
     $result = mysqli_query($conn,"select * from user where user_id in (select user_id from property where property_id  ='$propertyid')");
     while($row=mysqli_fetch_assoc($result))
     {
        $emailid = $row["email_user"];
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
     $bodyContent = '<h1>New Property Inquiry</h1>';
     $bodyContent .= '<h2>Inquiry Of Property : '.$inquiry.'</h2>';
     $bodyContent .= '<h2>Email : '.$iemail.'</h2>';
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