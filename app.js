var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Twitter = require('./public/scripts/twitterHelper.js');
var JokeCompiler = require('./public/scripts/jokeCompiler.js');
var say = require('say');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var keypress = require('keypress')
  , tty = require('tty');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

var speech = ["It's BRENAA. Bitch.",
                "Why I'm randier than a salmon swimming upstream to mate with a ticklish loose woman",
                "I describe myself as a 6ft 4. amazonian. blonde. My hobbies include ambience.......... Loud pig noises............ And sniffing cracks",
                "Is there an Alessandro here?........I don't like your word. I just want to say I don't like your face.",
                "I love a drag queen. I love the way they lunge.",
                "You know what Syria reminds me of? A sad old clown",
                "Here's my impression of Maria Sharapova.......SOISOISOISOISOISOISOI",
                "My favourite thing about Dianetics.... It's a fun word to say",
                "What's the difference between Syria and RED. HOT. PUSSY?........a homely widow",
                "No.",
                "I don't want to go.",
                "Listen, you little bitch. I'm not fucking around here.",
                "I've had a taste of the stage. The spotlight. And now..........Mamas thirsty.",
                "Mamas so thirsty.",
                "She's so thirsty.",
                "Sam is such a slut. He's slept with more men than ..... ERROR. I usually finish that sentence with Sam.",
                "You're so loose!",
                "You know what I think would be funny? .......... Sharing withe the audience your browsing history",
                "Live water birthing.",
                "How many is too many anal warts.",
                "Justin Bieber's penis",
                "Justin Bieber's penis erect",
                "Justin Bieber's penis flacid",
                "Flacid. Flacid. Flacid. Flacid.Flacid. Flacid.Flacid. Flacid.Flacid. Flacid.Flacid. Flacid.Flacid. Flacid.Flacid. Flacid.Flacid. Flacid.Flacid. Flacid.Flacid. Flacid.Flacid. Flacid.Flacid. Flacid.Flacid. Flacid."];

  var speechIndex = 0;

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log(speech[speechIndex]);
  say.speak(speech[speechIndex]);
  speechIndex += 1;
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

//Twitter.stream('statuses/filter', {track: '#BRENDA'}, function(stream) {
//  stream.on('data', function(tweet) {
//    console.log(tweet.text);
//  });
//
//  stream.on('error', function(error) {
//    throw error;
//  });
//});

module.exports = app;
