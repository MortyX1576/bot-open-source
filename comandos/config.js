const Discord = require('discord.js')
exports.run = async (client, message, args, Database) => 
{   
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌ | Você não pode usar esse Comando')    
Database.Guilds.findOne({ _id: message.guild.id}, function(erro, dados) {
if (dados) {
let cargo = message.guild.roles.get(dados.cargo)
let embed = new Discord.RichEmbed()
.setTitle("Configuração do registro:")
.setDescription(`• Canal de Registros: ${message.guild.channels.get(dados.canal)}
• Cargo após Registrar: ${cargo}\n
Para alterar o canal de registro reaja '🔧' e para alterar o cargo reaja '🛠'`)
message.channel.send(embed).then(async x =>{
await x.react("🔧");await x.react("🛠")//Mensagem
}}
  )//Banco de dados
}//Evento
exports.help = {
    name: 'config'
}