const Discord = require ('discord.js')

exports.run = (client, message) => {

    message.member.guild.filter(m => m.role.has('671385666524807178'))
    message.member.createDM()
    message.send("Olá, tudo bem? Você é um administrador.")
}

exports.help = {
  name: 'adm'
}