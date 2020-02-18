const Discord = require ('discord.js')
const moment = require("moment");
exports.run = async (client, message, args,Database) => {
   await Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, dados) {   
   if(!dados) return message.reply("Você não está Logado!")
     
     const embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setDescription(`<:money:679059862591635475> Dinheiro: **${dados.dinheiro}**\n<:bank:679061278370693130> Banco: **${dados.banco}**\n<:serverboost:679041971611762774> Xp: **${dados.xp}**\n<a:9306a482c6f241c0b817721d332b3a4a:678314292029947954> Nível: **${dados.level}**`)
    .setColor('RANDOM')

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
