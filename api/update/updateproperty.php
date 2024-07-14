<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
 

$property_title = $_POST ["property_title"];
$description = $_POST ["description"];
$bedroom = $_POST ["bedroom"];
$hall = $_POST ["hall"];
$kitchen = $_POST ["kitchen"];
$master = $_POST ["master"];
$price = $_POST ["price"];
$parking = $_POST ["parking"];

$address = $_POST ["address"];
$pincode = $_POST ["pincode"];
$landmark = $_POST ["landmark"];
$area = $_POST ["area"];
$latitude = $_POST ["latitude"];
$longitude = $_POST ["longitude"];
$citiesId = $_POST ["citiesId"];
$stateId = $_POST ["stateId"];
$furnished = $_POST ["furnished"];
$floors = $_POST  ["floors"];
$numbers = $_POST  ["numbers"];
$build_date = $_POST  ["build_date"];
$projectid = $_POST ["projectid"];
$userid = $_POST ["userid"];
$categoriesid = $_POST ["categoriesid"];
$property = $_POST ["property"];
$isavailable = $_POST ["isavailable"];
$isapprove = $_POST ["isapprove"];
$isactive = $_POST ["isactive"];
$exit = $_POST ["exit"];
$cctv = $_POST ["cctv"];
$wifi = $_POST ["wifi"];
$air = $_POST ["air"];
$security = $_POST ["security"];
$terrace = $_POST ["terrace"];
$lift = $_POST ["lift"];
$balcony = $_POST ["balcony"];
 
$id = $_POST["id"];

$oldimage = $_POST["oldimage"];
$oldimages = $_POST["oldimages"];

if(empty($_FILES["property_photo"]["name"]))
{
    $filename=$oldimage;
}
else
{
    //upload 1.jpg
    unlink("../uploads/property/".$oldimage);
    $ext = pathinfo($_FILES["property_photo"]["name"],PATHINFO_EXTENSION);// jpg
    $filename = time().rand(1111,9999).".".$ext; //5156164597898.jpg
    move_uploaded_file($_FILES["property_photo"]["tmp_name"],"../uploads/property/".$filename);
    //upload
}

$oldimages = $_POST["oldimages"];


if(empty($_FILES["pdf_property"]["name"]))
{
    $filename1=$oldimages;
}
else
{
    //upload 1.jpg
    unlink("../uploads/property/file/".$oldimages);
    $ext = pathinfo($_FILES["pdf_property"]["name"],PATHINFO_EXTENSION);// jpg
    $filename1 = time().rand(1111,9999).".".$ext; //5156164597898.jpg
    move_uploaded_file($_FILES["pdf_property"]["tmp_name"],"../uploads/property/file/".$filename1);
    //upload
}


$result = mysqli_query($conn,"update property set property_title='$property_title',description_property='$description',bedroom='$bedroom',hall='$hall',kitchen='$kitchen',master='$master',price='$price',address_property='$address',landmark_property='$landmark',pincode_property='$landmark',latitude_property='$latitude',longitude_property='$longitude',area_property='$area',furnished='$furnished',floors='$floors',numbers='$numbers',build_date='$build_date',project_id='$projectid',user_id='$userid',categories_id='$categoriesid',property='$property',city_id='$citiesId',state_id='$stateId',available='$isavailable',approve='$isapprove',active='$isactive',property_photo='$filename',pdf_property='$filename1',parking_property='$parking',eexit='$exit',cctv='$cctv',wifi='$wifi',air='$air',security='$security',terrace='$terrace',lift='$lift',balcony='$balcony' where property_id='$id'") or die(mysqli_error($conn));

if($result)
{
    echo "Yes";
}
else
{
    echo "No";
}
?>