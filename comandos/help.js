const Discord = require ('discord.js')

exports.run = (client, message) => {

    const embed = new Discord.RichEmbed().setAuthor(message.author.tag, message.author.avatarURL)
    .setDescription('Aqui está o meu menu de comandos, espero que goste!')
    .addField('🚔 Moderadores', "``banir`` ``limpar`` ``config``")
    .addField('🔑 Utilidades:', "``clima`` ``avatar`` ``calcular`` ``info`` ``login`` ``logout`` ``nivel``\n``painel`` ``perfil`` ``prefixo`` ``registro``")
    .addField('💸 Economia', "``saldo`` ``daily`` ``addgrana``")
    .addField('🖥️ Desenvolvedores:', "``eval`` ``botinfo``")
    .setThumbnail(client.user.avatarURL)
    .setColor('#00FFFF')

    message.channel.send(embed)
}

exports.help = {
    name:'help'
}