const Discord = require ('discord.js') // aqui está carregando a lib 'discord.js'

exports.run = (client, message) => {
  
  const canal = client.channels.get('671453909390458890') // função pra pegar o id do canal
  message.channel.send(`Obtenha sua ajuda no canal ${canal}!`) // vai mandar uma mensagem
}

exports.help = {
  name: 'ch'
}