const Discord = require('discord.js')
const teste = require('../embed.json')

exports.run = async (client, message, args, Database) => {    
    Database.Guilds.findOne({ _id: message.guild.id}, function(erro, dados) {  
    let x = 1;
    dados.autorizados.push(x)
    dados.save();
    })
}
exports.help = {
    name: 'teste'
}