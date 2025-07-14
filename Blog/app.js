// Importando as dependências necessárias, juntamente do módulo para manipulação de caminhos e URLs, o PATH
import express from 'express';
import expressHandlebars from 'express-handlebars';
import { Sequelize } from 'sequelize';
import path from 'path';
import { fileURLToPath } from 'url';

// Definindo as variáveis necessárias para o funcionamento da API
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Configurando o Handlebars como motor de visualização
app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' }));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'handlebars');

// Estabelecendo a conexão com o banco de dados MySQL.
const sequelize = new Sequelize('blog', 'root', '@Jhonata123', {
    host: 'localhost',
    dialect: 'mysql'
});

// Rotas
app.get('/cad', function(req, res){
    res.render('formulario')
});

app.listen(8081, function(){
    console.log('Servidor rodando com sucesso na porta 8081');
});