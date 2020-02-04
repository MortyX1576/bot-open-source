const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const member0 = message.mentions.members.first() || message.guild.members.get(args[0])
    const member1 = message.mentions.members.first() || message.guild.members.get(args[1])

    const fotos = "https://media.giphy.com/media/udiIFmPkJQzkI/giphy.gif"

    let cem = ['100%']
    let oitenta = ['80%']
    let numeros = [cem, oitenta]
    const embed = new Discord.RichEmbed()
    .setTitle("Viva o amor ❤️")
    .setDescription(`O amor entre ${member0} e {member1} é`+numeros[Math.floor(Math.random() * numeros.length)])
    .setImage(fotos)

    message.channel.send(embed)

}

exports.help = {
    name: 'ship'
}