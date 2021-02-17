
exports.login = async (request, response) => {
  const { body } = request;

  response.cookie('sessionid', 2, {secure: false});
  response.status(201).send(body);
}