const name = document.getElementsByName('name').value;
const email = document.getElementsByName('email').value;
const message = document.getElementsByName('message').value;

export default function initValidator(){
    formValidator();
}

function formValidator(){
    if(!name){
        console.log('Preencha o campo Nome');
    }
    if(!email){
        console.log('Preencha o campo Email');
    }
    if(email && validator.isEmail(email)){
        console.log('Insira um email valido');
    }
    if(!message){
        console.log('Preencha o campo Mensagem');
    }
}
