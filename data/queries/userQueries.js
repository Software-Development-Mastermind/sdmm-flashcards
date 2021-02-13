const { QueryTypes } = require('sequelize');

export default class UserQueries {
  constructor(sequelize) {
    this.sequelize = sequelize;
  }
  static async getUser(sequelize, userId){
    return await sequelize.query(
      "SELECT * FROM users WHERE id = :id",
      {
        replacements: {id: userId},
        type: QueryTypes.SELECT
      }
    )
  }
}
