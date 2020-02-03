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
    .setTitle("Smash - Money")
    .setDescription(`Saldo do ${dados.nome} é de:` + `${dados.dinheiro}`)
    .setThumbnail("https://img.favpng.com/12/14/9/money-saving-icon-png-favpng-gFFpk3KdkbkyeawSuATTsdSHR.jpg")
    .setColor('GOLD')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    message.channel.send(embed)
    }else{
      
    //mensagem de erro aqui
    }
    });
}//reinicia ae
exports.help = { 
    name: 'money'
}