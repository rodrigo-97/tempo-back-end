const express = require('express')

const rotas = express.Router()
const { listar, inserir, alterar, remover } = require('../../controladores/crud_produto')


rotas.post("/inserir-produto", async (req, res) => {
  try {
    const { nome, valor, situacao } = req.body

    const resultado = inserir(nome, valor, situacao)
    res.status(200).send(resultado)
  }catch (err){
    res.status(400).send(err)
  }
});

rotas.put("/alterar-produto", async (req, res) => {
  try {
    const { id, nome, valor, situacao } = req.body;

    const resultado = alterar(id , nome, valor, situacao)
    res.status(200).send(resultado)
  }catch (err){
    res.status(400).send(err)
  }
});

rotas.get("/listar-produtos", async (req, res) => {
  const resultado = await listar()
  res.send(resultado);
})

rotas.delete("/remover-produto", async (req, res) => {
  try {
    const id = req.body.id
    const resultado = remover(id)
    res.status(200).send(resultado);
  }catch(err){
    res.send(err)
  }
})

module.exports = rotas