var googleFinance = require('google-finance');
var _ = require('lodash');
var moment = require('moment');

var SYMBOLS = [
  'NASDAQ:AAPL',
  'NASDAQ:GOOGL',
  'NYSE:TWTR'
  ];

var NEWS_RECENCY = 24*60*2; // minutes

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

  _.each(result, function(news, symbol) {
      news.map(function(obj) {

        if ( moment(new Date(obj.date)).isSameOrAfter(moment().subtract(NEWS_RECENCY, 'minutes')) ) {
          console.log(obj.title);
          console.log(obj.link);
        }
      });
  });
}
