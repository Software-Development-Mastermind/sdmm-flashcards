var jwt = require('jsonwebtoken');
const UserQueries = require('../data/queries/userQueries');
const { HTTPS } = process.env;

exports.login = async (request, response) => {
  const { body } = request;

  const user = await UserQueries.getUserByEmail(body.email);

  if (user.length === 0) return response.status(404).send({ errorMessage: 'Username does not exist or password does not match' });

  const jwtPayload = {
    user: user
  }

  const jwtOptions = {
    expiresIn: "7d"
  }

  const token = jwt.sign(jwtPayload, "secretkey", jwtOptions);

  response.cookie('sdmm-fc-sid', token, { secure: HTTPS === 'TRUE' });
  
  response.status(201).send(body);
}