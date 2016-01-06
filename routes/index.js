var express = require('express');
var router = express.Router();
var model = require('../models/Deck');


/* GET home page. */
router.get('/', function(req, res, next) {

});

router.get('/mydecks', function(req, res, next) {
  model.find(function(error, decks){
      if (error) console.log(error);
      // var currentDecks = [];
      // for (var deck in decks) {
      //   if (deck.Public == false) {
      //     currentDecks.push(deck);
      //   }
      // };
      // console.log(currentDecks)
      res.render('pages/decks', {
        decks: decks,
        currentUser: req.user});
      });
    });



module.exports = router;
