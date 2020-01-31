const Discord = require ('discord.js')

exports.run = (client, message) => {
  
  const embed = new Discord.RichEmbed()
  .setDescription("Reiniciando o bot.")
  .setFooter(message.author.tag, message.author.avatarURL)
  message.channel.send(embed)  
}
exports.help = {
  name: 'r'

}