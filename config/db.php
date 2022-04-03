<?php  
$conn = mysqli_connect("localhost", "root", "", "strength-pass") or die(mysqli_error($conn));
if ($conn) {
   var_dump("Berhasil");
} else {
   var_dump("Gagal");
}

?>