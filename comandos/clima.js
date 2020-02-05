const Discord = require ('discord.js');
const weather = require('weather-js');

exports.run = (client, message, args) => {
  
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
  if(err) message.channel.send(err);
    
    const current = result[0].current;
    const location = result[0].location;
    
    const embed = new Discord.RichEmbed()
    .setAuthor(`Tempo de ${current.observationpoint}`)
    .addField('Fuso horário:', `${location.timezone}`, true)
    .addField('Temperatura:',`${current.temperature}°C`, true)
    .addField('Tipo de clima:',`${location.degreetype}°`, true)
    .addField('Umidade:', `${current.humidity}%`, true)
    .addField('Clima:', `${current.skytext}`, true)
    .addField('Velocidade do vento:', `${current.windspeed}`, true)
    .setColor('#feff89')
    .setThumbnail(current.imageUrl)
    message.channel.send(embed)
});
  
  
}

exports.help = {
  name: 'clima'
}