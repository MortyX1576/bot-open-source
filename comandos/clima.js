const weather = require('weather-js');
const Discord = require ('discord.js');

exports.run = (client, message, args) => {
  
  weather.find({search: args[0], degreeType: 'F'}, function(err, result) {
  if(err) message.channel.send(err);
    
    message.channel.send(JSON.stringify(result, null, 2))
});
  
  
}

exports.help = {
  name: 'clima'
}