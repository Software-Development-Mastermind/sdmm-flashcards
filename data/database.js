const Sequelize = require('sequelize');

const sequelize = new Sequelize('sdmm_flashcards', 'postgres', 'Password Goes Here', {
  host: 'localhost',
  dialect: 'postgres',
})

module.exports = sequelize;
