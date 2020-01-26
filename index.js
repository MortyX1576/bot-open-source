const Discord = require('discord.js');
const fs = require('fs')
const moment = require("moment")
const mongoose = require("mongoose")
const agora = moment();
const client = new Discord.Client();
client.commands = new Discord.Collection();
//Carregamento dos Comandos
fs.readdir("./comandos/", (err,files) =>
{
    if(err) console.error(err)
    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f,i) => {
        let props = require(`./comandos/${f}`);
        console.log(`Comando ${f} Carregado`)
        client.commands.set(props.help.name,props);                    
    });
});
//Log Erro
process.on('uncaughtException', (err) => {
let p = err.toString().trim().split(/ +/g)
client.users.get("665200472596152341").send(p.join(" "));
})
client.on("ready", () => {
  console.log("BOT ONLINE")
  client.user.setActivity(`Estou Online!`, {type: "PLAYING"});
  console.log(`Fui Ligado as ${agora.format("DD/MM/YYYY HH:mm")}`);
})
client.on('raw', async dados => {
})
client.on("guildDelete", guild  => {
})
client.on("guildCreate", guild => {
})
client.on("ChannelCreate", dados => {
})
client.on("ChannelDelete", dados => {
})
client.on('messageReactionAdd', (reaction, user) => {
})
client.on("guildMemberAdd", async member => {    
})
client.on("guildMemberRemove", async member => {    
})
client.on("message", async message=> { 
let prefixo ="!" //Prefixo do BOT
let messageArray = message.content.split(" ");
let command = messageArray[0].toLowerCase(); //Comando
let args = messageArray.slice(1);   //Argumentos
let arquivocmd = client.commands.get(command.slice(prefixo.length));
if(arquivocmd) arquivocmd.run(client,message,args);
})

client.login("NjY2MzI4NTY5OTUzMTI0Mzgy.Xi4Cow.SMfAUaiPM1H0h34KU3I_HWb7hbo");
