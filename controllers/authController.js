const { HTTPS } = process.env;

exports.login = async (request, response) => {
  const { body } = request;

  response.cookie('sessionid', 2, { secure: HTTPS === true });
  
  response.status(201).send(body);
}