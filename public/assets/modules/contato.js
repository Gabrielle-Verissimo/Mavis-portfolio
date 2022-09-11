const form = document.querySelector('.form');
const name = document.querySelector('input[name="name"]');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('#msg');

export default function initValidator(){
    form.addEventListener('submit', e => {
        e.preventDefault();
        formValidator(e);
    });
}

function formValidator(e){
    if(!name.value){
        name.classList.add('error');
    }
    if(name.value && (name.value.length < 4)){
        name.classList.add('error');
    }
    if(!email.value){
        email.classList.add('error');
    }
    if(email.value && !isEmail(email.value)){
        email.classList.add('error');
    }
    if(!message.value){
        message.classList.add('error');
    }

    e.target.addEventListener('change', changeValidator());
}

function changeValidator(){
    if(name.value){
        name.classList.remove('error');
    }
    if(email.value && isEmail(email)){
        email.classList.remove('error');
    }
}

function isEmail(email){
    let pattern = /.*@[^0-9.][a-z]*\..*/g;
    let result = false;
    if(pattern.exec(email)){
        result = true;
    }
    else{
        result = false;
    }

    return result;
}