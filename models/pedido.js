const { Sequelize } = require('sequelize');
const sequelize = require('../db')

module.exports = Produto = sequelize.define('produtos', {
  valor: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  cliente_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: { model: 'cliente', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
})

Produto.sync({ force: true })