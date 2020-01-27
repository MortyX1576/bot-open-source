const Discord = require ('discord.js')

exports.run = (bot,message) => {
    const embed = new Discord.RichEmbed()
    .setAuthor("Informações do Bot!")

    .setDescription(`Olá! Sou o **SMASH**, um bot desenvolvido para **lhe ajudar** no seu servidor!`)
    .addField('<:nodejs:671400058708557836> Desenvolvido em:', `Java Script!`, true)
    .addField('<:unnamed:671417880847581323> Total de comandos:', `2 Comandos`, true)
    .addField('<:01512:671417880847581222> Meu prefix é:', `!`, true)
    .addField('Informações de Guilds', `● Estou presente em [${bot.guilds.size}] Servidores\n● Tenho [${bot.users.size}] Membros ativos!`)
    .addField('Criadores:', `\`\`\`\nMorty#4370, miguelws#9617 e Godzin#5566.\`\`\``)
    .setColor('DARK_GREY')
    .setFooter(`Smash ©`, bot.user.avatarURL)

    message.channel.send(embed)
}
exports.help = {
    name: "info"
}