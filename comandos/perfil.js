const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.reply("Você não informou um membro válido!").then (msg => msg.delete(5 * 1000))

    
    const embed = new Discord.RichEmbed()
    .setTitle(`Informações do: ${member}!`)
    .addField('Usúario:', `${member}`)
    .addField('Id:', `ainda vou botar`)
    .addField('Data que entrou no servidor:', `ainda vou terminar`)
    .addField('Criou a conta em:', `ainda vou terminar`)
    .addField('Roles:', `terminando..`)
    .setImage(member.user.avatarURL)
    .setFooter(`Quem executou: ${message.author.tag}`, message.author.avatarURL)

    message.channel.send(embed)
}

exports.help = {
    name: 'perfil'
}