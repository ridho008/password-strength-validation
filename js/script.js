

var pass = document.getElementById("InputPassword")
   pass.addEventListener('keyup', function(){
      checkPassword(pass.value)
   })
   var all = document.getElementById('show')
   all.addEventListener('click', function(){
      if(all.checked){
         pass.setAttribute('type', 'text')
      }else {
         pass.setAttribute('type', 'password')
      }  
   })
   function checkPassword(InputPassword){
      var strengthBar = document.getElementById("strength")
      var status = document.getElementById("status")
      var strength = 0;
      var color = null;

      // Jika input karakter seperti dalam tanda bracket 2
      // if (InputPassword.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)){
      //    strength += 1
      //    console.log(strength)
      // }
      // // Jika input karakter seperti dalam tanda bracket 3
      // if (InputPassword.match(/[!@#$%^&*()]+/)){
      //    strength += 1;
      //    console.log(strength)
      // }
      // if (InputPassword.match(/[~<>?]+/)){
      //    strength += 1;
      // }
      // if (InputPassword.length >= 12) {
      //    strength += 1;
      //    console.log(strength)
      // }

      var regex = new Array();
       regex.push("[A-Z]");
       regex.push("[a-z]");
       regex.push("[0-9]");
       regex.push("[!@#$%^&*]");

       var passed = 0;
        for(var x = 0; x < regex.length;x++){
        if(new RegExp(regex[x]).test(InputPassword)){
         console.log(passed++);
        }
       }
      

      // switch(strength){
      //    //  akan menampilkan status progress bars sesuai Jika input sesuai karakter seperti dalam tanda bracket
      //    case 0:
      //          strengthBar.value = 10;
      //          statusCode = "Tidak Aman";
      //          color = "bg-danger";
      //          strengthBar.classList.remove("bg-warning");
      //          strengthBar.classList.remove("bg-success");
      //          break
      //    case 1:
      //          strengthBar.value = 50;
      //          statusCode = "Cukup Aman";
      //          color = "bg-warning";
      //          strengthBar.classList.remove("bg-danger");
      //          break
      //    case 2:
      //          strengthBar.value = 100;
      //          statusCode = "Aman";
      //          color = "bg-success";
      //          break
      // }

      // strengthBar.classList.add(color);
      // status.innerHTML = statusCode;


   }

