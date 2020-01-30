const Discord = require ('discord.js')

exports.run = async (client,message,args,Database) => {
Database.Usuarios.findOne({idlogado: message.author.id}, function(erro, dados) {     
message.reply(`Seu nível: ${dados.level}`)
})
}
exports.help = {
    name: 'level'
}