const express = require('express')

const rotas = express.Router()
const { listar, inserir, alterar, remover } = require('../../controladores/crud_cliente')


rotas.post("/inserir-cliente", async (req, res) => {
  try {

    const { nome, telefone, dataNascimento, situacao} = req.body

    const resultado = inserir(nome, telefone, dataNascimento, situacao)
    res.send(resultado)
  }catch (err){
    res.send(err)
  }
});

rotas.put("/alterar-cliente", async (req, res) => {
  try {
    const cliente = {
      id: req.body.id,
      nome: req.body.nome,
      telefone: req.body.telefone,
      dataNascimento: req.body.dataNascimento
    }

    const resultado = alterar(cliente.id ,cliente.nome, cliente.telefone, cliente.dataNascimento)
    res.send(resultado)
  }catch (err){
    res.send(err)
  }
});

rotas.get("/listar-clientes", async (req, res) => {
  const resultado = await listar()
  res.send(resultado);
})

rotas.delete("/remover-cliente", async (req, res) => {
  try {
    const id = req.body.id
    const resultado = remover(id)
    res.send(resultado);
  }catch(err){
    res.send(err)
  }
})

module.exports = rotas