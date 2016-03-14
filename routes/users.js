var express = require('express');
var router = express.Router();
var say = require('say');
var keypress = require('keypress');
var tty = require('tty');
var Twitter = require('../public/scripts/twitterHelper.js');
var jokeCompiler = require('../public/scripts/jokeCompiler');

var keypress = require('keypress')
  , tty = require('tty');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

if (typeof process.stdin.setRawMode == 'function') {
  process.stdin.setRawMode(true);
} else {
  tty.setRawMode(true);
}
process.stdin.resume();

router.get('/', function(req, res, next) {

    res.send('blah');



//    Twitter.get('search/tweets', {q: '@MrSamLake', count: '100'}, function(error, tweets, response){
//
//        for(var i = 0; i < tweets.statuses.length; i++){
//            var term = tweets.statuses[i].text.replace("@MrSamLake","").replace("#BRENDA", "")
//            if(term.split(" ").length > 2){
//             jokeCompiler(term).then(function(result){
//                    console.log("joke", result);
//            //        say.speak(result);
//            //        res.send(result);
//                  });
//            }
//        }
//
//  });

});

module.exports = router;
