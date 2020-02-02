const Discord = require ('discord.js')

exports.run = (client, message) => {

    const member = message.mentions.members.first() || message.member;

    const embed = new Discord.RichEmbed()
    .setTitle("Smash Money")
    .addField('O saldo do @migueldeveloper é de:', ` ``R$45 reais.`` `)
    .setThumbnail("https://img.favpng.com/12/14/9/money-saving-icon-png-favpng-gFFpk3KdkbkyeawSuATTsdSHR.jpg")
    .setColor('GOLD')
    .setFooter(message.author.tag, message.author.avatarURL)

    message.channel.send(embed)
}
exports.help = { 
    name: 'money'
}