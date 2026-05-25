const express = require('express')
const app = express()

app.use(express.json())

const produtos = [];

for(let i = 1; i <= 100; i++){
    produtos.push({
        id:1,
        nome: `Produto ${i}`,
        preco: Math.floor(Math.random() * 1000)
    })
}

app.get('/produtos', (req,res) =>{

    setTimeout(() => {

        res.json(produtos)
    }, 100)
})

app.post('/produtoa', (req,res) =>{

    const produto = {
        id: produtos.length + 1,
        ...req.body
    }

    produtos.push(produto)
    console.log(produtos.length)
    res.status(201).json(produto)
})

app.listen(3000, () => {
    console.log("Servidor rodnado na porta 3000")
})