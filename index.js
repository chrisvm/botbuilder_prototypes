var builder = require('botbuilder');

// connector to the terminal
var connector = new builder.ConsoleConnector().listen();

// create the bot
var bot = new builder.UniversalBot(connector);
bot.dialog('/', [
	function (session) {
		builder.Prompts.text(session, "Hi! What's your name?");
	},
	function (session, result) {
		session.send('Hello %s!', result.response);
	}
]);
