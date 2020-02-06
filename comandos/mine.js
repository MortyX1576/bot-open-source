const ping = require('minecraft-server-util');
 
// Callback
ping('play.hypixel.net', 25565, (error, response) => {
    if (error) throw error;
 
    console.log(response);
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
 
    console.log(response);
});
 
// Promise - with options
ping('play.hypixel.net', 25565, { protocolVersion: 498, connectTimeout: 1000 * 10 })
    .then((response) => {
    })
    .catch((error) => {
        throw error;
    });