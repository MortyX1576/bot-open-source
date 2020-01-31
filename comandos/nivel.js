const Discord = require ('discord.js')

exports.run = async (client,message,args,Database) => {
Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, dados) {   
if(!dados) return message.reply(`${message.author}, você não está logado!`).then (msg => msg.delete(3 * 1000))

message.channel.send(`Nível de **${message.author.username}**`)
let embed = new Discord.RichEmbed()
.setTitle(`Informações | ${message.guild.name}`)
.setColor("RANDOM")
.addField(`• Nível:`, ```${dados.level}```)
.addField(`• XP:`, ```${dados.xp}```)
message.channel.send(embed)

})
}
exports.help = {
    name: 'nivel'
}