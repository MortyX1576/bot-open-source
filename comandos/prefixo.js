const Discord = require ('discord.js')

exports.run = (client,message,args,Database) => {
Database.Guilds.findOne({ _id: message.guild.id}, function(erro, dados) {  
let embed = new Discord.RichEmbed()
.setTitle("Prefixo | SMASH")
.setColor("RANDOM")
.setDescription(`Atualmente o prefixo é **${dados.prefix}**, para alterar reaja com 🛠️`)
message.channel.send(embed).then(async mensagem => {
mensagem.react("🛠️")

let filter = (r,u)=>r.me && !u.bot
let collector = mensagem.createReactionCollector(filter);
collector.on('collect', r =>{
if(r.emoji.name === "🛠️")
message.reply("Digite um prefixo.")
{
var coletor = message.author.createMessageCollector(x => x.author.id == message.author.id)

dados.prefix = args[0]
dados.save();
}
})})}) //Banco de dados 
}
exports.help = {
    name: 'prefixo'
} 