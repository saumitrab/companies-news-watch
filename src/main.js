var googleFinance = require('google-finance');

var processNews = require('./processNews');

var pino = require('pino')();

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
  pino.info('Checking news updates');
  googleFinance.companyNews({
    symbols: SYMBOLS
  })
  .then(function(result) {
    processNews(result);
  })
  .catch(function(err) {
    pino.error(err);
  });
}

pino.info({newsFrequency: NEWS_FREQUENCY}, 'Starting News Check');
setInterval(checkNewsUpdates, NEWS_FREQUENCY * 60 * 1000); // Time in milliseconds

//Run once right away
checkNewsUpdates();
