var googleFinance = require('google-finance');

var SYMBOLS = [
  'NASDAQ:AAPL',
  'NASDAQ:GOOGL',
  'NASDAQ:MSFT',
  'NASDAQ:YHOO',
  'NYSE:IBM',
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

var processNews = function (news) {
  console.log("Got news!");
  var text = JSON.stringify(news, null, '\t');
  console.log(text);
}
