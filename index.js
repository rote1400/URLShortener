// Project skeleton and creating the server
const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'pug');

const data = require('./data/app-data.js');
data.seedData();
//console.log(data.urls);

const mvcController = require('./controllers/mvc-controller.js');
mvcController.setup(app, data);

let port = process.argv[2];
if (!port) port = process.env['PORT'];
if (!port) port = 8080;

app.listen(port, () => {
  console.log(`App started at http://localhost/${port}.`);
})
  .on('error', (err) => {
    console.error(`Cannot start listening on port: ${port}`);
  });