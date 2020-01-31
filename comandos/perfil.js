const Discord = require ('discord.js')
const moment = require("moment");
exports.run = (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.reply("Você não informou um membro válido!").then (msg => msg.delete(5 * 1000))
    let tempo = member.user.joinedAt
    let on = member.presence.status.replace("dnd", "Ocupado").replace("idle", "Ausente").replace("offline", "Invisível").replace("online", "Disponível").replace("stream", "Transmitindo")
    let cargos = message.member.roles.map(a => a.toString())
    const embed = new Discord.RichEmbed()
    .setDescription(`**Informações:**`)
    .addField('Usúario:', `${member}`, true)
    .addField('Id:', `${member.id}`, true)
    .addField('Status:', `**${on}**`, true) 
    .addField('Data que entrou no servidor:', formatDate('DD/MM/YYYY, às HH:mm:ss', tempo))
    .addField('Criou a conta em:', `${member.createdAt}`)
    .addField('Roles:', `${cargos}`)
    .setThumbnail(member.user.avatarURL)
    .setColor('GOLD')
    .setFooter(`Quem executou: ${message.author.tag}`, message.author.avatarURL)

     message.channel.send(embed)

}
exports.help = {
    name: 'perfil'
}
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}
