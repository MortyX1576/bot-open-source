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
      
    const embed = new Discord.RichEmbed()
    .setDescription(`💸 Este é o saldo do **${dados.nome}:**\n\n<:money:679059862591635475> Dinheiro: **${dados.dinheiro}**\n<:bank:679061278370693130> Banco: **${dados.banco}**`)
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