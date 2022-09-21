class Contato{
    constructor(body){
        this.body = body;
        this.errors = 0;
    }

    validator(){
        this.cleanUp();
        if(!this.body.name){
            this.errors++;
            //this.errors.push('Nome é um campo obrigatório');
        }
        if(!this.body.email){
            this.errors++;
            //this.errors.push('Email é um campo obrigatório');
        }
        if(this.body.email && ! this.isEmail(this.body.email)){
            this.errors++;
            //this.errors.push('Insira um email válido');
        }
        if(!this.body.message){
            this.errors++;
            //this.errors.push('Mensagem é um campo obrigatório');
        }
    }

    isEmail(email){
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
    cleanUp(){
        for(let key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }

        this.body = {
            name: this.body.name,
            email: this.body.email,
            message: this.body.message
        };
    }
}

module.exports = Contato;