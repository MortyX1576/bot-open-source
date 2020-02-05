const Discord = require ('discord.js');
const weather = require('weather-js');

exports.run = (client, message, args) => {
  
  weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
  if(err) message.channel.send(err);
    
    message.channel.send(JSON.stringify(result[0].current, null, 2));
});
  
  
}

exports.help = {
  name: 'clima'
}