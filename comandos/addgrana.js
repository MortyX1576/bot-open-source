const Discord = require ('discord.js')

exports.run = (client, message, args) => {
  
  const member = message.mentions.members.first() || message.guild.members.get(args[0])
  
  const embed = new Discord.RichEmbed()
  .setDescription("✅ | Você adicionou R$(morty bota aq) reais na conta do ${member}")
  .setColor('WHITE')
  
  message.channel.send(embed).then (msg => msg.delete(8 &))
}