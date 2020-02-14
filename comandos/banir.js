const Discord = require ('discord.js')
const teste = require('../embed.json')

exports.run = (client, message, args) => {

const membro = message.mentions.members.first() || message.guild.members.get(args[0]);
    
     const embed3 = new Discord.RichEmbed().setDescription(`${message.author}, ${teste.userban}`).setColor('RANDOM').setFooter(message.author.tag, message.author.avatarURL).setTimestamp()
     const embed2 = new Discord.RichEmbed().setDescription(teste.meban).setColor('RED').setFooter(message.author.tag, message.author.avatarURL).setTimestamp()
     const embed1 = new Discord.RichEmbed().setDescription(`${message.author}, ${teste.permban}`).setColor('RED').setFooter(message.author.tag, message.author.avatarURL).setTimestamp()
  
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(embed1).then(msg => msg.delete(7 * 1000))
  //permissão pra banir
      const embed = new Discord.RichEmbed()
    .setColor('RED')
    .setDescription("⛔ Você não é um ``DESENVOLVEDOR`` para executar esse comando.")

    if(message.author.id != '336905723621670914') return message.channel.send(embed).then(msg => msg.delete(5 * 1000))

if(membro === message.member) return message.channel.send(embed2).then(msg => msg.delete(7 * 1000)) 

if(!membro) return message.channel.send(embed3).then(msg => msg.delete(7 * 1000)) //se executar o comando sem o usuário

const motivo = args.slice(1).join(' ')
if(!motivo) return message.reply("Você não especificou um motivo")

if (membro) {
if (motivo) {
const embed = new Discord.RichEmbed()
embed.setTitle(":hammer: Banido")
embed.setColor("RED")
embed.setDescription(`**•** Usuário banido: **${membro}**\n**•** Banido por: **${message.author.tag}**\n**•** Motivo: ${motivo}`)
membro.ban()
message.channel.send(embed)
}
}
}
exports.help = {
    name: 'banir'
}