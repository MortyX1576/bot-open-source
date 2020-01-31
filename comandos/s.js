const Discord = require ('discord.js')

exports.run = (client, message, args) => {

   let channel = message.guild.channels.get('672850878344200228')

    const text = args.slice(0).join(' ')

    const embed = new Discord.RichEmbed()
    .setTitle(`Sugestão do ${message.author}.`)
    .setDescription(`Sugestão: `+ text)
    .setColor('BLUE')
    
    channel.send(embed)

}   // fechando o exports

exports.help = {
  name: 's'
}