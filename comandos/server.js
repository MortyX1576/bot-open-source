const Discord = require('discord.js');
var request = require('request');

module.exports.run = async (bot, message, args) => {
    server = "jogar.redeharmony.com"
    let url = "http://mcapi.us/server/status?ip=jogar.redeharmony.com"
    request(url, function (err, response, body) {


        body = JSON.parse(body);
        const mensagem = {
            true: ':heavy_check_mark: Online',
            false: ':x: Offline'
        };
        const status = mensagem[body.online];


        let embed = new Discord.RichEmbed()
            .addField("Versão:", body.server.name, true)
            .addField("MOTD:", body.motd, true)
            .addField("Status:", status)
            .addField("Jogadores online:", body.players.now + "/" + body.players.max, true)
            .setFooter(message.author.username, message.author.displayAvatarURL)
            .setTimestamp()
        message.channel.send(embed)
    })
}