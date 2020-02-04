const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const member0 = message.mentions.members.first() || message.guild.members.get(args[0])
    const member1 = message.mentions.members.first() || message.guild.members.get(args[1])

    const fotos = "https://media.giphy.com/media/udiIFmPkJQzkI/giphy.gif"

    var numeros = (' ')
    if (numeros > 1 && numeros < 100) {
//pera
    const embed = new Discord.RichEmbed()
    .setTitle("Viva o amor ❤️")
    .setDescription(`O amor entre ${member0} e ${member1} é `+numeros[Math.floor(Math.random())])
    .setImage(fotos)
    .setColor('RED')
    
    message.channel.send(embed)

}
}

exports.help = {
    name: 'ship'
}