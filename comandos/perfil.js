const Discord = require ('discord.js')
const moment = require("moment");
exports.run = async (client, message, args,Database) => {
   await Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, dados) {   
   if(!dados) return message.reply("Você não está Logado!")
     
     const embed1 = new Discord.RichEmbed()
     .setDescription()
       
       let on = dados.presence.status.replace("dnd", "Ocupado").replace("idle", "Ausente").replace("offline", "Invisível").replace("online", "Disponível").replace("stream", "Transmitindo")
     
     const embed = new Discord.RichEmbed()
    .setAuthor(`Informações do ${dados.nome}`)
    .addField('**• Dinheiro:**', dados.dinheiro, true)
    .addField('**• Banco:**', dados.banco, true)
    .addField('**• Xp:**', dados.xp, true)
    .addField('**• Level:**',  dados.level, true)
    .addField('**• Status:**',  `${on}`, true)
    .setThumbnail(message.member.user.avatarURL)
    .setFooter(dados.tag, message.member.user.avatarURL)
    .setColor('RANDOM')
    .setTimestamp()
     
     message.channel.send(embed)
   })
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
