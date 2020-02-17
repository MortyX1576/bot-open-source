const Discord = require('discord.js')
const teste = require('../embed.json')

exports.run = async (client, message, args, Database) => {    
console.log(message.guild.emojis)
}
exports.help = {
    name: 'emojis'
}