const Discord = require('discord.js')
exports.run = async (client, message, args, Database) => 
{   
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌ | Você não pode usar esse Comando')    
Database.Guilds.findOne({ _id: message.guild.id}, function(erro, dados) {
if (dados) {
let cargo = message.guild.roles.get(dados.cargo)
let embed = new Discord.RichEmbed()
.setTitle("Status Atual")
.setDescription(`Canal de Registros: ${message.guild.channels.get(dados.canal)}
Cargo apos Registrar: ${cargo}\n\n
Para Alterar o Canal de Registro Reaja a '🔧' e Para Alterar o Cargo Reaja a '🛠 '`)
message.channel.send(embed).then(x =>{
x.react("🔧 ")
})//Mensagem
}}) //Banco de dados
}//Evento
exports.help = {
    name: 'config'
}