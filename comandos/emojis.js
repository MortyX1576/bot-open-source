const Discord = require('discord.js')
const teste = require('../embed.json')

exports.run = async (client, message, args, Database) => {    
let emojis = message.guild.emojis.map(emoji =>{
console.log(emoji.name)
})
}
exports.help = {
    name: 'emojis'
}