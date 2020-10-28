const { Sequelize } = require('sequelize');
const sequelize = require('../db')

module.exports = Cliente = sequelize.define('clientes', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dataNascimento: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  situacao: {
    type: Sequelize.STRING,
    allowNull: false
  }
})