const Discord = require ('discord.js')

exports.run = async (client,message,args,Database) => {
Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, dados) {   
  
    const embed1 = new Discord.RichEmbed()
    .setDescription("Você não está logado!")
    .setColor('RED')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
  
if(!dados) return message.channel.send(embed1).then (msg => msg.delete(6 * 1000))

let embed = new Discord.RichEmbed()
.setTitle(`Informações do:` + message.author.tag)
.setDescription(`<a:9306a482c6f241c0b817721d332b3a4a:678314292029947954> Nível: **${dados.level}**\n<:serverboost:679041971611762774> Xp: **${dados.xp}**`)
.setColor('#7f7fff')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp()

message.channel.send(embed)

})
}
exports.help = {
    name: 'nivel'
}