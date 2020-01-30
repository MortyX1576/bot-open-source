const Discord = require('discord.js')

exports.run = async (client, message, args,Database) => {

   await Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, dados) {   
    if(!dados) return message.reply("Voce nao está logado em nenhuma Conta")
    message.reply(`Verifique seu privado.`).then (msg => msg.delete(5 * 1000))
    message.author.createDM()
    let embed = new Discord.RichEmbed()
        .setTitle('Informações do membro:')
        .setColor('#a118da')
        .addField(`• Seu nome:`, `${dados.nome}`, true)
        .addField(`• Seu level:`, `${dados.level}`, true)
        .addField(`• Sua senha:`, `||${dados.senha}||`, true)
        .addField(`• XP:`, `${dados.xp}`, true)
        .addField(`• Sua tag:`, `${dados.tag}`, true)

message.author.send(embed)
})
}

exports.help = {
    name: "painel"
}