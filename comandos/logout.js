const Discord = require ('discord.js')
let Perm;
exports.run = async (client,message,args,Database) => {
let ID;
client.users.forEach(x =>{
Database.Usuarios.findOne({ _id: x.id}, function(erro, result) {   
if(x.id == result.idlogado) return Perm = 1;
ID = x.id;
})})
if(Perm == 1)
{
Database.Usuarios.findOne({ idlogado: ID}, function(erro, valor) {   
message.channel.send(`📊 | ${message.author} Você não está mais Logado!`)
Perm = 0;
valor.idlogado = 0;
valor.save();
})
}
}
exports.help = {
    name: 'logout'
}