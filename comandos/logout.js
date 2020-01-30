const Discord = require ('discord.js')
exports.run = async (client,message,args,Database) => {
let ID,IDD,Perm;
/*await client.users.forEach(x =>{
Database.Usuarios.findOne({_id: x.id}, function(erro, result) {   
  if(result)  
  if(result.idlogado == message.author.id) return Perm = 1;        
})})
*/
await Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, valor) {   
if(!valor) return message.reply("ERRO | Voce não está logado")
message.channel.send(`📊 | ${message.author} Voce fez Logout na Conta ${valor.nome}`)
Perm = 0;
valor.idlogado = 0;
valor.save();
})
}
exports.help = {
    name: 'logout'
}