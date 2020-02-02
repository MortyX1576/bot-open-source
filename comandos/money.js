const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.get(args[0]);
  
    const embed1 = new Discord.RichEmbed()
    .setDescription(":no_entry_sign: | Informe um membro.")
    .setColor('RED')
    .setFooter(message.author.tag, message.autor.avatarURL)
    .setTimestamp()
    if (!member) return message.channel.send(embed1).then (msg => msg.delete(6 * 1000))
  
    const embed = new Discord.RichEmbed()
    .setTitle("💵 | Smash Money")
    .setDescription(`saldo do ${member} é de: R$45 reais. `)
    .setThumbnail("https://img.favpng.com/12/14/9/money-saving-icon-png-favpng-gFFpk3KdkbkyeawSuATTsdSHR.jpg")
    .setColor('GOLD')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
}//reinicia ae
exports.help = { 
    name: 'money'
}