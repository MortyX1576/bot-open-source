const Discord = require ('discord.js')

exports.run = (client,message,args,Database) => {
Database.Guilds.findOne({ _id: message.guild.id}, function(erro, dados) {  
let embed = new Discord.RichEmbed()
.setTitle("Prefixo | SMASH")
.setColor("RANDOM")
.setDescription(`Atualmente o prefixo é !, para alterar reaja com 🛠️`)
message.channel.send(embed).then(async mensagem => {
mensagem.react("🛠️")
})
}) //Banco de dados 
}
exports.help = {
    name: 'prefixo'
}
