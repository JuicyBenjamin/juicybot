"use strict";
exports.__esModule = true;
var DiscordJS = require("discord.js");
var discord_js_1 = require("discord.js");
var axios_1 = require("axios");
var dotenv = require("dotenv");
dotenv.config();
var client = new DiscordJS.Client({
    partials: ['CHANNEL'],
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES, discord_js_1.Intents.FLAGS.DIRECT_MESSAGES, discord_js_1.Intents.FLAGS.DIRECT_MESSAGE_TYPING]
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
    if (message.content.toLocaleLowerCase() === 'b') {
        message.reply({
            content: 'ß'
        });
    }
    if (message.channelId === '924233797086634015') {
        if (message.content.toLocaleLowerCase() === '!pasta') {
            axios_1["default"].get("".concat(process.env.COPYPASTA, "stories.json")).then(function (resp) {
                var stories = Object.values(resp.data);
                var randStory = stories[Math.floor(Math.random() * stories.length)];
                var story = 'story';
                if (story in randStory) {
                    //console.log(randStory.story);
                    message.channel.send(randStory.story);
                }
            });
        }
    }
    if (message.channel.type == 'DM') {
        console.log(message.author);
        if (message.author.id == process.env.JIB || message.author.id == process.env.JUICYBENJAMIN) {
            console.log(message.content);
            axios_1["default"]
                .post("".concat(process.env.COPYPASTA, "stories.json"), {
                story: message.content
            })
                .then(function (response) {
                console.log(response);
            });
        }
    }
});
client.login(process.env.DJS_TOKEN);
