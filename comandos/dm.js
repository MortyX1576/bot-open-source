const Discord = require ('discord.js')

exports.run = (client, message) => {
  
  message.author.createDM()
  message.author.send("eae")
}

exports.help = {
  name: 'dm'
}