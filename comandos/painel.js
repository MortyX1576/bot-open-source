const Discord = require('discord.js')

exports.run = async (client, message, args,Database) => {

   await Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, dados) {   
     
    const embed1 = new Discord.RichEmbed()
    .setDescription("Você não está logado em nenhuma conta.")
    .setColor('RED')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
     
    if(!dados) return message.channel.send(embed1).then (msg => msg.delete(5 * 1000))
    message.reply(`Verifique seu privado.`).then (msg => msg.delete(5 * 1000))
    message.author.createDM()
    let embed = new Discord.RichEmbed()
        .setTitle('Informações do membro:')
        .setColor('#a118da')
        .addField(`• Seu nome:`, `${dados.nome}`, true)
        .addField(`• Sua senha:`, `||${dados.senha}||`, true)
        .addField(`• XP:`, `${dados.xp}`, true)
        .addField(`• Seu level:`, `${dados.level}`, true)
        .addField(`• Sua tag:`, `${dados.tag}`, true)

message.author.send(embed)
})
}

exports.help = {
    name: "painel"
}