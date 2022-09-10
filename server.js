require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const engine = require('consolidate');
const contatoController = require('./src/controllers/contatoController');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views')); //arquivos renderizados na tela (HTML, EJS)
app.engine('html', engine.mustache);
app.set('view engine', 'html');
// app.use(session({
//     secret:'lasthope',
//     saveUninitialized: true,
//     resave: true
// }));
app.get('/', (req, res) => {
    return res.render('index');
});

app.post('/send-message', contatoController.sendMessage);

app.listen(3000, () =>{
    console.log('Executando...');
    console.log('Acessar http://localhost:3000');
})