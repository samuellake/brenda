var express = require('express');
var router = express.Router();
var say = require('say');
var jokeCompiler = require('../public/scripts/jokeCompiler');

router.get('/', function(req, res, next) {
    say.speak(jokeCompiler());
  res.send('respond with a resource');
});

module.exports = router;
