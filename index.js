const Discord = require('discord.js');
const fs = require('fs')
const client = new Discord.Client();

client.on("ready", () => {
  console.log("BOT ONLINE")
})
client.on('raw', async dados => {

})
client.on("message", async message=> { 
console.log("opa")
})
client.login(process.env.TOKEN)
