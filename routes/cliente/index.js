const express = require('express')

const rotas = express.Router()
const { listar, inserir, alterar, remover } = require('../../controladores/crud_cliente')


rotas.post("/inserir-cliente", async (req, res) => {
  try {

    const { nome, telefone, dataNascimento, situacao} = req.body

    const resultado = inserir(nome, telefone, dataNascimento, situacao)
    res.status(200).send(resultado)
  }catch (err){
    res.status(400).send(err)
  }
});

rotas.put("/alterar-cliente", async (req, res) => {
  try {
    const { id, nome, telefone, dataNascimento, situacao } =  req.body

    const resultado = alterar(id, nome, telefone, dataNascimento, situacao)
    res.status(200).send(resultado)
  }catch (err){
    res.status(400).send(err)
  }
});

rotas.get("/listar-clientes", async (req, res) => {
  const resultado = await listar()
  res.status(200).send(resultado);
})

rotas.delete("/remover-cliente", async (req, res) => {
  try {
    const id = req.body.id
    const resultado = remover(id)
    res.status(200).send(resultado);
  }catch(err){
    res.status(400).send(err)
  }
})

module.exports = rotas