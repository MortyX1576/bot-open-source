const Discord = require ('discord.js')

exports.run = (bot,message) => {
  
    const embed = new Discord.RichEmbed()
    .setAuthor("Informações do Bot..")
    .setDescription("Bom, eu fui criado para ajudá-lo na administração e moderação do seu servidor, espero que goste!")
    .addField('<:javascript:679388315916697610> Desenvolvido em:', `Java Script!`, true)
    .addField('📁 Total de comandos:', `Ainda vou terminar ;-;`, true)
    .addField('🔊 Meu prefix é:', `!`, true)
    .addField('<:sdstorage_118693:677952982901587998> Memória utilizada:', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`, true)
    .addField('🖥️ Eu estou em:', `${bot.guilds.size} guildas`, true)
    .addField('🖱️ Total de usuários:', `${bot.users.size}`, true)
    .setColor('RANDOM')
    .setFooter(`Smash © Todos direitos reservados.`, bot.user.avatarURL)

    message.channel.send(embed)
}
exports.help = {
    name: "info"
}