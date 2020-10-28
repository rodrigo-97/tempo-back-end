const { Sequelize } = require('sequelize');
const sequelize = require('../db')

module.exports = Produto = sequelize.define('produtos', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  valor: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  situacao: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

 Produto.sync({ force: true })