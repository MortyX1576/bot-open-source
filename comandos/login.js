const Discord = require('discord.js')
exports.run = async (client, message, args,Database) => 
{    
if(!args[0]) return message.reply("Mencione Seu Nome")
if(!args[1]) return message.reply("Faltou sua senha")
let name = message.mentions.members.first() || args[0]
if(!name) return message.reply("Esse Usuario nao Existe")
await Database.Usuarios.findOne({ _id: name.id || args[0]}, function(erro, dados) {  
if(!dados) return message.reply("Conta Inexistente")
message.delete();
if(dados.idlogado > 0) return message.reply("Alguem ja está nessa Conta")
//if(dados.logado == true) return message.reply("Voce ja está Logado")
if(dados.senha != args[1]) return message.reply("Senha Incorreta")
Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, valor) {     
if(valor) return message.reply("Voce ja está Logado")
message.channel.send(`Voce Logou na Conta ${dados.nome}`)
dados.logado = true;
dados.idlogado = message.author.id;
dados.save();
})
})
}
exports.help = {
    name: 'login'
}