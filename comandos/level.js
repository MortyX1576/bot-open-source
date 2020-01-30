const Discord = require ('discord.js')

exports.run = async (client,message,args,Database) => {
Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, dados) {   
if(!dados) return message.reply("Voce não está Logado")

message.channel.send(`Nível de **${message.author.username}**`)
let embed = new Discord.RichEmbed()
.setTitle(`Nível | ${message.guild.name}`)
.setColor("RANDOM")
.addField(`• Nível:`, `${dados.level}`)
.addField(`• XP:`, `${dados.xp}`)
message.channel.send(embed)

})
}
exports.help = {
    name: 'level'
}