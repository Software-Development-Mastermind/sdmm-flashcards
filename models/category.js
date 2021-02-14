const {uuid} = require('uuidv4');
const Sequelize = require('sequelize');
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Category.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Category',
  });
  Category.beforeCreate(category => {
    category.id = uuid();
    category.created_at = Date.now()});
  return Category;
};
