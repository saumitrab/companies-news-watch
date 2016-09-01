var SlackBot = require('slackbots');
var TOKEN = process.env.SLACK_TOKEN

var BOT_NAME = 'Stock News';
var pino = require('pino')();

var bot = new SlackBot({
  token: TOKEN,
  name: BOT_NAME
});
pino.info('SlackBot created!');

module.exports = bot;
