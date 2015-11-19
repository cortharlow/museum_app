'use strict';

let express = require('express');
let router = express.Router();

// require model
let Artist = require('../models/artist');

// ROUTES

// index
// takes you to http://localhost:3000/artists/   (see app.js file)
router.route('/')
  .get((req, res, next) => {
    Artist.find({}, function(err, artists) {
      res.send(artists);
      next();
    })
  });

// create
router.route('/new')
  // .get((req, res, next) => {
  //   res.send('hit /new get!')
  //   next();
  // })
  .post((req, res, next) => {
    console.log('hit /new')
    // let artist = new Artist(req.body);
    let artist = new Artist({
      name: "Frida Kahlo",
      img_url: "http://40.media.tumblr.com/f8273eb43e8110ed507ea08f6e62a3a4/tumblr_mpjegk5o0W1rvtaqeo1_1280.jpg",
      nationality: "Mexican",
      birthYear: 1910,
      description: "Brilliant badass"
    })

    artist.save((err) => {
      if (err){
        res.send(err);
      }
      res.send(artist)
      next();
    })
  })

// // read/show
// takes you to http://localhost:3000/artists/564e1ba1b54cd7b2b04c72fe, for ex.
router.route('/:id')
  .get((req, res, next) => {
    Artist.find({_id: req.params.id}, function(err, artist){
      if (err) {
       res.send(err)
      }
      res.send(artist)
      next();
    })
    // ends .findOne
  })
  // ends .get


// edit
// router.route('/:id/edit')



// // delete
// router.route('/:id/delete')


module.exports = router;
