var guest = localStorage.getItem('guest') ? JSON.parse(localStorage.getItem('guest')) :[];
var x = localStorage.getItem("Locate");
var inputnewFirstName = document.getElementById('new_fname');
var inputnewLastName = document.getElementById('new_lname');
var inputnewBirthday = document.getElementById('new_birthday');

function check_new_first_name(temp){
    var RegExpression = /^[a-zA-Z\s]*$/; 

    if(temp == ''){
        document.getElementById('new_fname').style.border = '1px solid red';
        document.getElementById('new_fname').value="";
        document.getElementById('new_fname').placeholder = "Please enter first name";
        return false;
    }
    else if(!temp.match(RegExpression)){
        document.getElementById('new_fname').style.border = '1px solid red';
        document.getElementById('new_fname').value="";
        document.getElementById("new_fname").placeholder="Name must not have accents and includes letters only";
        return false;
    }
    else{
        document.getElementById('new_fname').style.border = '0.5px solid lightgrey';
        return true;
    }
}
function check_new_last_name(temp){
    var RegExpression = /^[a-zA-Z\s]*$/; 

    if(temp == ''){
        document.getElementById('new_lname').style.border = '1px solid red';
        document.getElementById('new_lname').value="";
        document.getElementById('new_lname').placeholder = "Please enter last name";
        return false;
    }
    else if(!temp.match(RegExpression)){
        document.getElementById('new_lname').style.border = '1px solid red';
        document.getElementById('new_lname').value="";
        document.getElementById("new_lname").placeholder="Name must not have accents and includes letters only";
        return false;
    }
    else{
        document.getElementById('new_lname').style.border = '0.5px solid lightgrey';
        return true;
    }
}
function check_new_birthday(temp){
    var d = new Date();
    //get day of birth
    var d2 = new Date($('#new_birthday').val());
    if(temp == ''){
        document.getElementById('new_birthday').style.border = '1px solid red';
        return false;
    } else if(d2 > d){   
        document.getElementById('new_birthday').style.border = '1px solid red';
        return false;
    }
    else{
        document.getElementById('new_birthday').style.border = '0.5px solid lightgrey';
        return true;
    }
}
function setData(){
    document.getElementById('new_fname').value=guest[x].firstname;
    document.getElementById('new_lname').value=guest[x].lastname;
    document.getElementById('new_birthday').value=guest[x].dayofbirth;
}
function savechange(e){
    var new_fname = inputnewFirstName.value;
    var new_lname = inputnewLastName.value;
    var new_day = inputnewBirthday.value;
    check_new_first_name(new_fname);
    check_new_last_name(new_lname);
    check_new_birthday(new_day);
    if(check_new_birthday(new_day) == true && check_new_first_name(new_fname)==true
    && check_new_last_name(new_lname) == true){
        guest[x].firstname = new_fname;
        guest[x].lastname = new_lname;
        guest[x].dayofbirth = new_day;
        localStorage.setItem('guest',JSON.stringify(guest));
        location.href="youraccount.htm";
    }
}
function gobackhome(e){
    location.href="home.htm";
}

