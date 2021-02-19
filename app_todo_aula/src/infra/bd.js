const a = require('../models/usuarios');
const b = require('../models/tarefas');

module.exports = {
    usuarios: [new a ("Gui","gui@gmail.com","senhaforte"),
                new a ("nome02", "nome02@gmail.com", "senhaforte123")],
    tarefas: [new b ("abc","alfabeto","em andamento","primordios"),
                new b ("123","numeros","em andamento","era das cavernas")]
}