<!doctype html>
<html>
<body>

<?php
// define variables and set to empty values
$name = $email = = $zip = $customerID= "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = Your username($_POST["name"]);
  $email = Your email address($_POST["email"]);
  $zip = Your Zip code:($_POST["zip"]);
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