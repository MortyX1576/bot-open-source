const Discord = require ('discord.js')

exports.run = (bot,message) => {
  
    const embed = new Discord.RichEmbed()
    .setAuthor("Informações do Bot..")
    .setDescription("```Bom, eu fui criado para ajudá-lo na administração e moderação do seu servidor, tenho várias funções, espero que goste e tenha um bom entretenimento!```")
    .addField('Desenvolvido em:', `<:javascript:679388315916697610> Java Script!`, true)
    .addField('📁 Total de comandos:', `Ainda vou terminar ;-;`, true)
    .addField(' Meu prefix é:', `!`, true)
    .addField('Informações de Guilds', `● Estou presente em [${bot.guilds.size}] Servidores\n● Tenho [${bot.users.size}] Membros ativos!`)
    .addField('Criadores:', `\`\`\`\nMorty#4370, miguelws#9617 e Godzin#5566.\`\`\``)
    .setColor('DARK_GREY')
    .setFooter(`Smash © Todos direitos reservados.`, bot.user.avatarURL)

    message.channel.send(embed)
}
exports.help = {
    name: "info"
}