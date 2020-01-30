const Discord = require ('discord.js')

exports.run = async (client,message,args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para ``Gerenciar mensagens``.")

if(!args[0]) return message.reply("Use !limpar (quantidade).")
let numero = args[0];
if(isNaN(numero)) return message.reply("Coloque um valor válido.")
numero = parseInt(numero)
if(numero >= 100 || numero <= 1) return message.reply("Coloque um valor menor que 100 e maior que 1.")
message.channel.bulkDelete(numero + 1).then(() => {

let embed = new Discord.RichEmbed()
embed.setTitle("Limpeza")
embed.setColor("RANDOM")
embed.addField(`Chat limpo por:`, `**${message.author.tag}**`)
embed.addField(`Foram removidas:`, `**${numero} mensagens**`)
message.channel.send(embed)

})
}      
exports.help = {
  name: "limpar"
}; 