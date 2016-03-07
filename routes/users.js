var express = require('express');
var router = express.Router();
var say = require('say');
var jokeCompiler = require('../public/scripts/jokeCompiler');

router.get('/', function(req, res, next) {

  var joke = jokeCompiler();
  say.speak(joke);
  res.send(joke);
});

module.exports = router;
