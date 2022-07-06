// addding the js part in the form validator.

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', (e) => {// to prevent the form from automatic submission
    e.preventDefault();
    
    checkInput();
})

function checkInput(){ 
 // get the values from the input
 const usernameValue = username.value.trim();
 const emailValue = email.value.trim();
 const passwordValue = password.value.trim();
 const password2Value = password2.value.trim();

 console.log('Usename',usernameValue);

 if(usernameValue === ''){
     setErrorFor(username,'username can not be blank');
 }
 else if(usernameValue.length < 6){
     setErrorFor(username, 'username must be atleast 6 characters long');
 }
 else {
    setSuccessFor(username,'Login Success');
 }

 //password.
if(passwordValue === ''){
    setErrorFor(password,'password can not be blank');
}
else if(password2Value != passwordValue){
    setErrorFor(password2, 'password mismatch');
}
else if(passwordValue.length < 8){
    setErrorFor(password, 'password must be atleast 8 characters long');
}
else {
    setSuccessFor(password,'Success');
}

//email
if(emailValue.indexOf("@")==-1 || emailValue.length > 6){
     setErrorFor(email, 'must include @');

 }
else if(emailValue === ''){
    setErrorFor(email,'email can not be blank');
}
else {
    setSuccessFor(email,'Success');
}

//password2
if(password2Value === ''){
    setErrorFor(password2,'password2 can not be blank');
}
else if(passwordValue != password2Value){
    setErrorFor(password2, 'password mismatch');
}
else if(password2Value.length < 8){
    setErrorFor(password2, 'password2 must be atleast 8 characters long');
}
else {
    setSuccessFor(password2,'Login success');
}

}
function setErrorFor(input, message){
    const formControl = input.parentElement;//.form- control in our html file.
    const small= formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class...
    formControl.className = 'form-control error';
}

function setSuccessFor(input, message){
    const formControl = input.parentElement;//.form- control in our html file.
    const small= formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class...
    formControl.className = 'form-control alert-info success';
}







// let cat = {name: 'Athena'}; //object
// function swap(felino){ //function
//     felino.name = 'wild';
//     felino = {name: 'Tabby'};

// }
// swap(cat);
// console.log(cat.name);















