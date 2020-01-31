const Discord = require ('discord.js')

exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
  .setTitle("Reiniciando o bot.")
  .setFooter(message.author.tag, message.author.avatarURL)
  
}
exports.help = {
  name: 'r'

}