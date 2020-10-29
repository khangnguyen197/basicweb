
var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('pass');

var formLog = document.getElementById('login_form');
var guest = localStorage.getItem('guest') ? JSON.parse(localStorage.getItem('guest')) :[];
if(formLog.attachEvent){
    formLog.attachEvent('submit', onFormSubmit);
} else{
    formLog.addEventListener('submit', onFormSubmit);
}

function check_user_name(user_check, guest_t){
   // var x = guest[0].firstname;
   //     console.log(x);
   var locat = 0;
        for (let originObject of guest_t){
            var x = originObject.user_name;

            if(user_check === x){
                document.getElementById('username').style.border = '0.5px solid lightgrey';
                document.getElementById("errorname").innerHTML="";
                localStorage.setItem("Locate", locat);
                return true;
            }
            locat++;
        }
        document.getElementById('username').style.border = '1px solid red';
        document.getElementById("errorname").innerHTML="The username that you've entered doesn't match any account";
        return false;   
    }

function check_password(password_check){ 
     //   var x = originObject.password;
        //var decrypt_password = CryptoJS.AES.decrypt(x, "Secret Passphrase").toString();
      //  alert(x);
      var x = localStorage.getItem("Locate");
        if(password_check == CryptoJS.AES.decrypt(guest[x].password, "Secret Passphrase").toString()){
            document.getElementById('pass').style.border = '0.5px solid lightgrey';
            document.getElementById("errorname").innerHTML="";
            return true;
        }
        document.getElementById('pass').style.border = '1px solid red';
        document.getElementById("errorpass").innerHTML="The password that you've entered is incorrect.";
        return false;
    }
function onFormSubmit(e){
    var user = inputUsername.value;
    var password_input = inputPassword.value;
   // alert('hi');
   check_user_name(user, guest);
   //check_password(password_input);
    var encrypted = CryptoJS.AES.encrypt(password_input, "Secret Passphrase").toString();
    //decrypted
    var password = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase").toString();

   if( check_user_name(user,guest) == true && check_password(password)==true){       
        location.href='home.htm';
    } 
}


