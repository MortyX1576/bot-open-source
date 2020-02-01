const Discord = require ('discord.js')

exports.run = async (client,message,args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed1).then (msg => msg.delete(5 * 1000))
  
    const embed1 = new Discord.RichEmbed()
    .setDescription("<:7685_no:671412271951380500> | Você não possui ``permissão`` para executar este comando.")
    .setColor('RED')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
  
if(!args[0]) return message.reply("Use !limpar (quantidade).").then (msg => msg.delete(3 * 1000))
let numero = args[0];
if(isNaN(numero)) return message.reply("Coloque um valor válido.").then (msg => msg.delete(3 * 1000))
numero = parseInt(numero)
if(numero >= 100 || numero <= 1) return message.reply("Coloque um valor abaixo de 100 e maior que 1.").then (msg => msg.delete(3 * 1000))
message.channel.bulkDelete(numero + 1).then(() => {

let embed = new Discord.RichEmbed()
embed.setDescription(`<:2990_yes:671412271985065996> | Você limpou o chat, foram limpadas ${numero} mensagens!`)
embed.setColor("RANDOM")
message.channel.send(embed).then (msg => msg.delete(5 * 1000))

})
}      
exports.help = {
  name: "limpar"
}; 