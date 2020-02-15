const Discord = require('discord.js')
const teste = require('../embed.json')

exports.run = async (client, message, args, Database) => {    
Database.Guilds.findOne({ _id: message.guild.id},{id: [ "1", "2", "3"]})
}
exports.help = {
    name: 'teste'
}