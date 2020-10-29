var guest = localStorage.getItem('guest') ? JSON.parse(localStorage.getItem('guest')) :[];
var x = localStorage.getItem("Locate");
var inputCurrentPassword = document.getElementById('current_pass');
var inputNewPassword = document.getElementById('new_pass');
var inputComfirmedPassword = document.getElementById('confirm_pass');

function check_currentpassword(password_check){ 
        if(password_check == CryptoJS.AES.decrypt(guest[x].password, "Secret Passphrase").toString()){
            document.getElementById('current_pass').style.border = '0.5px solid lightgrey';
            return true;
        }    
        else{          
        document.getElementById('current_pass').style.border = '1px solid red';
        document.getElementById('current_pass').value="";
        document.getElementById('current_pass').placeholder = "The password that you've entered is incorrect.";
        return false;}
}
function check_newpassword(temp, originalPass){
    if(temp == ''){
        document.getElementById('new_pass').style.border = '1px solid red';
        document.getElementById('new_pass').value="";
        document.getElementById('new_pass').placeholder = "This field must be completed";
        return false;
    }
    else if(originalPass.length < 8 || originalPass.includes(" ") == true){
        document.getElementById('new_pass').style.border = '1px solid red';
        document.getElementById('new_pass').value="";
        document.getElementById("new_pass").placeholder="Password must be at least 8 characters and must not include special characters";
        return false;

    }
    else{
        document.getElementById('new_pass').style.border = '0.5px solid lightgrey';
        return true;
    }
}
function check_comfirmedpassword(temp, new_pass){
    if(temp !== new_pass || temp ==''){
        document.getElementById('confirm_pass').style.border = '1px solid red';
        document.getElementById('confirm_pass').value="";
        document.getElementById('confirm_pass').placeholder = "Confirmed password does not match with new password";
        return false;
    }
    else{
        document.getElementById('confirm_pass').style.border = '0.5px solid lightgrey';
        return true;
    }
}
function save(e){
    var current_pass_input = inputCurrentPassword.value;
    var new_pass_input = inputNewPassword.value;
    var comfirmedpass_input = inputComfirmedPassword.value;
//encrypted
    var encrypted1 = CryptoJS.AES.encrypt(current_pass_input, "Secret Passphrase").toString();
    var encrypted2 = CryptoJS.AES.encrypt(new_pass_input, "Secret Passphrase").toString();
    var encrypted3 = CryptoJS.AES.encrypt(comfirmedpass_input, "Secret Passphrase").toString();
//decrypted
    var current_pass = CryptoJS.AES.decrypt(encrypted1, "Secret Passphrase").toString();
    var new_pass = CryptoJS.AES.decrypt(encrypted2, "Secret Passphrase").toString();
    var comfirmedpass = CryptoJS.AES.decrypt(encrypted3, "Secret Passphrase").toString();

    check_currentpassword(current_pass);
    check_newpassword(new_pass,new_pass_input );
    check_comfirmedpassword(comfirmedpass, new_pass);
    if(check_currentpassword(current_pass) == true && check_newpassword(new_pass,new_pass_input) == true
    && check_comfirmedpassword(comfirmedpass, new_pass) == true){
        guest[x].password = encrypted2;
        localStorage.setItem('guest',JSON.stringify(guest));
        location.href="youraccount.htm";
    }
}
function gobackhome(e){
    location.href="home.htm";
}