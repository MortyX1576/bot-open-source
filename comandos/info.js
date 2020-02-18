const Discord = require ('discord.js')

exports.run = (bot,message) => {
  
    const embed = new Discord.RichEmbed()
    .setTitle(`Informações sobre ${bot.user.username}!`)
    .addField('<:javascript:679388315916697610> Desenvolvido em:', "``Java Script``", true)
    .addField('📁 Total de comandos:', "``23 comandos``", true)
    .addField('🔊 Meu prefix é:', "``!``", true)
    .addField('<:sdstorage_118693:677952982901587998> Memória utilizada:', `\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB\`\``, true)
    .addField('🖥️ Eu estou em:', `\`\`${bot.guilds.size} servidores\`\``, true)
    .addField('🖱️ Total de usuários:', `\`\`${bot.users.size}\`\``, true)
    .setColor('RANDOM')
    .setFooter(message.author.tag, message.author.avatarURL).setTimestamp()

    message.channel.send(embed)
}
exports.help = {
    name: "info"
}