<?php  
require('config/db.php');

if(isset($_POST['register'])) {
   $email = htmlspecialchars($_POST['email']);
   $password = md5($_POST['password']);

   // cek apakah email telah didaftar
   $query = mysqli_query($conn, "SELECT email FROM users WHERE email = '$email'") or die(mysqli_error($conn));
   $row = mysqli_fetch_assoc($query);
   // var_dump($row); die;
   if ($row) {
      echo "<script>alert('Maaf email ini telah terdaftar.');window.location='register.php'</script>";
      return false;
   }

   $sql = mysqli_query($conn, "INSERT INTO users VALUES(null, '$email', '$password')") or die(mysqli_error($conn));
// email : juki@gmail.com password : ;ymNxMcV.zdO
   if($sql) {
      echo "<script>alert('Akun Berhasil didaftarkan.')</script>";
   } else {
      echo "<script>alert('Akun Gagal didaftarkan.')</script>";
   }
}

?>   

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Register</title>
   <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
   <div class="container">
      <div class="row">
         <div class="col-md-6 offset-md-3 mt-5">
            <h3>Register</h3>
            <form method="post">
              <div class="form-group">
                <label for="InputEmail">Email address</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
                 <div class="form-group">
                   <label for="InputPassword">Password</label>
                   <input type="password" name="password" class="form-control" id="InputPassword" placeholder="Password">
                   
                   <input type="checkbox" name="" id="show"><span> Show Password</span><small>
                  <span id="status" class="text-muted"></span>
                   <progress max="100" value="0" id="strength" style="width: 100%"></small>
                   </progress> <br>
                 </div>
                 <button type="button" id="random-all" class="btn-default">Generate Password</button>
                 <button type="submit" name="register" class="btn btn-primary">Register</button> 
            </form>
         </div>
      </div>
   </div>

<script src="js/bootstrap.min.js"></script>
<script src="js/myscript.js"></script>
</body>
</html>