const Discord = require ('discord.js')

exports.run = (client, message, args) => {

   let channel = message.guild.channels.get('672850878344200228')

    const sugestao = args.slice(0).join(' ')
    if(!sugestao) return message.reply("Use !s (sugestão)").then (msg => msg.delete(5 * 1000))

    const embed = new Discord.RichEmbed()
    .setTitle(`🔔 | Sugestão`)
    .setDescription(`${sugestao}\n\nEnviada por ➝ ${message.author}\n\nDeixe seu feedback aqui em baixo.`)
    .setColor('#F0E68C')
    channel.send(embed).then (msg => msg.react('🎉'))

}   // fechando o exports

exports.help = {
  name: 's'
}