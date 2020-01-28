const Discord = require('discord.js')
let VALUE;
exports.run = async (client, message, args,Database) => 
{    
if(!args[0]) return message.reply("Mencione Seu Nome")
if(!args[1]) return message.reply("Faltou sua senha")
let name = message.mentions.members.first() || args[0]
if(!name) return message.reply("Esse Usuario nao Existe")
Database.Usuarios.findOne({ _id: name.id || args[0]}, function(erro, dados) {   
//if(dados.logado == true) return message.reply("Voce ja está Logado")
client.users.forEach(x =>{
Database.Usuarios.findOne({ _id: x.id}, function(erro, result) {   
if(x.id == dados.idlogado) return VALUE = 1;
})})
if(VALUE == 1) return message.reply("Voce ja está Logado")
if(dados.senha != args[1]) return message.reply("Senha Incorreta")
message.channel.send(`Voce Logou na Conta ${dados.nome}`)
dados.logado = true;
dados.idlogado = message.author.id;
dados.save();
VALUE = 0;
})
}
exports.help = {
    name: 'login'
}