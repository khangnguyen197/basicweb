var guest = localStorage.getItem('guest') ? JSON.parse(localStorage.getItem('guest')) :[];
var x = localStorage.getItem("Locate");
var input_txt = document.getElementById('input');

function showName(){
    var name = guest[x].user_name;
    document.getElementById('account').innerHTML= "Hi, "+name;
}
function Fibonaccy(input){
    if(input == 1 || input ==2) return 1;
    else return Fibonaccy(input-1)+Fibonaccy(input-2);
    
}
function Check(e){
    input = input_txt.value;
    if(Math.sign(input) != 1) {
        document.getElementById('input').style.border = '1px solid red';
        document.getElementById("errorinput").innerHTML="Input must be a positive number and greater than zero!";
        document.getElementById('result').innerHTML="Your Result";      
    } 
    else if(input > 41){
        document.getElementById('input').style.border = '1px solid red';
        document.getElementById("errorinput").innerHTML="Input should be less than 41 for best waiting time";
        document.getElementById('result').innerHTML="Your Result"; 
    }
    else{
        document.getElementById('input').style.border = '0.5px solid gray';
        document.getElementById("errorinput").innerHTML="";
        var kq=Fibonaccy(input);
        document.getElementById('result').innerHTML="Your Result: "+kq;
    }
}
function Logout(e){
    location.href="index.html";
}
function go_account(e){
    location.href="youraccount.htm";
}