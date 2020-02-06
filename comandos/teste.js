const Discord = require('discord.js')
exports.run = async (client, message, args, Database) => 
{    
let teste = Database.Usuarios.find()
{   
console.log(teste.dinheiro)
}
}
exports.help = {
    name: 'teste'
}