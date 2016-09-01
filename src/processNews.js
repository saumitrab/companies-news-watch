var _ = require('lodash');
var moment = require('moment');

var bot = require('./bot');

var pino = require('pino')();

var NEWS_RECENCY = 5; // minutes

var BOT_EMOJI = ':cat:';

var processNews = function (result) {
  var update = "";

  _.each(result, function(news, symbol) {
      var logSymbolNewsTS = {symbol: symbol, newsTimestamps: []};
      news.map(function(obj) {
        logSymbolNewsTS.newsTimestamps.push(moment(new Date(obj.date)).format('x'));
        if ( moment(new Date(obj.date)).isSameOrAfter(moment().subtract(NEWS_RECENCY, 'minutes')) ) {
          update += obj.title + '\n';
          update += obj.link + '\n';
        }
      });
      pino.info({logSymbolNewsTS: logSymbolNewsTS}, 'Received news updates');
  });

  if ( update !== "" ) {
    var params = {
      icon_emoji: BOT_EMOJI
    };
    bot.postMessageToChannel('stock-news', update, params);
    pino.info({data: update.length},'News update sent');
  }
}

module.exports = processNews;
