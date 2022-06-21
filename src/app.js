const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const product = require('./models/Product');
const usuario = require('./models/Usuario');
const mensagem = require('./models/Mensagem');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

app.get("/", (req, res) => {
    return res.json({ ok: true });
})

// cadastrar usuário post//
app.post("/cadastrar-usuario", async (req, res) => {  
    const nomeUsuario = req.body.nome;
    const senhaUsuario = req.body.senha;
    
    const model = await usuario.create({
        nome: nomeUsuario,
        senha: senhaUsuario
    })

    return res.json(model)
})
app.listen(process.env.PORT || 3333, () => {
    console.log(`Server Start in Port ${process.env.PORT || 3333}`)
});
