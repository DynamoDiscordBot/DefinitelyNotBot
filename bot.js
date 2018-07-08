const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "l!";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {

    if (message.author.bot) return;

    const message = prefix + message.content;

    if (command === 'ping') {
        message.channel.send(Math.floor(client.ping));
      }
    if (command === 'bing') {
        message.reply('BONG!');
      }
});

// THIS  has to be here do not change it
client.login(process.env.BOT_TOKEN);
