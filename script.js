const password=document.getElementById('password');
const validate=document.getElementById('password-validation');
const errorIcon=document.querySelector('.pass-error');


validate.addEventListener('blur', ()=> { validation(); });

function validation()
{
    if(password.value !== validate.value) 
    {
        console.log('hello');
        errorIcon.innerHTML="Passwords does not match!!";
        validate.classList.add('errorSpan');
        /*
        validate.style.backgroundColor="#f3d9d9";
        validate.style.borderColor="red";
        errorIcon.innerHTML="passwords doesnt match. poyi chaav!";
        */
    }
    else
    {
        errorIcon.innerHTML="";
        validate.classList.remove('errorSpan');
    }
}

