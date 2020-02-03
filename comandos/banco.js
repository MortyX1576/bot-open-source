const Discord = require ('discord.js')

exports.run = (client, message, args) => {
  
    const member = message.mentions.members.first() || message.member;

    const embed = new Discord.RichEmbed()
    .setTitle("Smash - Money")
    .setColor('GOLD')
    .setDescription(`O saldo do banco de ${member} é: R$34 reais.`)
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()

    message.channel.send(embed)
}
exports.help = {
    name: 'banco'
}