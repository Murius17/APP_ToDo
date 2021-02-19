const Usuario = require('../models/usuarios')

module.exports = (app, bd) => {
    app.get('/user', (req, res) => {
        res.send(bd.usuarios)
    });

    app.get('/user/:nome', (req, res) => {
        for(let usr of bd.usuarios){
            if(usr.nome == req.params.nome){
                res.send(usr)
            }
        }
        res.send(`Usuário não encontrado`);
    });

    app.post('/user', (req, res) => {
        //utilizar o body (corpo) da requisição para criar novo usuário!
        const usr = new Usuario (req.body.nome, req.body.email, req.body.senha);
        bd.usuarios.push(usr);
        res.send("Post funcionando no user");
    });

    app.delete('/user/:nome', (req,res) => {
        let nDeletUser = [];
        for (let i=0; i < bd.usuarios.length; i++){
            if (bd.usuarios[i].nome !== req.params.nome){
                nDeletUser.push(bd.usuarios[i])
            }
        }
        bd.usuarios = nDeletUser;
        console.log(bd.usuarios);
        res.send ("Rota de deleção ativada!")
    });

    app.put('/user/:nome', (req,res)=> {
        for (const users of bd.usuarios) {
            if(req.params.nome === users.nome){
                users.nome = req.body.nome
            }
        }
        res.send ("Ok")
    })

};