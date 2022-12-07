// step:1
document.getElementById("btn-submit").addEventListener('click',function(){
    // step:2
const inputField = document.getElementById("user-email");
const email = inputField.value;
// step:3
 const userPassword = document.getElementById("user-password");
const password =  userPassword.value;

// setp:4
if(email === 'sontan@bap.com' && password === 'bal'){
    window.location.href = 'bank.html';
}
else{
   alert('tui passwod vula gaso toka ami tajjo gosona korlam');
}

})
