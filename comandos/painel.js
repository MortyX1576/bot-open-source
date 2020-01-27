const Discord = require('discord.js')
exports.run = async (client, message, args,Database) => {
Database.Usuarios.findOne({ _id: message.author.id}, function(erro, dados) {   //Banco de dados
message.reply(`Verifique seu privado.`)
message.author.createDM()
let embed = new Discord.RichEmbed()
.setTitle('Informações')
.setColor('#a118da')
.addField(`📌 Seu nome:`, `**${dados.nome}**`)
.addField(`Seu level:`, `**${dados.level}**`)
.addField(`🔐 Sua senha:`, `||**${dados.senha}**||`)
.addField(`XP:`, `**${dados.xp}**`)
.addField(`Sua tag:`, `**${dados.tag}**`)
message.author.send(embed)
})
}
exports.help = {
    name: "painel"
}