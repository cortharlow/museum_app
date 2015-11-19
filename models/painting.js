'use strict';
let mongoose = require('mongoose');

let paintingSchema = new mongoose.Schema({
  title: String,
  img_url: String,
  year_made: Number
});

let Painting = mongoose.model('Painting', paintingSchema);

module.exports = Painting;
