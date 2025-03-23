const REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let button = document.querySelectorAll("button");


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", e => {
        e.preventDefault();
        validateEmail(e);   
    });
}


const validateEmail = (button)=> {   
    const parentElement = button.target.previousElementSibling;
    const emailElement = parentElement.querySelector("input");
    const errorMessage = parentElement.querySelector(".error-message");

    if(!REGEX.test(emailElement.value)) {
        setError(emailElement, errorMessage);
    } else {
        setSuccess(emailElement, errorMessage);
    }
}

const setSuccess = (emailElement, errorMessage)  => {
    emailElement.classList.remove("invalid");
    errorMessage.classList.remove("error-message-css");
    errorMessage.textContent = "";
}

const setError = (emailElement, errorMessage) => {
    errorMessage.textContent = "Please check your email";
    errorMessage.classList.add("error-message-css");
    emailElement.classList.add("invalid");
}







