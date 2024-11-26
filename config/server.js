const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index'); // Caminho para o arquivo de rotas

// Middleware para parser de JSON e URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usando as rotas definidas
app.use('/', indexRoutes);

// Definir a porta do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
