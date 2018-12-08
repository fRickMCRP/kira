const Files = require(require('path').join(__dirname, 'js', 'bot.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});

}
client.login(process.env.BOT_TOKEN)
