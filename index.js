var googleFinance = require('google-finance');
var _ = require('lodash');
var moment = require('moment');
var SlackBot = require('slackbots');
var TOKEN = require('./data/token');

var SYMBOLS = [
  'NASDAQ:AAPL',
  'NASDAQ:GOOGL',
  'NYSE:TWTR'
  ];

var NEWS_RECENCY = 24*60*2; // minutes

var bot = new SlackBot({
  token: TOKEN,
  name: 'Company News'
});

/*
bot.on('start', function() {
  var params = {
    icon_emoji: ':cat:'
  };

  bot.postMessageToChannel('general', 'meow', params);

});
*/

googleFinance.companyNews({
  symbols: SYMBOLS
}).then(function(result) {
    processNews(result);
  })
  .catch(function(err) {
    console.log("Caught Error : " + err);
  });

var processNews = function (result) {
  console.log("Got news!");
  var update = "";

  _.each(result, function(news, symbol) {
      news.map(function(obj) {
        if ( moment(new Date(obj.date)).isSameOrAfter(moment().subtract(NEWS_RECENCY, 'minutes')) ) {
          //console.log(obj.title);
          //console.log(obj.link);
          update += obj.title + '\n';
          update += obj.link + '\n';
        }
      });
  });
  var params = {
    icon_emoji: ':cat:'
  };
  bot.postMessageToChannel('stock-news', update, params);
  //console.log(update);
}
