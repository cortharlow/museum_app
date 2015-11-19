'use strict';
let express = require('express');
let logger = require('morgan');
let path = require('path');
let bodyParser = require('body-parser');

let artistsRoutes = require('./controllers/artists_controller');
let paintingsRoutes = require('./controllers/paintings_controller');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

let Artist = require('./models/artist');
let Painting = require('./models/painting');

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/museumrApp');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', (callback) => {
  console.log('Mongoose Connected');
});

let router = express.Router();
app.use(router);
app.use('/paintings', paintingsRoutes);

let server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('express running', host, port);
});
