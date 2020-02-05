const Discord = require('discord.js')
exports.run = async (client, message, args, Database) => 
{    
let teste = Database.Usuarios.findOne(function(erro, dados) 
{   

console.log(dados)
})
}
exports.help = {
    name: 'teste'
}