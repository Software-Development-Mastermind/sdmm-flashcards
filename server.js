const express = require('express');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./data/database');
const path = require('path');
const bodyParser = require("body-parser");

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
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });

