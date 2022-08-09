require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const engine = require('consolidate');
const nodemailer = require('nodemailer');
const flash = require('connect-flash');

//async function sendMail()
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'views')); //arquivos renderizados na tela (HTML, EJS)
app.engine('html', engine.mustache);
app.set('view engine', 'html');
app.get('/', (req, res) => {
    const name = 'Gabrielle'
    return res.render('index', { name });
});

app.post('/send-message', async (req, res) => {
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

        transporter.sendMail(message, () => {
            console.log('enviado com sucesso');
        })

        return res.redirect('/#contato');
    }
    catch(e){ console.log(e) }
})

app.listen(3000, () =>{
    console.log('Executando...');
    console.log('Acessar http://localhost:3000');
})