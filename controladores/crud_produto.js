const Produto = require("../models/produto")

module.exports={
  async inserir(_nome, _valor, _situacao) {
    try {
      Produto.create({
        nome: _nome,
        valor: _valor,
        situacao: _situacao
      })
    } catch (err) {
      return err
    }
  },
  
  async alterar(_id, _nome, _valor, _situacao) {
    try {
      Produto.update(({
        id: _id,
        nome: _nome,
        valor: _valor,
        situacao: _situacao
      }), {
        where: {
          id: _id
        }
      })
    } catch (err) {
      return err
    }
  },
  
  async remover(_id) {
    try {
      Produto.destroy({
        where: {
          id: _id
        }
      })
    } catch (err) {
      return err
    }
  },
  
  async listar() {
    try {
      const result = await Produto.findAll({
        attributes: ['id', 'nome', 'valor', 'situacao']
      })
      return result
    } catch (err) {
      return err
    }
  }
}