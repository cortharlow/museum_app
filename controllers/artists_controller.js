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
  // EDIT the artist
  .put((req, res) => {
    console.log('hit artist edit route!');
    // let foundArtist = Artist.find({_id: req.params.id});
    // test route -- define birthYear
    Artist.find({_id: req.params.id}, function(err, artist){
      // let birthYear = artist.birthYear
      if (err) {
        res.send(err);
      }
      // test case for curl command
      artist[0].birthYear = 1907;
      artist[0].save();
      res.send(artist[0].name +  ' updated!');
      // for (birthYear in artist) {
        // artist[0].birthYear = 1907;
      // }
      // for (prop in req.body) {
      //   artist[prop] = req.body[prop];
      // }
      // artist.save(function(err) {
      //   if (err) {
      //     res.send(err);
      //   }
      //   res.json( { message: 'Artist updated!'})
      // })
    })
  })
  // delete an artist
  .delete((req, res) => {
    console.log('hit delete route');
    Artist.remove({_id: req.params.id}, (err, artist) => {
      if (err) throw err;
      res.send('Artist deleted!');
    });
  });


// edit
router.route('/:id/edit')



// // delete
// router.route('/:id/delete')


module.exports = router;
