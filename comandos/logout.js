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
if(!valor) return message.reply("<:7685_no:671412271951380500> | Você não está logado.")
message.channel.send(`<:2990_yes:671412271985065996> | Você fez logout na conta ${valor.nome}.`).then (msg => msg.delete(5 * 1000))
Perm = 0;
valor.idlogado = 0;
valor.save();
})
}
exports.help = {
    name: 'logout'
}