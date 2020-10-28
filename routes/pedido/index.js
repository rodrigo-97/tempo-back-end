const express = require('express')
const Pedido = require('../../models/pedido')
const Cliente = require('../../models/cliente')

const rotas = express.Router()


rotas.post("/inserir-pedido", async (req, res) => {
  try {
    const { valor, cliente_id, dataPedido } = req.body

    const existeCliente = await Cliente.findByPk(cliente_id)

    if (!existeCliente) {
      res.status(400).send({ erro: "cliente não existe" })
    }

    const resultado = Pedido.create({
      valor,
      cliente_id,
      dataPedido
    })


    res.status(200).send(resultado)
  } catch (err) {
    res.status(400).send(err)
  }
});

rotas.get("/listar-pedidos", async (req, res) => {
  const resultado = await Pedido.findAll()
  res.status(200).send(resultado);
})

module.exports = rotas