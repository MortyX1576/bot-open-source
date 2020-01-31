const Discord = require ('discord.js')

exports.run = (client, message, args) => {

   let channel = message.guild.channels.get('672850878344200228')

    const text = args[0].split(' / ')

    const embed = new Discord.RichEmbed()
    .setTitle(`Sugestão do ${message.author}.`)
    .setDescription(text)
    .setColor('DARK_AGUA')
    
    channel.send(embed)

}   // fechando o exports

exports.help = {
  name: 's'
}