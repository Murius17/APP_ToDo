module.exports = (app) => { 
    app.get('/tarefas', (req, res) => {
    res.send("<h1>Tarefas </h1>")
  });
}
app.post('/tarefas' , (req,res) => {
  console.log (req.body)
  res.send ("post funcionando em tarefas")
});