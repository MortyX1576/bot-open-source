const Discord = require ('discord.js')

exports.run =async  (client, message, args,Database) => {

    const member = message.mentions.members.first() || message.member;
    await Database.Usuarios.findOne({_id: member.id}, function(erro, dados) {   
    if(dados)
    {
    const embed1 = new Discord.RichEmbed()
    .setDescription(":no_entry_sign: | Informe um membro.")
    .setColor('RED')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    if (!member) return message.channel.send(embed1).then (msg => msg.delete(6 * 1000))
      
    const embed = new Discord.RichEmbed()
    .setDescription(`Este é seu saldo ${dados.nome}:`)
    .addField('Money:', `\`\`${dados.dinheiro}\`\``)
    .addField('Banco:', `\`\`${dados.banco}\`\``, true) 
    .setThumbnail("https://img.icons8.com/clouds/100/000000/money.png")
    .setColor('RANDOM')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
      
    }else if (message.author.id === message.author.id) {
      
    const embed1 = new Discord.RichEmbed()
    .setDescription(`**${dados.nome}**, seu saldo é:`)
    .addField('Money:', `\`\`${dados.dinheiro}\`\``)
    .addField('Banco:', `\`\`${dados.banco}\`\``, true) 
    .setThumbnail("https://img.icons8.com/clouds/100/000000/money.png")
    .setColor('#87CEEB')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    
    message.channel.send(embed1)
    }
    });
}//reinicia ae
exports.help = { 
    name: 'saldo'
}