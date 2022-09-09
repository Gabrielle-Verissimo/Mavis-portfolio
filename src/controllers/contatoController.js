const validator = require('validator');

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
        if(!req.body.name || !req.body.email || (req.body.email && !validator.isEmail(req.body.email))|| !req.body.message){
            req.flash('errors', 'Preencha todos os campos');
        }
        else{
            req.flash('success', 'Mensagem enviada com sucesso');
        }
        return res.redirect('/#contato');
    }
    catch(e){ console.log(e) }
}