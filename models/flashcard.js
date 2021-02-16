const {uuid} = require('uuidv4');
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flashcard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flashcard.belongsTo(models.Subcategory);
    }
  };
  Flashcard.init({
    question: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    answer: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'Flashcard',
  });
  Flashcard.associate = models => {
    Flashcard.belongsTo(models.Subcategory);
  }
  Flashcard.beforeCreate(flashcard => {
    flashcard.id = uuid();
    flashcard.created_at = Date.now();
  })
  return Flashcard;
};
