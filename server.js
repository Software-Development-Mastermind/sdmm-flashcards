const express = require('express');
const https = require('https');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./data/database');
const path = require('path');
const bodyParser = require("body-parser");

require('dotenv').config();

const { HTTPS, PORT } = process.env;
console.log(HTTPS);

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, "client", "build")));

app.use('/api/auth', authRoutes);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

sequelize.sync()
  .then(result => {
    console.log("Connected to Database");
    if (HTTPS === 'true') {
      const fs = require('fs');
      const key = fs.readFileSync('./key.pem');
      const cert = fs.readFileSync('./cert.pem');
      const server = https.createServer({key: key, cert: cert }, app);
      // unable to connect to HTTPS on chrome?
      // open Chrome
      // navigate to chrome://flags/
      // see https://superuser.com/questions/772762/how-can-i-disable-security-checks-for-localhost
      server.listen(PORT || 3000, () => { console.log('listening on ' + PORT || 3000) });
    } else {
      app.listen(PORT || 3000);
    }
  })
  .catch(err => {
    console.log(err);
  });

