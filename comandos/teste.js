const Discord = require('discord.js')
const teste = require('../embed.json')

exports.run = async (client, message, args, Database) => {    
  Database.Guilds.findOne({ _id: message.guild.id}, function(erro, dados) {   
  let x = {id: message.author.id,nome: message.author.username}
  dados.usuarios = [x];
  dados.save(); 
  console.log(dados.usuarios)
  })
}
exports.help = {
    name: 'teste'
}