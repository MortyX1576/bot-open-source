const Discord = require ('discord.js')

exports.run = (client, message, args,Database) => {
  
  const member = message.mentions.members.first() || message.guild.members.get(args[0])
  if(!member) return message.reply("usuário inválido!")
  Database.Usuarios.findOne({ _id: member.id}, function(erro, valor) {    
  if(!valor) return message.reply("Usuário não cadastrado!")
  if(!Number.isInteger(args[1], 15)) return message.reply("Adicione valores sem vírgulas e ponto.").then(msg => msg.delete(8 * 1000))
  if(isNaN(args[1])) return message.reply("Coloque um número como valor..").then(msg => msg.delete(8 * 1000))
    
  const embed = new Discord.RichEmbed()
  .setDescription(`<:money:679059862591635475> Adicionado \`\`R$${args[1]}\`\` reais na conta do ${member}!`)
  .setColor('#00FF7F')  
  message.channel.send(embed).then (msg => msg.delete(6 * 1000)) 
  let value = valor.dinheiro + args[1];
  let x = valor.dinheiro;
  let y = args[1]
  let z = x + y;
  console.log(z)
  message.channel.send(`${z}`)
  valor.dinheiro = 0;
  valor.save();
  })
}
exports.help = {
    name: 'addgrana'
}