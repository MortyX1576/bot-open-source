const Discord = require ('discord.js')

exports.run = (client, message, args,Database) => {
  
  const member = message.mentions.members.first() || message.guild.members.get(args[0])
  if(!member) return message.reply("Usuario Invalido")
  Database.Usuarios.findOne({ _id: member.id}, function(erro, valor) {    
  if(!valor) return message.reply("Usuário não cadastrado!")
  if(isNaN(args[1])) return message.reply("Coloque um valor em número!")
    
  const embed = new Discord.RichEmbed()
  .setDescription(`✅ | Adicionado \`\`jsR$${args[1]}\`\` reais na conta do ${member}!`)
  .setColor('#00FF7F')  
  message.channel.send(embed).then (msg => msg.delete(6 * 1000)) 
  valor.dinheiro += args[1];
  valor.save();
  })
}
exports.help = {
    name: 'addgrana'
}