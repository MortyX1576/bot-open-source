const Discord = require ('discord.js')

exports.run = (bot,message) => {
    const embed = new Discord.RichEmbed()
    .setAuthor("Informações do Bot!")

    .setDescription(`Olá! Sou o **SMASH**, um bot desenvolvido para **lhe ajudar** no seu servidor!\n
    <:nodejs:671400058708557836> Fui desenvolvido em Java Script!`)
    .addField('Executo:', `2 Comandos`, true)
    .addField('Meu prefix é:', `!`, true)
    .addField('Informações de Guilds', `● Estou presente em [${bot.guilds.size}] Servidores\n● Tenho [${bot.users.size}] Membros ativos!`)
    .addField('Criadores:', `\`\`\`\n@Morty#4370, @miguelws#9617 e @Godzin#5566\`\`\``)
    .setColor('DARK_NAVY')
    .setFooter(`Smash Copyright®`, bot.user.avatarURL)

    message.channel.send(embed)
}
exports.help = {
    name: "info"
}