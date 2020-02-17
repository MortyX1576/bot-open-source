const Discord = require ('discord.js')
const jsone = require('../embed.json')

exports.run =async  (client, message, args,Database) => {

    const member = message.mentions.members.first() || message.member;
    await Database.Usuarios.findOne({_id: member.id}, function(erro, dados) {   
    if(dados)
    {
    const embed1 = new Discord.RichEmbed()
    .setDescription(`${message.author}, ${jsone.saldonot}`)
    .setColor('RANDOM')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    if (!member) return message.channel.send(embed1).then (msg => msg.delete(6 * 1000))
    if(message.author.id === message.author) return message.channel.send("eae")
      
    const embed = new Discord.RichEmbed()
    .setDescription(`💸 Este é o saldo do **${dados.nome}:**\n\nMoney:\n\`\`\`cs\n${dados.dinheiro}\`\`\`\nBanco:\n\`\`cs\n${dados.banco}\`\`\``)
    .setColor('RANDOM')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
      
    }else {
      

    }
    });
}//reinicia ae
exports.help = { 
    name: 'saldo'
}