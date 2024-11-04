const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('apipokedex', 'postgres', 'camaro01', {
  host: '127.0.0.1',
  dialect: 'postgres'
});

module.exports = sequelize;

