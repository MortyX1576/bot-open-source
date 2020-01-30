const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.reply("Você não informou um membro válido!").then (msg => msg.delete(5 * 1000))

   let on = member.presence.status.replace("dn", "Não incomodar").replace("idle", " Ausente").replace("offline",  "Invisivel").replace("online", "Disponivel").replace("stream", "Transmitindo")

    const embed = new Discord.RichEmbed()
    .setDescription(`**Informações:**`)
    .addField('Usúario:', `${member}`, true)
    .addField('Id:', `ainda vou botar`, true)
    .addField('Status:', `${on}`, true)
    .addField('Data que entrou no servidor:', `ainda vou terminar`)
    .addField('Criou a conta em:', `ainda vou terminar`)
    .addField('Roles:', `terminando..`)
    .setThumbnail(member.user.avatarURL)
    .setFooter(`Quem executou: ${message.author.tag}`, message.author.avatarURL)

    message.channel.send(embed)
}

exports.help = {
    name: 'perfil'
}