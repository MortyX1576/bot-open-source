const Discord = require ('discord.js')
exports.run = async (client,message,args,Database) => {
let ID,IDD,Perm;
/*await client.users.forEach(x =>{
Database.Usuarios.findOne({_id: x.id}, function(erro, result) {   
  if(result)  
  if(result.idlogado == message.author.id) return Perm = 1;        
})})
*/
  //embed
    const embed1 = new Discord.RichEmbed()
    .setDescription("Você não está logado.")
    .setColor('RED')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    
// embed
    
await Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, valor) {   
if(!valor) return message.channel.send(embed1).then (msg => msg.delete(5 * 1000))
  
    const embed = new Discord.RichEmbed()
    .setDescription(`Você fez logout na conta \`\`\`${valor.nome}\`\`\``)
    .setColor('RED')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
      
message.channel.send(embed).then (msg => msg.delete(5 * 1000))
Perm = 0;
valor.idlogado = 0;
  // `\`\`\`${dados.dinheiro}\`\`\``
valor.save();
})
}
exports.help = {
    name: 'logout'
}