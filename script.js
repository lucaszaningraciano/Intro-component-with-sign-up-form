const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const small = document.querySelectorAll('.small-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    firstNameValidate();
    lastNameValidate();
    emailValidate();
    passwordValidate();

});

function setError(index){
    campos[index].style.border = "1px solid #e63636";
    small[index].style.display = "block";
}

function removeError(index){
    campos[index].style.border = "";
    small[index].style.display = "none";
}

function firstNameValidate(){
    if (campos[0].value === ""){
        setError(0);
    } else {
        removeError(0);
    }
}

function lastNameValidate(){
    if (campos[1].value === ""){
        setError(1);
    } else {
        removeError(1);
    }
}

function emailValidate(){
    if (!emailRegex.test(campos[2].value)) {
        setError(2);
    } else {
        removeError(2);
    }
}

function passwordValidate(){
    if (campos[3].value === ""){
        setError(3);
    } else {
        removeError(3);
    }
}
