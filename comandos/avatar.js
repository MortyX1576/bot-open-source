const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.get(args[0]);

    const embed = new Discord.RichEmbed()
    .setDescription(`Avatar do ${member}!`)
    .setColor('RANDOM')
    .setImage(member.avatarURL)
    .setFooter(`Autor: ${message.author}`)
    .setTimestamp()

    message.channel.send(embed)

}