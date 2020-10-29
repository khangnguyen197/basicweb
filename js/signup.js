var sign_Username = document.getElementById('userid');
var sign_firstname = document.getElementById('firstname');
var sign_lastname = document.getElementById('lastname');
var sign_pass = document.getElementById('pass');
var sign_birthday = document.getElementById('birthday');
var guest = localStorage.getItem('guest') ? JSON.parse(localStorage.getItem('guest')) :[];
var formLog = document.getElementById('pannel');

if(formLog.attachEvent){
    formLog.attachEvent('submit', sign_submit);
}else{
    formLog.addEventListener('submit', sign_submit);
}  
//CHECK INPUT DATA
function check_user_name(temp, guest_t){

    if(temp == ''){
        document.getElementById('userid').style.border = '1px solid red';
        document.getElementById("errorname").innerHTML="Please enter user name";
        return false;
    } 
    else if(temp.includes(" ")){
        document.getElementById('userid').style.border = '1px solid red';
        document.getElementById("errorname").innerHTML="Username cannot have spaces";
        return false;
    }
    
    //CHECK DUPLICATE USER NAME
    else {
            for (let originObject of guest_t){
                var x = originObject.user_name;
            //  console.log(x);
                if(temp === x) 
                    {  
                    document.getElementById('userid').style.border = '1px solid red';
                    document.getElementById("errorname").innerHTML="Username has been used";
                        return false;}
        }
            document.getElementById('userid').style.border = '0.5px solid lightgrey';
            document.getElementById("errorname").innerHTML="";
            return true;
    }
}

function check_first_name(temp){
    var RegExpression = /^[a-zA-Z\s]*$/; 
   // var number = /^[0-9]+$/; 

    if(temp == ''){
        document.getElementById('firstname').style.border = '1px solid red';
        document.getElementById("error_fname").innerHTML="Please enter first name";
        return false;
    }
    else if(!temp.match(RegExpression)){
        document.getElementById('firstname').style.border = '1px solid red';
        document.getElementById("error_fname").innerHTML="Name must not have accents and includes letters only";
        return false;
    }
    else{
        document.getElementById('firstname').style.border = '0.5px solid lightgrey';
        document.getElementById("error_fname").innerHTML="";
        return true;
    }
}
function check_last_name(temp){
    var RegExpression = /^[a-zA-Z\s]*$/; 
    if(temp == ''){
        document.getElementById('lastname').style.border = '1px solid red';
        document.getElementById("error_lname").innerHTML="Please enter last name";
        return false;
    }
    else if(!temp.match(RegExpression)){
        document.getElementById('lastname').style.border = '1px solid red';
        document.getElementById("error_lname").innerHTML="Name must not have accents and includes letters only";
        return false;
    }
    else{
        document.getElementById('lastname').style.border = '0.5px solid lightgrey';
        document.getElementById("error_lname").innerHTML="";
        return true;
    }
}
function check_pass(temp, originalPass){
    //var space = CryptoJS.AES.encrypt(password_input, "Secret Passphrase").toString();
    var temp_De = CryptoJS.AES.decrypt(temp, "Secret Passphrase").toString();
    if(temp_De == ''){
        document.getElementById('pass').style.border = '1px solid red';
        document.getElementById("error_pass").innerHTML="Please enter password";
        return false;
    }
    else if(originalPass.length < 8 || originalPass.includes(" ") == true){
        document.getElementById('pass').style.border = '1px solid red';
        document.getElementById("error_pass").innerHTML="Password must be at least 8 characters and must not include special characters";
        return false;

    }
    else{
        document.getElementById('pass').style.border = '0.5px solid lightgrey';
        document.getElementById("error_pass").innerHTML="";
        return true;
    }
}
function check_day(temp){
    var d = new Date();
    //get day of birth
    var d2 = new Date($('#birthday').val());
    if(temp == ''){
        document.getElementById('birthday').style.border = '1px solid red';
        document.getElementById("error_day").innerHTML="Please choose day of birth";
        return false;
    } else if(d2 > d){   
        document.getElementById('birthday').style.border = '1px solid red';
        document.getElementById("error_day").innerHTML="Invalid: Your day of birth is greater than current date";
        return false;
    }
    else{
        document.getElementById('birthday').style.border = '0.5px solid lightgrey';
        document.getElementById("error_day").innerHTML="";
        return true;
    }
}



function sign_submit(e){
    var user_name = sign_Username.value;
    var firstname= sign_firstname.value;
    var lastname = sign_lastname.value;
    var password_input = sign_pass.value;
    var birthday = sign_birthday.value;
    //password_encrypted:
    var password = CryptoJS.AES.encrypt(password_input, "Secret Passphrase").toString();
    // alert(encrypted);
   //Decrypted
   // var password = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase").toString();
   check_user_name(user_name, guest); check_first_name(firstname);
   check_last_name(lastname); check_pass(password, password_input); check_day(birthday);
   if(check_user_name(user_name, guest) == true && check_first_name(firstname) == true && check_last_name(lastname)== true && check_pass(password,password_input) == true && check_day(birthday) == true){
        guest.push({
            user_name: user_name,
            firstname: firstname,
            lastname: lastname,
            password: password,
            dayofbirth: birthday,
        });
        localStorage.setItem('guest', JSON.stringify(guest));
        location.href = 'index.html';
    }

}

