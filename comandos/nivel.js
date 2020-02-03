const Discord = require ('discord.js')

exports.run = async (client,message,args,Database) => {
Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, dados) {   
if(!dados) return message.reply(`você não está logado!`).then (msg => msg.delete(3 * 1000))

let embed = new Discord.RichEmbed()
.setTitle("Smash - Nível")
.setDescription(`Abaixo está o xp e o level do ${message.author.username}!`)
.setColor("GREEN")
.addField(`• Nível:`, `\`\`\`${dados.level}\`\`\``) //dados.level
.addField(`• Xp:`, `\`\`\`${dados.xp}\`\`\``, true) // dados.xp
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp()

message.channel.send(embed)

})
}
exports.help = {
    name: 'nivel'
}