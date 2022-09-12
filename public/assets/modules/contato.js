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
    let error = 'Preenchimento de campo obrigatório';
    if(!name.value){
        name.classList.add('error');
        (messageError(error, name));
    }
    if(name.value && (name.value.length < 4)){
        name.classList.add('error');
        (messageError('Nome deve conter mais que 3 letras', name));
    }
    if(!email.value){
        email.classList.add('error');
        messageError(error, email);
    }
    if(email.value && !isEmail(email.value)){
        email.classList.add('error');
        messageError('Insira um email válido', email);
    }
    if(!message.value){
        message.classList.add('error');
        messageError(error, message);
    }

    e.target.addEventListener('change', changeValidator());
}
//adicionar um evendo de click no botao enviar dentro de uma verificação se ainda existe erro
function changeValidator(){
    if(name.value){
        name.classList.remove('error');
        removeMessageError(name);
    }
    if(email.value){
        email.classList.remove('error');
        removeMessageError(email);
    }
    if(email.value && isEmail(email)){
        email.classList.remove('error');
        removeMessageError(email);
    }
    if(message.value){
        message.classList.remove('error');
        removeMessageError(message);
    }
}

function removeMessageError(input){
    const span = input.parentNode.querySelector('span');
    console.log(input.parentNode)
    input.parentNode.removeChild(span);
};

function messageError(error, input){
    const inputParent = input.parentNode;
    const span = document.createElement('span');
    span.classList = 'error-message';
    span.innerHTML = error;
    inputParent.appendChild(span);
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