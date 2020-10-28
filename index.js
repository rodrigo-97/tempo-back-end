const express = require('express')
const cors    = require('cors')
const PORTA   = 3333
const app     = express()

const rotasCliente = require ('./routes/cliente')
const rotasProduto = require ('./routes/produto')
const rotasPedido = require ('./routes/pedido')

app.use(cors())
app.use(express.json())
app.use(rotasCliente)
app.use(rotasProduto) 
app.use(rotasPedido) 


app.listen(PORTA, () => console.log("Servidor iniciado na porta " + PORTA))