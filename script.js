const password=document.getElementById('password');
const validate=document.getElementById('password-validation');
const errorIcon=document.querySelector('pass-error')

validate.addEventListener('blur', ()=> { validation(); });

function validation()
{
    if(password.value !== validate.value) 
    {
        console.log('hello');
    }
}