const Discord = require ('discord.js')

exports.run = (client, message) => {
  
  const embed = new Discord.RichEmbed()
const Discord = require ('discord.js')

exports.run = (client, message) => {

    const embed = new Discord.RichEmbed()
    .setDescription("<:7685_no:671412271951380500> | Você não possui ``permissão`` para executar este comando.")
    .setColor('RED')
    .setFooter(message.author.tag, message.author.avatarURL)

    message.channel.send()
}

exports.help = {
  name: 'r'
}