const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.reply("Você não informou um membro válido!").then (msg => msg.delete(5 * 1000))
   const embed = new Discord.RichEmbed()
    .setTitle(`Perfil:`)
    .addField('Usúario:', `${member}`)
    .addField('Roles:', `ainda vou botar`)
    .addField('Data que entrou no servidor:', `ainda vou terminar`)
    .addField('Roles:', `terminando!`)
    .setThumbnail(member.user.avatarURL)
    .setFooter(`Quem executou: ${message.author.tag}`, message.author.avatarURL)

    message.channel.send(embed)

    console.log(message.guild.member.roles);
  }

exports.help = {
    name: 'perfil'
}