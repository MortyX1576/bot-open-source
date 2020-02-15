const Discord = require('discord.js')
const teste = require('../embed.json')

exports.run = async (client, message, args, Database) => {    
    Database.Guilds.findOne({ _id: message.guild.id}, function(erro, dados) {  
    let x = ["1","2","3"]   
    dados.teste = x;
    dados.save();
    })
}
exports.help = {
    name: 'teste'
}