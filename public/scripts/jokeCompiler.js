var Twitter = require('twitter');
var Sentencer = require('./sentencerHelper.js');
var Gramophone = require('gramophone');

var client = new Twitter({
    consumer_key: 'IxrJHT3pz3aOc0XKQkETUAlKR',
    consumer_secret: '6BhKVzjlJQf0OHPwpgughMUJwqG6PIDB48rHLiTWZQeZM0Eq8t',
    access_token_key: '74590140-rDl27wVTvvB30SIU2zOR3CTAqr0UNalvJ05GKWncd',
    access_token_secret: '6mP2b2ZYpq2FgM7wI0GVW5VpK9E7i5xu8Kc67xek3lRNo'
});
module.exports = function(keyword){

    var joke = new Promise(function(resolve, reject) {

        console.log(keyword);

        client.get('search/tweets', {q: keyword, count: '100'}, function(error, tweets, response){
            console.log(tweets.search_metadata);

            var text;
            for(var i = 0; i < tweets.statuses.length; i++){
                console.log(tweets.statuses[i].text);
                text += tweets.statuses[i].text;
            }

            var scores = Gramophone.extract(text, {score: true, stopWords:['clinton', 'https']});
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