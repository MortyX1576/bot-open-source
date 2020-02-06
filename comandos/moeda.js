const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const moeda = args.slice(0).join(" ")

    const embed = new Discord.RichEmbed()
    .setDescription(`Informações da: ${moeda}:\nhttps://economia.awesomeapi.com.br/all/${moeda}`)
    .setColor('GOLD')

    message.channel.send(embed)

}
exports.help = {
    name: 'moeda'
}