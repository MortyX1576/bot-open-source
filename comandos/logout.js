const Discord = require ('discord.js')
let Perm;
exports.run = async (client,message,args,Database) => {
let ID,IDD;
client.users.forEach(x =>{
Database.Usuarios.findOne({ _id: x.id}, function(erro, result) {   
//if(x.id == result.idlogado) return Perm = 1;
  ID = message.author.id;IDD = x.id;
  console.log(`Database ${IDD} Usuario$ {ID}`)  
  console.log(result.idlogado)
})})
/*if(Perm == 1)
{
Database.Usuarios.findOne({ _id: IDD}, function(erro, valor) {   
message.channel.send(`📊 | ${message.author} Você não está mais Logado!`)
Perm = 0;
valor.idlogado = 0;
valor.save();
})
}else{
message.channel.send("voce nao está logado")
}
*/
}
exports.help = {
    name: 'logout'
}