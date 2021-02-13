const { QueryTypes } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../database');

class UserQueries {
  static async getUser(userId){
    return await sequelize.query(
      "SELECT * FROM users WHERE id = :id",
      {
        replacements: {id: userId},
        type: QueryTypes.SELECT
      }
    )
  }
  static async createUser(user){
    return await sequelize.query(
      "INSERT INTO users VALUES(:first_name, :last_name, :email, :password)",
      {
        replacements: {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password: user.password,
        },
        type: QueryTypes.INSERT,
      }
    )
  }
  static async updateUser(user){
    return await sequelize.query(
      "UPDATE users " +
      "SET first_name = :first_name, last_name = :last_name, email = :email, password = :password" +
      "WHERE id = :id",
      {
        replacements: {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password: user.password,
          id: user.id,
        },
        type: QueryTypes.UPDATE,
      }

    )
  }
  static async deleteUser(userId){
    return await sequelize.query(
      "DELETE FROM users WHERE id = :id",
      {
        replacements: {
          id: userId,
        },
        type: QueryTypes.DELETE
      }
    )
  }
}

module.exports = UserQueries;
