const {uuid} = require('uuidv4');
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subcategory.belongsTo(models.Category);
      Subcategory.hasMany(models.Flashcard);
      Subcategory.hasMany(models.Category_User);
    }
  };
  Subcategory.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    create_at: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'Subcategory',
  });
  Subcategory.associate = models => {
    Subcategory.belongsTo(models.Category);
    Subcategory.hasMany(models.Flashcard);
    Subcategory.hasMany(models.Category_User);
  }
  Subcategory.beforeCreate(subcategory => {
    subcategory.id = uuid();
    subcategory.created_at = Date.now();
  });
  return Subcategory;
};
