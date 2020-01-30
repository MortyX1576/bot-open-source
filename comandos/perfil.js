const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.reply("Você não informou um membro válido!").then (msg => msg.delete(5 * 1000))

    const embed = new Discord.RichEmbed()
    .setTitle(`Perfil do ${member}`)
    .addField('Usúario:', `${member}`)
    .setImage(member.user.avatarURL)
    .setFooter(`Quem executou: ${message.author}`)

    message.channel.send(embed)
}

exports.help = {
    name: 'perfil'
}