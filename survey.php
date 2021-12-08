<!doctype html>
<html>
<body>

<?php
// define variables and set to empty values
$speed = $style = = $quality =  "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = Speed rating:($_POST["speed"]);
  $email = Style rating: ($_POST["style"]);
  $zip = Quality rating:($_POST["quality"]);
  $customerID =Your customer number:($_POST["customerID"]);
  
 
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

</body>
</html>