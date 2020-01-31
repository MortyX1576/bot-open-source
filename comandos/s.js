const Discord = require ('discord.js')

exports.run = (client, message, args) => {

   let channel = message.guild.channels.get('672850878344200228')

    const text = args.slice(0).join(' ')

    const embed = new Discord.RichEmbed()
    .setTitle(`Sugestão feita por ${message.author.tag}`)
    .setDescription(`**Sugestão do ${message.author}**.\n\n• Sugestão: `+ text)
    .setColor('#F0E68C')
    .setFooter(`Sugestão feito por: ${message.author.tag}!`, message.author.avatarURL)
    
    channel.send(embed)

}   // fechando o exports

exports.help = {
  name: 's'
}