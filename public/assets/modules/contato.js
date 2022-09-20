const form = document.querySelector('.form');
const name = document.querySelector('input[name="name"]');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('#msg');
const btn = form.querySelector('.btn-send');
let errorCounter = 0;

export default function initValidator(){
    form.addEventListener('submit', e => {
        e.preventDefault();
        formValidator();
    });
}

function formValidator(){
    let stringError = 'Preenchimento de campo obrigatório';
    if(!name.value){
        errorCounter++;
        name.classList.add('error');
        (errorMessage(stringError, name));
    }
    if(name.value && (name.value.length < 4)){
        errorCounter++;
        name.classList.add('error');
        (errorMessage('Nome deve conter mais que 3 letras', name));
    }
    if(!email.value){
        errorCounter++;
        email.classList.add('error');
        errorMessage(stringError, email);
    }
    if(email.value && !isEmail(email.value)){
        errorCounter++;
        email.classList.add('error');
        errorMessage('Insira um email válido', email);
    }
    if(!message.value){
        errorCounter++;
        message.classList.add('error');
        errorMessage(stringError, message);
    }

    if(errorCounter != 0){
        changeValidator();
    }
    else{
        //successMessage();
        form.submit();
        //sleep().then(() =>successMessage());
    }
}

function changeValidator(){
    btn.addEventListener('click', () => {
        if(errorCounter != 0){
            if(name.value){
                name.classList.remove('error');
                removeErrorMessage(name);
            }
            if(email.value){
                email.classList.remove('error');
                removeErrorMessage(email);
            }
            if(email.value && isEmail(email)){
                email.classList.remove('error');
                removeErrorMessage(email);
            }
            if(message.value){
                message.classList.remove('error');
                removeErrorMessage(message);
            }
            if(errorCounter != 0){
                removeErrorMessage(name);
                removeErrorMessage(email);
                removeErrorMessage(message);
            }      
        }
    });

}

function removeErrorMessage(input){
    const span = input.parentNode.querySelector('span');
    if(span){
        input.parentNode.removeChild(span);
        errorCounter--;
    }
};

function errorMessage(stringError, input){
    const inputParent = input.parentNode;
    const span = document.createElement('span');
    span.classList = 'error-message';
    span.innerHTML = stringError;
    inputParent.appendChild(span);
}

// function successMessage(){
//     let formFields = [name, email, message];
//     const span = document.createElement('span');
//     for(let i = 0; i < formFields.length; i++){
//         formFields[i].value = null;
//     }
//     span.classList = 'success-message';
//     span.innerHTML = 'Mensagem enviada com sucesso!';
//     form.appendChild(span);

//     //sleep().then(() => span.parentNode.removeChild(span));
// }

function sleep() {
    return new Promise(resolve => setTimeout(resolve, 5000));
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