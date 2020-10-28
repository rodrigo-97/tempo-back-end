const { Sequelize } = require('sequelize');
const sequelize = require('../db')

module.exports = Produto = sequelize.define('pedidos', {
  valor: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  dataPedido: {
    type: Sequelize.DATE,
    allowNull: false
  },
  cliente_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: { model: 'clientes', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
})


// Produto.sync({ force: true })