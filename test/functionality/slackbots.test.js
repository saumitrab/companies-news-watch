var SlackBot = require('slackbots');
var TOKEN = require('../../data/token');

var bot = new SlackBot({
  token: TOKEN,
  name: 'Company News'
});

bot.on('start', function() {
  var params = {
    icon_emoji: ':cat:'
  };

  bot.postMessageToChannel('general', 'meow', params);

});
