
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
  
    const embedno = new Discord.RichEmbed()
    .setDescription(":no_entry_sign: | Senha incorreta.")
    .setColor('RED')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    
if(dados.senha != args[1]) return message.channel.send(embedno).then (msg => msg.delete(6 * 1000))
  
Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, valor) {   
  
    const embedl = new Discord.RichEmbed()
    .setDescription(`Você já está logado.`)
    .setColor('RED')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp() // embed 
  
if(valor) return message.channel.send(embedl).then (msg => msg.delete(5 * 1000))
  
      const embed = new Discord.RichEmbed()
    .setDescription(`Você fez logou na conta \`${dados.nome}\`!`)
    .setColor('#ff6767')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp() // embed 
  
message.channel.send(embed).then (msg => msg.delete(5 * 1000))
dados.logado = true;
dados.idlogado = message.author.id;
dados.save();
})
})
}
exports.help = {
    name: 'login'
}