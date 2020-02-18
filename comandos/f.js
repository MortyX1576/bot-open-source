const Discord = require('discord.js')

exports.run = (client, message, args) => {
  
const grana = 15

const b = Number.isInteger(grana, 10);
  
message.channel.send(`\`\`\`${b}\`\`\``)
}

exports.help = {
  name:'f'
}