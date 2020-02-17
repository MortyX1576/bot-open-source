const Discord = require('discord.js')

exports.run = (client, message, args) => {
  
const grana = args[0]

const b = Number.isInteger(15);
  
message.channel.send(`\`\`\`${b}\`\`\``)
}

exports.help = {
  name:'f'
}