const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.get(args[0]);

    const embed = new Discord.RichEmbed()
    .setTitle("Smash Money")
    .setDescription(`O usúario @Godzin possui R$43 reais.`)
    .setThumbnail("https://cdn.imgbin.com/3/25/21/imgbin-banknote-money-currency-banknote-gold-YdP3QhX3ZbyUSdRXGe8fWqwXv.jpg")
    .setColor('YELLOW')

    message.channel.send(embed)
}