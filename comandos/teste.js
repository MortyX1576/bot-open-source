const Discord = require('discord.js')
const teste = require('../embed.json')
exports.run = async (client, message, args) => {    
  
  message.channel.send(teste.embed)
  
}
exports.help = {
    name: 'teste'
}