const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
const Database = require("./Data/database.js")
const mongoose = require("mongoose");
const agora = moment();
const client = new Discord.Client();
client.commands = new Discord.Collection();

//Carregamento dos Comandos
fs.readdir("./comandos/", (err, files) => {
  if (err) console.error(err);
  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    console.log(`Comando ${f} Carregado`);
    client.commands.set(props.help.name, props);
  });
});
//Log Erro
process.on("uncaughtException", err => {
  let p = err
    .toString()
    .trim()
    .split(/ +/g);
  client.users.get("665200472596152341").send(p.join(" "));
});
client.on("ready", () => {
  // Ao Bot ser Iniciado
  console.log("BOT ONLINE");
  client.user.setActivity(`Estou Online!`, { type: "PLAYING" });
  console.log(`Fui Ligado as ${agora.format("DD/MM/YYYY HH:mm")}`);
});
client.on("raw", async dados => {});
client.on("guildDelete", guild => {
  //Ao Bot ser Expulso de uma Guilda
});
client.on("guildCreate", guild => {
  //Ao Bot entrar em uma Guilda
});
client.on("ChannelCreate", dados => {
  //Chamando quando cria um canal
});
client.on("ChannelDelete", dados => {
  //Chamado quando deleta um canal
});
client.on("messageReactionAdd", (reaction, user) => {});
client.on("guildMemberAdd", async member => {});
client.on("guildMemberRemove", async member => {});
client.on("message", async message => {
  let prefixo = "!"; //Prefixo do BOT
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase(); //Comando
  let args = messageArray.slice(1); //Argumentos
  let arquivocmd = client.commands.get(command.slice(prefixo.length));
  if (arquivocmd) arquivocmd.run(client, message, args, Database); //Handler
});
client.login("NjY2MzI4NTY5OTUzMTI0Mzgy.Xi4Cow.SMfAUaiPM1H0h34KU3I_HWb7hbo"); //Login do Bot
