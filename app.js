var Discord = require("discord.js"); // Import discord.js
const bot = new Discord.Client(); // Create the discord client
const token = "[redacted]"; // The bot's user token
var prefix = "$"

bot.on("ready", () => {
    console.log("Smoke bot Ready!");
})

bot.on("message", message => {
    if(message.content.startsWith(prefix + "ping")) {
        message.reply("Pong!");
    } else if(message.content.startsWith(prefix + "kick")) {
        var a = message.
        message.channel.sendMessage("```" +  + "```")
    }
});

bot.login(token);
