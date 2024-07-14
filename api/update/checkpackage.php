<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
// $post = file_get_contents('php://input');
// $post = json_decode($post);

$userid = $_POST ["userid"];


 
$result = mysqli_query($conn,"select * from packagepurchase as p left join package as m on m.package_id=p.package_id where p.user_id='$userid'") or die(mysqli_error($conn));
$total=0;
while($row=mysqli_fetch_assoc($result))
{
    $total=$total + $row["total_property"];
}


$result = mysqli_query($conn,"select * from property where user_id='$userid'") or die(mysqli_error($conn));
$totaladded=mysqli_num_rows($result);


if(($totaladded+1) > $total)
{
    echo "no";
}
else
{
    echo "yes";
}
?>