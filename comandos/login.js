const Discord = require('discord.js')
exports.run = async (client, message, args,Database) => 
{    
if(!args[0]) return message.reply("Mencione Seu Nome")
if(!args[1]) return message.reply("Faltou sua senha")
let name = message.mentions.members.first() || args[0]
if(!name) return message.reply("Esse Usuario nao Existe")
Database.Usuarios.findOne({ _id: name.id || args[0]}, function(erro, dados) {   
//if(dados.logado == true) return message.reply("Voce ja está Logado")
if(client.users.forEach(x => x.id) == message.author.id) return message.reply("Voce já esta logado em uma Conta")
  console.log(client.users.forEach(x => x.id))
})
}
exports.help = {
    name: 'login'
}