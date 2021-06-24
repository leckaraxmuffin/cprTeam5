//Anmeldung

let timer = setInterval(checkSignIn, 100);

let input_name = document.getElementById('name');
let error_name = document.getElementById('error-name');
let error_n = true;
let input_email = document.getElementById('email');
let error_email = document.getElementById('error-email');
let error_e = true;
let input_pw1 = document.getElementById('password');
let error_pw1 = document.getElementById('error-pw1');
let error_p1 = true;
let input_pw2 = document.getElementById('passwordCheck');
let error_pw2 = document.getElementById('error-pw2');
let error_p2 = true;

let term = document.getElementById('agree-term');
let term_error = document.getElementById('error-term');
let sign = document.getElementById('submit');



let val1;
let signSubmit;
let final = document.getElementById('signup-form');

input_name.addEventListener('keyup', validateName);
input_email.addEventListener('keyup', validateEmail);
input_pw1.addEventListener('keyup', validatePW);
input_pw2.addEventListener('keyup', PWchecked);
sign.addEventListener('click', signIn);

sign.style.opacity = '0.5';


function checkSignIn() {
    if (error_n || error_p1 || error_p2 || error_n) {
        sign.style.opacity = '0.5';
        signSubmit = false;
    }
    if (error_n == false && error_p1 == false && error_p2 == false && error_n == false) {
        signSubmit = true;
        sign.style.opacity = '1';
        console.log('true');
        clearInterval(timer);
    }
}

function validateName() {

    let val = input_name.value;
    if (val.length <= 2) {
        error_name.style.display = 'block';
        error_name.innerHTML = 'Min. 3 Zeichen';
        error_n = true;
    } else {
        error_name.style.display = 'none';
        error_n = false;
    } checkSignIn();
  
}
function validateEmail() {

    let val = input_email.value;
    if (val.length <= 4 || val.includes('@') == false || val.includes('.') == false) {
        error_email.style.display = 'block';
        error_email.innerHTML = 'Es müssen mindestens 5 Zeichen lang sein und @ . enthalten';
        error_e = true;
    } else {
        error_email.style.display = 'none';
        error_e = false;
    } checkSignIn();
}

function validatePW() {

    val1 = input_pw1.value;
    if (val1.length <= 7) {
        error_pw1.style.display = 'block';
        error_pw1.innerHTML = 'Min. 8 Zeichen';
        error_p1 = true;
    } else {
        error_pw1.style.display = 'none';
        error_p1 = false;
    } checkSignIn();
}
function PWchecked() {

    let val2 = input_pw2.value;
    if (val1 != val2) {
        error_pw2.style.display = 'block';
        error_pw2.innerHTML = 'Sie müssen das selbe Passwort eingeben';
        error_p2 = true;
    } else {
        error_pw2.style.display = 'none';
        error_p2 = false;
    }
    checkSignIn();
}

let myObjekt = { users: [] };

class Anmeldung{
    constructor(name,email,passwort){
        this.name = name;
        this.email = email;
        this.passwort = passwort;
    }
}

function signIn() {
    if (signSubmit) {
        console.log('ok')
        if (term.checked == false) {
            term_error.style.display = 'block';
            term_error.innerHTML = 'Please agree all terms of services';

        } else {
           
            document.location.href = 'anmeldung2.html';
        }


    }
}
