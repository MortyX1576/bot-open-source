const Discord = require('discord.js')
const teste = require('../embed.json')

exports.run = async (client, message, args, Database) => {    
  Database.Guilds.findOne({ _id: message.guild.id}, function(erro, dados) {   
  dados.usuarios = {id: message.author.id,nome: message.author.name}
  dados.save(); 
  console.log(dados.usuarios)
  message.channel.send(dados.usuarios)
  })
}
exports.help = {
    name: 'teste'
}