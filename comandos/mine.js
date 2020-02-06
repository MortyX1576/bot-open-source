const ping = require('minecraft-server-util');
const Discord = require ('discord.js')
 

// Callback
ping('play.hypixel.net', 25565, (error, response, message) => {
    if (error) throw error;
 
    message.channel.send(response);
});
 
// Promise
ping('play.hypixel.net', 25565)
    .then((response) => {
    })
    .catch((error) => {
        throw error;
    });
 
// Callback - with options
ping('play.hypixel.net', 25565, { protocolVersion: 498, connectTimeout: 1000 * 10 }, (error, response) => {
    if (error) throw error;
 
    console.logresponse);
});
 
// Promise - with options
ping('play.hypixel.net', 25565, { protocolVersion: 498, connectTimeout: 1000 * 10 })
    .then((response) => {
    })
    .catch((error) => {
        throw error;
    });

exports.help = {
  name: 'mine'
}