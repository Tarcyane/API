const express = require("express")
const app = express()
const port = 3002
app.use(express.json())
const usuarios = []
app.post('/usuarios', (req, res)=>{
    const usuario = req.body //"pega" os dados da requisição 
    usuarios.push(usuario) //adiciona o usuário na lista 
    res.send("Usuário cadstro com sucesso!")

})


app.get('/usuarios', (req, res)=>{
    res.send(usuarios) 

})

app.get("/ola", (req,res)=>{
    res.send('olá 3°DS!')
})

app.listen(port,()=>{
    console.log("API rodando...") 
} )



