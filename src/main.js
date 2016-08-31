var googleFinance = require('google-finance');

var processNews = require('./processNews');

var SYMBOLS = [
  'NASDAQ:AAPL',
  'NASDAQ:GOOGL',
  'NYSE:TWTR',
  'NASDAQ:GRPN',
  'NASDAQ:FB',
  'NASDAQ:AMZN',
  'NYSE:STZ'
  ];

var NEWS_FREQUENCY = 5; // minutes

function checkNewsUpdates() {
  googleFinance.companyNews({
    symbols: SYMBOLS
  })
  .then(function(result) {
    processNews(result);
  })
  .catch(function(err) {
    console.log("Caught Error : " + err);
  });
}

setInterval(checkNewsUpdates, NEWS_FREQUENCY * 60 * 1000); // Time in milliseconds

//DEBUG
//checkNewsUpdates();
