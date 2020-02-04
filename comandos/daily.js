const Discord = require('discord.js')

exports.run = async (client, message, args,Database) => 
{    

  
  
     /*const embed1 = new Discord.RichEmbed()
    .setDescription(":no_entry_sign: | Você não está logado.)
    .setColor('RED')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()*/
    // mensagem de erro
  
  
    const embed = new Discord.RichEmbed()
    .setDescription(`Você coletou o seu daily! Então recebeu `)
    .setColor('#eac7ff')
    .setFooter(message.author.tag, message.author.avatarURL)

    message.channel.send(embed)

}
exports.help = {
    name: 'daily'
}