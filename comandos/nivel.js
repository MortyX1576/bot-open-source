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
.setTitle("Smash - Nível")
.setDescription(`Abaixo está o seu xp e level!`)
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