const Discord = require('discord.js');
const fs = require('fs')
const client = new Discord.Client();

client.on("ready", () => {
  console.log("BOT ONLINE")
  client.user.setActivity(`Teste Host`, {type: "PLAYING"});
})

client.on('raw', async dados => {

})
client.on("guildDelete", guild  => {

})
client.on("guildCreate", guild => {

})
client.on('messageReactionAdd', (reaction, user) => {

})
client.on("guildMemberAdd", async member => {    

})
client.on("message", async message=> { 

})
client.login("NjY2MzI4NTY5OTUzMTI0Mzgy.Xi4Cow.SMfAUaiPM1H0h34KU3I_HWb7hbo");
