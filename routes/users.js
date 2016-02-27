var express = require('express');
var router = express.Router();
var say = require('say');

router.get('/', function(req, res, next) {
    say.speak('No');
    say.speak('Brenda Here');
  res.send('respond with a resource');
});

module.exports = router;
