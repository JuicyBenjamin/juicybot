"use strict";
exports.__esModule = true;
var DiscordJS = require("discord.js");
var discord_js_1 = require("discord.js");
var dotenv = require("dotenv");
dotenv.config();
var client = new DiscordJS.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES]
});
client.on('ready', function () {
    console.log('The bot is ready');
    if (client.user) {
        client.user.setActivity('The demise of Botnex!', { type: 'WATCHING' });
    }
    else {
        console.log('Benji you idiot, this fucking thing is null');
    }
});
client.on('messageCreate', function (message) {
    if (message.content.toLocaleLowerCase() === 'ping') {
        message.reply({
            content: 'pong'
        });
    }
});
client.login(process.env.DJS_TOKEN);
