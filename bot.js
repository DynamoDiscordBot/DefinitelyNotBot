const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "l!";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {

    if (message.author.bot) return;

    var command = prefix + message.content.toLowerCase();

    if (command === 'ping') {
        message.channel.send(Math.floor(client.ping));
      }
    if (command === 'bing') {
        message.reply('BONG!');
      }
});

// THIS  IS  VERY  GAY
client.login(process.env.BOT_TOKEN);
