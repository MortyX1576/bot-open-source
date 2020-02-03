const Discord = require ('discord.js')

exports.run = (client, message) => {

    const embed = new Discord.RichEmbed()
    .setDescription("Você não possui permissão para executar este comando.")
    .setColor('RED')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    
    message.channel.send(embed).then (msg => msg.delete(5 * 1000))
}

exports.help = {
  name: 'r'
}