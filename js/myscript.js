

    let password = document.getElementById('InputPassword')
    let strengthProgress = document.getElementById('strength')
    let status = document.getElementById("status")
    let btnRandomAll = document.getElementById("random-all")
    var all = document.getElementById('show')
    all.addEventListener('click', function(){
       if(all.checked){
          password.setAttribute('type', 'text')
       }else {
          password.setAttribute('type', 'password')
       }  
    })

//     // The strong and weak password Regex pattern checker

//     let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
//     let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    
//     function StrengthChecker(PasswordParameter){
//         // We then change the badge's color and text based on the password strength

//         if(strongPassword.test(PasswordParameter)) {
//             strengthProgress.value = 100;
//             status.textContent = 'Strong';
//             strengthProgress.classList.add("bg-success");
//         } else if(mediumPassword.test(PasswordParameter)){
//             strengthProgress.value = 50;
//             status.textContent = 'Medium';
//             strengthProgress.classList.add("bg-warning");
//         } else{
//             strengthProgress.value = 10;
//             status.textContent = 'Weak';
//             strengthProgress.classList.add("bg-warning");
//         }
//     }

//     // Adding an input event listener when a user types to the  password input 

//     password.addEventListener("keyup", function(){
//         if(password.value.length !== 0){
//             StrengthChecker(password.value);
//             // strengthProgress.style.display != 'block'
//         }
//     });



let alphabet = /[a-zA-Z]/, //letter a to z and A to Z
      numbers = /[0-9]/, //numbers 0 to 9
      scharacters = /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/; //special characters
// let val = password.value;

function strengthPasswordChecker(val) {
   
     
     if(val.match(alphabet) || val.match(numbers) || val.match(scharacters)){
       status.textContent = "Password is weak";
       strengthProgress.value = 10;
       strengthProgress.classList.add("bg-danger");
     }
     if(val.match(alphabet) && val.match(numbers) && val.length >= 6){
       status.textContent = "Password is medium";
       strengthProgress.value = 50;
       strengthProgress.classList.add("bg-warning");
     }
     if(val.match(alphabet) && val.match(numbers) && val.match(scharacters) && val.length >= 8){
       status.textContent = "Password is strong";
       strengthProgress.value = 100;
       strengthProgress.classList.add("bg-success");
     }

     if(val == ""){
       console.log("valuenya lagi kosong")
     }
}
  
password.addEventListener("keyup", function() {
   strengthPasswordChecker(password.value);
});


// Random Password
btnRandomAll.addEventListener('click', function() {
   strengthPasswordChecker(password.value);
   random_all();
});

function random_all() {
  var campur = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz;',./][=-<>";
  var panjang = 12;
  var random_all = '';
  for (var i=0; i<panjang; i++) {
      var hasil = Math.floor(Math.random() * campur.length);
            random_all += campur.substring(hasil,hasil+1);
  }

  password.value = random_all;
}