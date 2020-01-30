const http = require('http');
const express = require('express');
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express();
const cookieParser = require('cookie-parser')

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/', require('./routes/routes'))

app.listen(process.env.PORT, () => console.log('Rodando com sucesso na porta ' + process.env.PORT))