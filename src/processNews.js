var _ = require('lodash');
var moment = require('moment');

var bot = require('./bot');

var NEWS_RECENCY = 4 * 60; // minutes

var BOT_EMOJI = ':cat:';

var processNews = function (result) {
  //console.log("Got news!");
  var update = "";

  _.each(result, function(news, symbol) {
      news.map(function(obj) {
        if ( moment(new Date(obj.date)).isSameOrAfter(moment().subtract(NEWS_RECENCY, 'minutes')) ) {
          update += obj.title + '\n';
          update += obj.link + '\n';
        }
      });
  });

  if ( update !== "" ) {
    var params = {
      icon_emoji: BOT_EMOJI
    };
    bot.postMessageToChannel('stock-news', update, params);
  }
}

module.exports = processNews;
