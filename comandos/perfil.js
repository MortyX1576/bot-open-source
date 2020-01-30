const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.reply("Você não informou um membro válido!").then (msg => msg.delete(5 * 1000))

   let on = member.presence.status.replace("dnd", "Ocupado").replace("idle", "Ausente").replace("offline",  "Invisível").replace("online", "Disponível").replace("stream", "Transmitindo")

    const embed = new Discord.RichEmbed()
    .setDescription(`**Informações:**`)
    .addField('Usúario:', `${member}`, true)
    .addField('Id:', `${member.id}`, true)
    .addField('Status:', `**${member.on}**`, true)
    .addField('Data que entrou no servidor:', `ainda vou terminar`)
    .addField('Criou a conta em:', `ainda vou terminar`)
    .addField('Roles:', `${member.roles.get}`)
    .setThumbnail(member.user.avatarURL)
    .setFooter(`Autor: ${message.author.tag}`, message.author.avatarURL)

    message.channel.send(embed)
}

exports.help = {
    name: 'perfil'
}