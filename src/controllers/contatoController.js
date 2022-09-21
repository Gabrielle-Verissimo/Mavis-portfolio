const nodemailer = require('nodemailer');
const Contato = require('../models/Contato');
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

        const contato = new Contato(req.body);
        contato.validator();
        if(contato.errors.length > 0){
            return res.redirect('/#contato');
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