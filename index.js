var googleFinance = require('google-finance');
var _ = require('lodash');

var SYMBOLS = [
  'NASDAQ:AAPL',
  'NASDAQ:GOOGL',
  'NYSE:TWTR'
  ];

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
        console.log(obj.title);
        console.log(obj.link);
      });
  });
}
