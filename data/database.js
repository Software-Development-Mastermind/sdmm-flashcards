const Sequelize = require('sequelize');

const sequelize = new Sequelize('sdmm_flashcards', 'postgres', 'Ma105gic', {
  host: 'localhost',
  dialect: 'postgres',
})

module.exports = sequelize;
