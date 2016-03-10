var express = require('express');
var router = express.Router();
var say = require('say');
var jokeCompiler = require('../public/scripts/jokeCompiler');

router.get('/', function(req, res, next) {

  jokeCompiler(req.param('keyword')).then(function(result){
    console.log("joke", result);
    say.speak(result);
    res.send(result);
  });


});

module.exports = router;
