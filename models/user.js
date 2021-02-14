const {uuid} = require('uuidv4');
const Sequelize = require('sequelize');
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    first_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    last_name: {
      allowNull: false,
      type:DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING},
    create_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(user => {
    user.id = uuid();
    user.created_at = Date.now();
  })
  return User;
};
