var Sentencer = require('sentencer');

Sentencer.configure({
  actions: {
    verb: function() {
      return 'whistle';
    },
    presentVerb: function() {
      var presentVerbs = ['whistling', 'whooping', 'singing', 'churning', 'yelling'];
      return presentVerbs[Math.floor(Math.random()*presentVerbs.length)];
    },
    pause: function(){
      return '.............';
    }
  }
});

module.exports = Sentencer;