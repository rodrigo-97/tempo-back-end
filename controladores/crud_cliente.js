const Cliente = require("../models/cliente")

module.exports = {
  inserir(_nome, _telefone, _dataNascimento, _situacao) {
    try {
      Cliente.create({
        nome: _nome,
        telefone: _telefone,
        dataNascimento: _dataNascimento,
        situacao: _situacao
      })
    } catch (err) {
      return err
    }
  },

  alterar(_id, _nome, _telefone, _dataNascimento, _situacao) {
    try {
      Cliente.update(({
        id: _id,
        nome: _nome,
        telefone: _telefone,
        dataNascimento: _dataNascimento
      }), {
        where: {
          id: _id
        }
      })
    } catch (err) {
      return err
    }
  },

  remover(_id) {
    try {
      Cliente.destroy({
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
      const result = await Cliente.findAll({
        attributes: ['id', 'nome', 'telefone', 'dataNascimento', 'situacao']
      })
      return result
    } catch (err) {
      return err
    }
  }
}