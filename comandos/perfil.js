const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.reply("Você não informou um membro válido!").then (msg => msg.delete(5 * 1000))

    let on = member.presence.status.replace("dnd", "Ocupado").replace("idle", "Ausente").replace("offline", "Invisível").replace("online", "Disponível").replace("stream", "Transmitindo")
    let cargos = message.member.roles.map(a => a.toString())
    const embed = new Discord.RichEmbed()
    .setDescription(`**Informações:**`)
    .addField('Usúario:', `${member}`, true)
    .addField('Usúario:', `${member.id}`, true)
    .addField('Status:', `**${on}**`, true) 
    .addField('Data que entrou no servidor:', `${member.joinedAt}`)
    .addField('Roles:', `${cargos}`)
    .setThumbnail(member.user.avatarURL)
    .setColor('GOLD')
    .setFooter(`Quem executou: ${message.author.tag}`, message.author.avatarURL)

     message.channel.send(embed)

}

exports.help = {
    name: 'perfil'
}