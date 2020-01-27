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
Para Alterar o Canal de Registro Reaja a '🔧' e Para Alterar o Cargo Reaja a '🛠'`)
message.channel.send(embed).then(async x =>{
await x.react("🔧");await x.react("🛠")
let filtro = (reaction,usuario) => reaction.emoji.name === "🔧"  && usuario.id === message.author.id 
const coletor = x.creatrReactionCollectior(filtro,{max: 1,time: 30000})
coletor.on("collect",msg =>{
message.channel.send("Coloque o Cargo para setar apos o Registro! Use: @")
let c1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
.on('collect', c => {
cargo = c.mentions.roles.first()
if(!cargo) return message.channel.send(`❌ | O Cargo ${cargo} Não Existe`)
dados.cargo
})
})  
})//Mensagem
}}) //Banco de dados
}//Evento
exports.help = {
    name: 'config'
}