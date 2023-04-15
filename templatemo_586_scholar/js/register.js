

// ! switch between login and registration forms

const registerSection = document.getElementById('register');
const loginSection = document.getElementById('login');
const logLink = document.getElementById('log');
const regLink = document.getElementById('reg');

logLink.addEventListener('click', () => {
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
});

regLink.addEventListener('click', () => {
    registerSection.style.display = 'block';
    loginSection.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
});

const registerForm = document.querySelector('#register form');
registerForm.addEventListener('submit', event => {
    event.preventDefault();
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
});

const loginForm = document.querySelector('#login form');
loginForm.addEventListener('submit', event => {
    event.preventDefault();
    registerSection.style.display = 'block';
    loginSection.style.display = 'none';
});



// ! validation register form 

let emailData = []
let PassData = []
let validateEmail, validateUsername, vaildatePassword, validatePhone

if (localStorage.emailData != null) {
    emailData = JSON.parse(localStorage.emailStorage)
    PassData = JSON.parse(localStorage.passwordStorage)
}

let Username
function usernameValidate() {
    const UsernameInput = document.getElementById("username")
    Username = UsernameInput.value;

    const regex = /^(?!\s)[a-zA-Z\S]{8,16}$/;

    if (regex.test(Username)) {
        console.log("valid userName")
        validateUsername = true
    } else {
        alert("Username must be between 8-16 character and no spaces")
        validateUsername = false

    }

}

let Password
function passwordValidate() {
    const PasswordInput = document.getElementById("password")
    Password = PasswordInput.value;
    // passowrd condition, more than 8 characters, with at least 1 number, uppercase, and special characters.
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(Password)) {
        console.log("valid Password")
        vaildatePassword = true

    } else {
        alert("Password must contain more than 8 characters, with at least 1 number, uppercase, and special characters. ")
        vaildatePassword = false

    }
    // checkPassValidate(Password)
}


let Email
function emailValidate() {
    const EmailInput = document.getElementById("email")
    Email = EmailInput.value;

    // email condition, email format
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regex.test(Email)) {
        console.log("valid email")
        validateEmail = true

    } else {
        alert("your email should be as Email format")
        validateEmail = false

    }

    if (emailData.includes(Email)) {
        alert("This Email is already exist, Log in")
    }
}


let Phone
function phoneValidate() {
    const PhoneInput = document.getElementById("phone")
    Phone = PhoneInput.value;

    const regex = /^07\d{8}$/;
    if (regex.test(Phone)) {
        console.log("valid phone number")
        validatePhone = true

    } else {
        alert("Phone number must contain 10 digits, starts with 07")
        validatePhone = false

    }
}





function checkValidate() {

    if (validateEmail === true && vaildatePassword === true && validatePhone === true && validateUsername === true) {
        emailData.push(Email)
        localStorage.setItem('emailStorage', JSON.stringify(emailData))
        // localStorage.setItem('passwordStorage', JSON.stringify(arrData))
        console.log(emailData)

        PassData.push(Password)
        localStorage.setItem('passwordStorage', JSON.stringify(PassData))
        console.log(PassData)

        location.replace('homePage.html')
    }


}





function validLogin() {
    if (localStorage.emailStorage != null) {

        let enterEmail = document.getElementById('loginEmail').value;
        let enterPass = document.getElementById('loginPass').value;

        let getEmail = JSON.parse(localStorage.emailStorage);
        let getPass = JSON.parse(localStorage.passwordStorage)

        console.log(enterEmail, enterPass, getPass, getEmail)

        if (enterEmail.includes(getEmail)) {
            let emailIndex = getEmail.indexOf(enterEmail)
            if (getPass[emailIndex] == enterPass) {
                location.replace('homePage.html')
            } else {
                alert("password invalid")

            }
        } else {
            alert("email invlaid")
        }
    }
}



// functions to hide and show the quizes on click at show quizes buttons
let show = document.getElementById("showbtn");
let htmlbtn = document.getElementsByClassName("hideQuizes");
let isVisible = false;

show.onclick = function () {
    if (!isVisible) {
        hideQuizes.style.visibility = "visible";
        isVisible = true;
    } else {
        hideQuizes.style.visibility = "hidden";
        isVisible = false;
    }
};


let show2 = document.getElementById("showbtn2");
let cssBtn = document.getElementById("hideQuizes2")
let isVisible2 = false;

show2.onclick = function () {
    if (!isVisible2) {
        hideQuizes2.style.visibility = "visible";
        isVisible2 = true;
    } else {
        hideQuizes2.style.visibility = "hidden";
        isVisible2 = false;
    }
}