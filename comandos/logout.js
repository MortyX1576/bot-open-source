const Discord = require ('discord.js')
let Perm;
exports.run = async (client,message,args,Database) => {
let ID,IDD;
client.users.forEach(x =>{
Database.Usuarios.findOne({_id: x.id}, function(erro, result) {   
  if(result)  
  if(result.idlogado == message.author.id) return Perm = 1;        
})})
if(Perm == 1)
{
Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, valor) {   
message.channel.send(`📊 | ${message.author} Você não está mais Logado!`)
Perm = 0;
valor.idlogado = 0;
valor.save();
})
}else{
message.channel.send("voce nao está logado")
}
}
exports.help = {
    name: 'logout'
}