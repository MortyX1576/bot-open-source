const Discord = require('discord.js')
let Cont =0;
exports.run = async (client, message, args,Database) => 
{    
if(!args[0]) return message.reply("Mencione Seu Nome")
if(!args[1]) return message.reply("Faltou sua senha")
let name = message.mentions.members.first() || args[0]
if(!name) return message.reply("Esse Usuario nao Existe")
Database.Usuarios.findOne({ _id: name.id || args[0]}, function(erro, dados) {   
//if(dados.logado == true) return message.reply("Voce ja está Logado")
client.users.forEach(x =>{
if(message.author.id == x.id) return message.reply("Voce esta numa conta")
console.log("Voce logou")
})
/*
if(x.id != message.author.id)
{
if(dados.senha != args[1]) return message.reply("Senha Incorreta")
message.channel.send(`Voce Logou ${message.author}`)
dados.logado = true;
dados.idlogado = message.author.id;
dados.save();
}else{message.reply("Voce ja está em uma conta")}
*/
})
}
exports.help = {
    name: 'login'
}