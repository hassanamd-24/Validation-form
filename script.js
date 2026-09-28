const signupForm = document.getElementById("signup-form");
const nameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passError = document.getElementById("pass-error");

signupForm.addEventListener("submit",(event) =>{
    // This stops the browser from instantly reloading the page!
    event.preventDefault();
    // Reset all error messages to empty on every click, so old errors disappear
    nameError.innerText = "";
    emailError.innerText = "";
    passError.innerText = "";
    user = nameInput.value.trim();
    email = emailInput.value.trim();
    pass = passInput.value.trim();

    if(user == ""){
        nameError.innerText = "Please write your name!";
    }
    if(email == "" || ! email.includes(".com")){
        emailError.innerText = "Enter a valid email address!"
    }
    if(pass.length < 8){
        passError.innerText = "Password too short!"
    }
    if(nameError.innerText == "" && emailError.innerText == "" && passError.innerText == ""){
        alert("Account created successfully!")
        nameInput.value = "";
        passInput.value = "";
        emailInput.value = "";
        
    }
});

const eyebtn = document.getElementById("toggle-pass");

eyebtn.addEventListener("click",() =>{
    if(passInput.type === "password" ){
        passInput.type = "text";
    }else{
        passInput.type = "password";
    }
    eyebtn.classList.toggle("fa-eye");
    eyebtn.classList.toggle("fa-eye-slash");
});