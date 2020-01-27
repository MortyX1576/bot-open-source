const Discord = require('discord.js')
exports.run = async (client, message, args, Database) => 
{   
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌ | Você não pode usar esse Comando')    
Database.Usuarios.findOne({ _id: message.author.id}, function(erro, dados) {
if (dados) {
let cargo = message.guild.roles.get(dados.cargo)
let embed = new Discord.RichEmbed()
.setTitle("Status Atual")
.setDescription(`Canal de Registros: ${dados.canal}
Cargo apos Registrar: ${cargo}`)
}})
}
exports.help = {
    name: 'ping'
}