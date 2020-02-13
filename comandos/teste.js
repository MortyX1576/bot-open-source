const Discord = require('discord.js')
const teste = require('../embed.json')
exports.run = async (client, message, args) => {    
  console.log(teste)
  message.channel.send(teste.embed)
  
}
exports.help = {
    name: 'teste'
}