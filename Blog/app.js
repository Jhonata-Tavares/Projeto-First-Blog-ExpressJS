import express from 'express';
import { ExpressHandlebars } from 'express-handlebars';
import { Sequelize } from 'sequelize';

const app = express();

// Configurando o Handlebars como motor de visualização
    app.engine('handlebars', new ExpressHandlebars({defaultLayout: 'main'}));
    app.views('views', 'handlebars')

// Estabelecendo a conexão com o banco de dados MySQL.
    const sequelize = new Sequelize('blog', 'root', '@Jhonata123', {
        host: 'localhost',
        dialect: 'mysql'
    });

app.listen(8081, function(){
    console.log('Servidor rodando com sucesso na porta 8081');
});