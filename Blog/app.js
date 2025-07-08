import express from 'express';
import expressHandlebars from 'express-handlebars';
import { Sequelize } from 'sequelize';

const app = express();

// Configurando o Handlebars como motor de visualização
app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' }));
app.set('views', './views');
app.set('view engine', 'handlebars');

// Estabelecendo a conexão com o banco de dados MySQL.
const sequelize = new Sequelize('blog', 'root', '@Jhonata123', {
    host: 'localhost',
    dialect: 'mysql'
});

app.listen(8081, function(){
    console.log('Servidor rodando com sucesso na porta 8081');
});