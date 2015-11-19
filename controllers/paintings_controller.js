'use strict';
let express = require('express');
let router = express.Router();
let Painting = require('../models/painting');

//Routes

//Index
router.route('/')
  .get((req, res, next) => {
      Painting.find({}, (err, paintings) => {
        if (err) throw err;
        res.send(paintings);
        next();
      });
  })

  .post((req, res) => {
    let newPainting = new Painting({
      title: 'Rainy Day',
      img_url: 'www.picture.com',
      year_made: 2015
    });

    newPainting.save((err) => {
      if (err) throw err;
      console.log('Painting SAVED');
    });
    res.send('Saved');
  });


//Delete
router.route('/delete/:id')
  .delete((req, res, next) => {
    Painting.remove({_id: req.params.id}, (err, painting) => {
      if (err) throw err;
    })
  });


module.exports = router;
