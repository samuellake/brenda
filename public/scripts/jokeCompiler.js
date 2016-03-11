var Twitter = require('./twitterHelper.js');
var Sentencer = require('./sentencerHelper.js');
var Gramophone = require('gramophone');

module.exports = function(keyword){

    var joke = new Promise(function(resolve, reject) {

        console.log(keyword);

        Twitter.get('search/tweets', {q: keyword, count: '100'}, function(error, tweets, response){

            var text;
            for(var i = 0; i < tweets.statuses.length; i++){
                text += tweets.statuses[i].text;
            }

            var scores = Gramophone.extract(text, {score: true, stopWords:[keyword, 'https']});
            console.log(scores);

            //var item1 = Sentencer.make("{{a_noun}}");
            //var item2 = Sentencer.make("{{presentVerb}}");

            var item1 = keyword;
            var item2 = scores[10].term;

            var punchline = Sentencer.make("{{an_adjective}} {{noun}}");

            var jokeString1 = `What's the difference between ${item1} & ${item2}?......... ${punchline}'`;
            var jokeString2 = `You know what ${item1} reminds me of?........... ${punchline} .... being racist`;

            if (jokeString1) {

                resolve(jokeString1);
            }
            else {
                reject(Error("It broke"));
            }
        });


    });

    return joke;

}