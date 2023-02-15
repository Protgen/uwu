const Discord = require('discord.js');
const fetch = require('node-fetch');

const client = new Discord.Client();
const prefix = '/';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'meme')) {
    const url = 'https://meme-api.herokuapp.com/gimme';
    const response = await fetch(url);
    const json = await response.json();

    const embed = new Discord.MessageEmbed()
      .setTitle(json.title)
      .setImage(json.url)
      .setFooter(`Provided by ${json.author}`);

    message.channel.send(embed);
  }
});

client.login('MTA3NTQ5ODExMjg1ODE5ODAxNw.GVDvnZ.N-u0zJ2LfZhIYO1Nh_h8CsExdwx2o_f0jfgSlM');
