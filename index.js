require("./src/modelsandconnections/db1");
require("./src/modelsandconnections/db2");
const express = require('express');
const routes = require('./src/routes/userRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const port = 3300;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

