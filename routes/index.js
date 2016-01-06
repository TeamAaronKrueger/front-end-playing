var express = require('express');
var router = express.Router();
var model = require('../models/Card');


/* GET home page. */
router.get('/', function(req, res, next) {
  var currentDeck = "ChemistryQuiz";
  model.find(function(err, cards) {
    res.render('pages/welcome', {
    cards : cards
    });
    });
});

router.get('/deck', function(req, res, next) {
  var currentDeck = req.params.deck;
  res.render('pages/deckview', { user: req.user });
});



module.exports = router;
