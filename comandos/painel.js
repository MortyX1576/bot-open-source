const Discord = require('discord.js')
exports.run = async (client, message, args,Database) => {
Database.Guilds.findOne({ _id: message.author.id}, function(erro, dados) {   //Banco de dados
  
message.reply(`Verifique seu privado.`)
message.author.createDM()
let embed = new Discord.RichEmbed()
.setTitle('Informações')
.setColor('RANDOM')
.addField(`Seu nome: ${dados.nome}`)
.addField(`Seu level: ${dados.level}`)
.addField(`XP: ${dados.xp}`)
.addField(`Sua tag: ${dados.tag}`)
message.author.send(embed)
})
}
exports.help = {
    name: "painel"
}