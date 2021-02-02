const express = require('express')
const bodyParse = require ('body-parser')
const app = express()
app.use(bodyParse.json())
const port = 8080
const usuarioControllers = require ('./controllers/usuarios-controllers')
const tarefasControllers = require ('./controllers/tarefas-controllers')
const bd = require ('./infra/bd')
const Tarefas = require ('./models/tarefas')
const Usuario = require ('./models/usuarios')

const usr = new Usuario ("Gui", "gui@bol", "123");
console.log(usr)

usuarioControllers(app, bd);
tarefasControllers (app, bd);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});