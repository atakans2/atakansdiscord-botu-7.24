const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`#AtaKaNs ${client.user.tag} sunucuya girş yaptı ve aktif!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam');
  }
});

client.login('NTM4OTM0Nzk1OTU1MjA4MTky.Dy7B3A.M9QHYxqZEhoEfrCzRjpfYT_3N6s');
