const Discord = require('discord.js')
const teste = require('../embed.json')

exports.run = async (client, message, args, Database) => {    
  Database.Guilds.findOne({ _id: message.guild.id}, function(erro, dados) {   
  let val = args[0];
  dados.teste.remove(val)
  dados.save(); 
  console.log(dados.teste)
  })
}
exports.help = {
    name: 'teste'
}