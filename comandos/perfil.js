const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.reply("Você não informou um membro válido!").then (msg => msg.delete(5 * 1000))

    let on = member.presence.status.replace("dnd", "Ocupado").replace("idle", "Ausente").replace("offline", "Invisível").replace("online", "Disponível").replace("stream", "Transmitindo")

    const embed = new Discord.RichEmbed()
    .setDescription(`**Informações:**`)
    .addField('Usúario:', `${member}`, true)
    .addField('Id:', `{member.id}`, true)
    .addField('Status:', `**${on}**`, true) 
    .addField('Data que entrou no servidor:', `ainda vou terminar`)
    .addField('Criou a conta em:', `ainda vou terminar`)
    .setThumbnail(member.user.avatarURL)
    .setColor('GOLD')
    .setFooter(`Quem executou: ${message.author.tag}`, message.author.avatarUR)

     message.channel.send(embed)

}

exports.help = {
    name: 'prefixo'
}  = {
    name: 'perfil'
}