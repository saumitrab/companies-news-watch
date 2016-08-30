var SlackBot = require('slackbots');
var TOKEN = require('../data/token');

var BOT_NAME = 'Stock News';

var bot = new SlackBot({
  token: TOKEN,
  name: BOT_NAME
});

module.exports = bot;
