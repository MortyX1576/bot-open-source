const Discord = require ('discord.js') 

exports.run = (client, message, args) => {

    const emoji1 = new Discord.RichEmbed()
      .setColor('GOLD')  
      .setTitle(`**Smash**`)
      .setDescription(`Mostrando a bolsa de valores sla: **${args[0]}**`)
      .setImage(`https://economia.awesomeapi.com.br/${args[0]}/${args[1]}`)
      .setFooter(`© Arcanium`)
  
      message.channel.send(emoji1)
}

exports.help = {
  name: 'moeda'
}