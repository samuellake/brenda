var express = require('express');
var router = express.Router();
var say = require('say');
var Twitter = require('../public/scripts/twitterHelper.js');
var jokeCompiler = require('../public/scripts/jokeCompiler');

router.get('/', function(req, res, next) {

Twitter.get('search/tweets', {q: '@MrSamLake', count: '100'}, function(error, tweets, response){

console.log('tweets', tweets);
for(var i = 0; i < tweets.statuses.length; i++){
    console.log(tweets.statuses[i].text);
}

  jokeCompiler(req.param('keyword')).then(function(result){
    console.log("joke", result);
    say.speak(result);
    res.send(result);
  });
});

});

module.exports = router;
