const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense-tracke', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
