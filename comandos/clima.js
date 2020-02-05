const Discord = require ('discord.js');
const weather = require('weather-js');

exports.run = (client, message, args) => {
  
  weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
  if(err) message.channel.send(err);
    
    if (result.length=== 0) {
        message.channel.send("Coloque uma localização correta.").then (msg => msg.delete(5 * 1000))
        return;
    }

    const current = result[0].current;
    const location = result[0].location;
    
    const embed = new Discord.RichEmbed()
    .setAuthor(`Tempo de ${current.observationpoint}`)
    .addField('Fuso horário:', `${location.timezone}`, true)
    .addField('Temperatura:', `${current.temperature}`, true)
    .addField('Umidade:', `${current.humidity}%`, true)
    .addField('Clima:', `${current.skytext}`, true)
    .addField('Velocidade do vento:', `${current.windspeed}`, true)
    .setThumbnail(current.imageUrl)
    message.channel.send(embed)
});
  
  
}

exports.help = {
  name: 'clima'
}