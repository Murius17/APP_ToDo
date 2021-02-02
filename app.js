const express = require('express')
const tarefaController = require("./src/controllers/tarefa_controller");
const usuariosController = require("./src/controllers/user_controller");

const app = express();

const port = 8000;

usuariosController(app);


app.listen(port, ()=> {console.log( '[INFO]: Servidor rodando em localhost: ${port} '));






