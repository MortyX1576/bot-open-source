const Discord = require ('discord.js')

exports.run = (client,message,args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply ("Você não tem permissão!").then (msg => msg.delete(4000));
    const member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.reply("Você não mencionou ninguém!").then(msg => msg.delete(300))
  
    const reason = args.slice(1).join(' ')
    if (!reason) return message.reply ("Você não colocou um motivo válido!").then(msg => msg.delete(300))

    const embed = new Discord.RichEmbed()
    .setTitle("🔔 Alerta!")
    .setDescription(`O membro **${member}** foi avisado pelo **${message.author}!**\nMotivo: **${reason}**`)
    .setColor('BLUE')
    message.channel.send(embed)
}

exports.help = {
    name: 'warn'
}