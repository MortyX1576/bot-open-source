const Discord = require ('discord.js')

exports.run = (bot,message) => {
    const embed = new Discord.RichEmbed()
    .setAuthor("Informações do Bot!")
    .setThumbnail(bot.user.avatarURL)
    .setDescription(`Olá! Sou o **SMASH**, um bot desenvolvido para **lhe ajudar** no seu servidor!
    <:nodejs:671400058708557836> Fui desenvolvido em Java Script!`)
    .addField('Possuo no momento:', `2 Comandos.`)
    .addField('Criador:', `\`\`\`cs\n@morty, @miguelws e @godzin!\`\`\``)
    .addField('Informações de Guilds', `● Estou presente em [${bot.guilds.size}] Servidores\n● Tenho [${bot.users.size}] Membros ativos!`)
    message.channel.send(embed)
}
exports.help = {
    name: "info"
}