const Sequelize = require('sequelize');

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const sequelize = new Sequelize('sdmm_flashcards', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
})

module.exports = sequelize;
