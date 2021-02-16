const {uuid} = require('uuidv4');
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category_User.belongsTo(models.Subcategory);
      Category_User.belongsTo(models.User);
    }
  };
  Category_User.init({
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'Category_User',
  });
  Category_User.associate = models => {
    Category_User.belongsTo(models.User);
    Category_User.belongsTo(models.Subcategories);
  }
  Category_User.beforeCreate(category_user => {
    category_user.id = uuid();
    category_user.created_at = Date.now();
  })
  return Category_User;
};
