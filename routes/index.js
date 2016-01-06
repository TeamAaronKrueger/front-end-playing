var express = require('express');
var router = express.Router();
var model = require('../models/Deck');
var modelCards = require('../models/Card');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/welcome'); 
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

    router.get('/editdeck', function(req, res, next) {
      var currentDeck = "ChemistryQuiz"
      modelCards.find(function(error, cards){
          if (error) console.log(error);
          // var currentCards = [];
          // for (var card in cards) {
          //   if (card.DeckName == currentDeck) {
          //     currentCards.push(card);
          //   };
          // };
          // console.log(currentDecks)
          res.render('pages/editdeckview', {
            cards: cards,
            currentUser: req.user,
            currentDeck: currentDeck
            });
          });
        });




module.exports = router;
