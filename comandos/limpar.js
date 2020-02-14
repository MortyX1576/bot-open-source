const Discord = require ('discord.js')
const teste = require('../embed.json')

exports.run = async (client,message,args) => {
  
    const embed1 = new Discord.RichEmbed()
    .setDescription("Você não possui permissão para executar este comando.")
    .setColor('RANDOM')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    
    let embed2 = new Discord.RichEmbed()
    .setDescription(`${message.author}, ${teste.number}`)
    .setColor("RANDOM")
    
    let embed3 = new Discord.RichEmbed()
    .setDescription(`${message.author}, ${teste.helpc}`)
    .setColor("RANDOM")

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed1).then (msg => msg.delete(5 * 1000))

if(!args[0]) return message.channel.send(embed3).then (msg => msg.delete(8 * 1000))
let numero = args[0];
if(isNaN(numero)) return message.channel.send(embed2).then (msg => msg.delete(8 * 1000))
numero = parseInt(numero)
if(numero >= 100 || numero <= 1) return message.reply("Coloque um valor abaixo de 100 e maior que 1.").then (msg => msg.delete(3 * 1000))
message.channel.bulkDelete(numero + 1).then(() => {

let embed = new Discord.RichEmbed()
embed.setDescription(`<:2990_yes:671412271985065996> Você limpou o chat, foram limpadas ${numero} mensagens!`)
embed.setColor("RANDOM")
message.channel.send(embed).then (msg => msg.delete(5 * 1000))

})
}      
exports.help = {
  name: "limpar"
}; 