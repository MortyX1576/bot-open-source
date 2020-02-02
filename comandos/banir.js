const Discord = require ('discord.js')

exports.run = (client, message, args) => {

const membro = message.mentions.members.first() || message.guild.members.get(args[0]);

if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Você não tem permissão para banir membros!")

if(membro === message.member) return message.reply("Você não pode banir a si mesmo.")

if(!membro) return message.reply("Você não especificou um usuário!")

}
exports.help = {
    name: 'banir'
}