const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const member0 = message.mentions.members.first() || message.guild.members.get(args[0])
    const member1 = message.mentions.members.first() || message.guild.members.get(args[1])

    const fotos = "https://media.giphy.com/media/udiIFmPkJQzkI/giphy.gif"
    let numeros = ['100%', '84%',]

    const embed = new Discord.RichEmbed()
    .setTitle("Viva o amor ❤️")
    .setDescription(`O amor é lindo entre o ${member0} e ${member1}! ❤️\nDeu ${numeros} de chances de rolar esse casal!`)
    .setImage(fotos)

    message.channel.send(embed)

}

exports.help = {
    name: 'ship'
}