
const Discord = require('discord.js')
exports.run = async (client, message, args,Database) => 
{    
if(!args[0]) return message.reply("<:7685_no:671412271951380500> | Mencione seu ``nome``.").then (msg => msg.delete(5 * 1000))
if(!args[1]) return message.reply("<:7685_no:671412271951380500> | Faltou sua ``senha``.").then (msg => msg.delete(5 * 1000))
let name = message.mentions.members.first() || args[0]
if(!name) return message.reply("<:7685_no:671412271951380500> | **Esse usuário não existe.**").then (msg => msg.delete(5 * 1000))
await Database.Usuarios.findOne({ _id: name.id || args[0]}, function(erro, dados) {  
if(!dados) return message.reply("<:7685_no:671412271951380500> | **Conta Inexistente.**").then (msg => msg.delete(5 * 1000))
message.delete();
if(dados.idlogado > 0) return message.reply("<:7685_no:671412271951380500> | Alguém já está em uma conta.").then (msg => msg.delete(5 * 1000))
//if(dados.logado == true) return message.reply("Voce ja está Logado")
if(dados.senha != args[1]) return message.reply("<:7685_no:671412271951380500> | **Senha incorreta.**").then (msg => msg.delete(5 * 1000))
Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, valor) {     
if(valor) return message.reply("<:7685_no:671412271951380500> | **Você já está logado.**").then (msg => msg.delete(5 * 1000))
message.channel.send(`<:2990_yes:671412271985065996> | Você logou na conta: ``${dados.nome}`` `).then (msg => msg.delete(5 * 1000))
dados.logado = true;
dados.idlogado = message.author.id;
dados.save();
})
})
}
exports.help = {
    name: 'login'
}