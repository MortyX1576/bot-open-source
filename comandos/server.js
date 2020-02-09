const Discord = require('discord.js');
var request = require('request');

module.exports.run = async (bot, message, args) => {
    let url = "http://mcapi.us/server/status?ip=mc.hypixel.net"
    request(url, function (err, response, body) {


        body = JSON.parse(body);
        const mensagem = {
            true: '🔸 Online',
            false: ':x: Offline'
        };
        const status = mensagem[body.online];


        let embed = new Discord.RichEmbed()
            .setAuthor(`Streen`, `https://eu.mc-api.net/v3/server/favicon/mc.hypixel.net`)
            .setDescription("Conecte-se em: **Colocar o ip aqui!**")
            .setThumbnail(`https://eu.mc-api.net/v3/server/favicon/2mc.hypixel.net`)
            .addField("Versão:", body.server.name)
            .addField("Status:", status, true)
            .addField("Jogadores online:", body.players.now + "/" + body.players.max, true)
            .setFooter(message.author.username, message.author.displayAvatarURL)
            .setTimestamp()
        message.channel.send(embed)
    })
}

exports.help = {
  name: 'server'
}