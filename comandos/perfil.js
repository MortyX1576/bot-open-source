const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.reply("Você não informou um membro válido!").then (msg => msg.delete(5 * 1000))

    let on = member.presence.status.replace("dnd", "Ocupado").replace("idle", "usente").replace("offline",  "nvisível").replace("online", "Disponível").replace("stream", "Transmitindo")

    const embed = new Discord.RichEmbed()
    .setDescription(`**Informações:**`)
    .addField('Usúario:', `${member}`, true)
    .addField('Id:', `${member.id}`,true)
        addField('Status:', `**${on}**`, true)ue)
    .addField('Data que entrou no servidor:', `ainda vou terminar`)
    .addField('Criou a conta em:', `ainda vou terminar`)
    .addField('Cargos', `${message.member.roles.map(role => role.name)}`)  
    .setColor('GOLD')
    .nail(member.user.avatarURL)
    .setFooter(`Autor: ${message.author.tag}`)
     message.channel.send(embed) //pode reiniciar ?

}

exports.help = {
    name: 'perfil'
}