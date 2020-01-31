
const Discord = require('discord.js')
exports.run = async (client, message, args,Database) => 
{    
if(!args[0]) return message.reply("Mencione Seu Nome")
if(!args[1]) return message.reply("Faltou sua senha")
let name = message.mentions.members.first() || args[0]
if(!name) return message.reply("Esse Usuario nao Existe")
await Database.Usuarios.findOne({ _id: name.id || args[0]}, function(erro, dados) {  
if(!dados) return message.reply("Conta Inexistente.").then (msg => msg.delete(5 * 1000))
message.delete();
if(dados.idlogado > 0) return message.reply("Alguém já está em uma conta.").then (msg => msg.delete(5 * 1000))
//if(dados.logado == true) return message.reply("Voce ja está Logado")
if(dados.senha != args[1]) return message.reply("Senha incorreta.").then (msg => msg.delete(5 * 1000))
Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, valor) {     
if(valor) return message.reply("Voce já está logado.").then (msg => msg.delete(5 * 1000))
message.channel.send(`Você logou na conta: ${dados.nome}!`).then (msg => msg.delete(5 * 1000))
dados.logado = true;
dados.idlogado = message.author.id;
dados.save();
})
})
}
exports.help = {
    name: 'login'
}