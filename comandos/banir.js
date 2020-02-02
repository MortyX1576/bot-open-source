const Discord = require ('discord.js')

exports.run = (client, message, args) => {

if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Você não tem permissão para banir membros!")

if(member === message.member) return message

const membro = message.member.mentions.first() || message.guild.members.get(args[0]);
if(!membro) return message.reply("Você não especificou um usuário!")

}
exports.help = {
    name: 'banir'
}