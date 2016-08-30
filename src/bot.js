var SlackBot = require('slackbots');
var TOKEN = process.env.SLACK_TOKEN

var BOT_NAME = 'Stock News';

var bot = new SlackBot({
  token: TOKEN,
  name: BOT_NAME
});

module.exports = bot;
