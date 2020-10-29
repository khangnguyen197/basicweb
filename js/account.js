var guest = localStorage.getItem('guest') ? JSON.parse(localStorage.getItem('guest')) :[];
var x = localStorage.getItem("Locate");

function setValue(){
    var uname = guest[x].user_name;
    var firstname = guest[x].firstname;
    var lastname = guest[x].lastname;
    var birthday = guest[x].dayofbirth;
    document.getElementById('user').innerText= uname;
    document.getElementById('firstname').innerText= firstname;
    document.getElementById('lname').innerText= lastname;
    document.getElementById('birthday').innerText= birthday;
}
function changepass(e){
    location.href="changepassword.htm";
}
function changeinfo(e){
    location.href="changeinfo.htm";
}
function gobackhome(e){
    location.href="home.htm";
}

