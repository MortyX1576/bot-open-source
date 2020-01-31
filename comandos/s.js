const Discord = require ('discord.js')

exports.run = (client, message, args) => {

   let channel = message.guild.channels.get('672850878344200228')

    const text = args.slice(0).join(' ')

    const embed = new Discord.RichEmbed()
    .setTitle(`🔔 Sugestão`)
    .setDescription(` ``${text}``\n\nEnviada por ➝ ${message.author}\n\nDeixe seu feedback aqui em baixo.`)
    .setColor('#F0E68C')
    .setFooter(`Sugestão feito por: ${message.author.tag}!`, message.author.avatarURL)
    
    channel.send(embed).then (msg => msg.react('🎉'))

}   // fechando o exports

exports.help = {
  name: 's'
}