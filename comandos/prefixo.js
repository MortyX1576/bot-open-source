const Discord = require ('discord.js')

exports.run = (client,message,args,Database) => {
Database.Guilds.findOne({ _id: message.guild.id}, function(erro, dados) {  
let embed = new Discord.RichEmbed()
.setTitle("Prefixo | SMASH")
.setColor("RANDOM")
.setDescription(`Atualmente o prefixo é **${dados.prefix}**, para alterar reaja com 🛠️`)
.setTimestamp()
.setFooter(`Autor do comando: ${message.author.username}`, message.author.avatarURL);
message.channel.send(embed).then(async mensagem => {
mensagem.react("🛠️")

let filtro = (reaction,usuario) => reaction.emoji.name === "🛠️" && usuario.id === message.author.id
const collector = mensagem.createReactionCollector(filtro, {max: 1, time: 60000})
collector.on('collect', r =>{
if(r.emoji.name === "🛠️")
message.reply("Digite um prefixo.")
{
let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
.on("collect", c=>{
let prefixo = c.content;
dados.prefix = prefixo;
dados.save();
message.channel.send(`Prefixo trocado para ${prefixo}`)
})} //Coletor
})})}) //Banco de dados 
}
exports.help = {
    name: 'prefixo'
} 