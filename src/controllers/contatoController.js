const nodemailer = require('nodemailer');
exports.sendMessage = async (req, res) => {
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.HOST_EMAIL,
            port: process.env.HOST_PORT,
            auth: {
                user: process.env.HOST_USER,
                pass: process.env.HOST_PASS
            }
        });
    
        const message = {
            from: `${req.body.name} <${req.body.email}>`,
            to: `gabrielleverissimo02@gmail.com`,
            subject: 'Enviado do site',
            text: `${req.body.message}`,
            html: `<p>${req.body.message}</p>`
        }

        transporter.sendMail(message);

        // else{
        //     req.flash('success', 'Mensagem enviada com sucesso');
        // }
        //validator(req.body);
        return res.redirect('/#contato');
    }
    catch(e){ 
        console.log(e);
        res.render('404'); 
    }
}

function validator({ name, email, message }){
    if(!name || !email || (email && !isEmail(email))|| !message){
        console.log('errors', 'Preencha todos os campos');
    }
}

// function cleanUp(){
//     for(let key in req.body){
//         if(typeof req.body[key] !== 'string'){
//             req.body[key] = '';
//         }
// }

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