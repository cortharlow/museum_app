'use strict';

let mongoose = require('mongoose');

let artistSchema = new mongoose.Schema({
  name: String,
  img_url: String,
  nationality: String,
  birthYear: Number,
  description: String
})

let Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
