var jwt = require('jsonwebtoken');
const { HTTPS } = process.env;

exports.login = async (request, response) => {
  const { body } = request;

  const jwtPayload = {
    user: {}
  }

  const jwtOptions = {
    expiresIn: "7d"
  }

  const token = jwt.sign(jwtPayload, "secretkey", jwtOptions);

  response.cookie('sdmm-fc-sid', token, { secure: HTTPS === 'TRUE' });
  
  response.status(201).send(body);
}