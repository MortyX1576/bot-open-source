const Discord = require('discord.js')
exports.run = async (client, message, args, Database) => 
{   
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌ | Você não pode usar esse Comando')    
Database.Guilds.findOne({ _id: message.guild.id}, function(erro, dados) {
if(dados) 
{
let cargo = message.guild.roles.get(dados.cargo)
let embed = new Discord.RichEmbed()
.setTitle("Configuração do registro:")
.setDescription(`• Canal de Registros: ${message.guild.channels.get(dados.canal)}
• Cargo após Registrar: ${cargo}\n
Para alterar o canal de registro reaja '🔧' e para alterar o cargo reaja '🛠'`)
message.channel.send(embed).then(async x =>{
await x.react("🔧");await x.react("🛠")
let num1 = (reaction,usuario) => reaction.emoji.name === "🔧" && usuario.id === message.author.id;
const coletor1 = x.createReactionCollector(num1, {max: 1, time: 60000});
coletor1.on("collect", msg1 =>{ 
message.channel.send('⚒ | Coloque o Cargo para Setar! Use: @').then(msg2 => {
let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
.on('collect', c => {
let cargo = c.mentions.roles.first()  
if(!cargo) return message.channel.send(`🛑 | O Cargo ${cargo} Não Existe`)
message.channel.send(`✅ | Cargo do Registro alterado para ${cargo}`)
dados.cargo = cargo.id
dados.save();
})})
})//coletor
})//Mensagem
  
}}) //Banco de dados
  
}//Evento
exports.help = {
    name: 'config'
}