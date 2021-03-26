const bcrypt = require('bcryptjs');
const UserQueries = require('../data/queries/userQueries');

exports.adduser = (req, res, next) => {
  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  }


}

exports.getUserByEmail = (req, res, next) => {

}

exports.getUser = (req, res, next) => {

}

exports.editUser = (req, res, next) => {

}

exports.deleteUser = (req, res, next) => {

}
