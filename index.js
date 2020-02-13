const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
const Database = require("./Data/database.js")
const mongoose = require("mongoose");
const agora = moment();
const client = new Discord.Client();
client.commands = new Discord.Collection();
let valor;
let TempoXP= new Set();
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
/*
process.on("uncaughtException", err => {
  let p = err
    .toString()
    .trim()
    .split(/ +/g);
  //client.users.get("665200472596152341").send(p.join(" "));
  client.channels.get("671385571561570333").send(p.join(" "))
});
*/
client.on("ready", () => {
  // Ao Bot ser Iniciado
  let hr = agora.format("DD/MM/YYYY HH:mm")
  console.log("BOT ONLINE");
  client.user.setActivity(`Estou Online!`, { type: "PLAYING" });
  console.log(`Fui Ligado as ${agora.format("DD/MM/YYYY HH:mm")}`);
  client.channels.get('672874300184854528').send('```o Smash#5948 foi Iniciado com sucesso!```')
});
client.on("raw", async dados => {
  if(dados.t != "PRESENCE_UPDATE") return;
  //console.log(dados)
  //console.log(dados.d.user.user_status)
  //if(dados.d.user.presence.status == "dnd") return console.log("offline")
});
client.on("guildDelete", guild => {
  //Ao Bot ser Expulso de uma Guilda
});
client.on("guildCreate", guild => {
Database.Guilds.findOne({ _id: guild.id}, function(erro, dados) {
if (!dados) {
new Database.Guilds({
_id: guild.id,
prefix: "!",
canal: "0",
cargo: "0"
}).save();
}
})
});
client.on("ChannelCreate", dados => {
  //Chamando quando cria um canal
});
client.on("ChannelDelete", dados => {
  //Chamado quando deleta um canal
});
client.on("presenceUpdate",dados =>{
  //console.log(dados)
 // console.log(dados.user.status)
})
client.on("messageReactionAdd", (reaction, user) => {});
client.on("guildMemberAdd", async member => {});
client.on("guildMemberRemove", async member => {});
client.on("message", async message => {  
  if(message.author.id == "340328400876994581") return message.channel.send(`[ Anti - Pornografia]`)
  Database.Usuarios.findOne({ "idlogado": message.author.id}, function (erro, dados) { 
  if(dados) {
  if(!TempoXP.has(message.author.id))
  {
  dados.xp += Math.floor(Math.random() * 10) + 1;
  dados.save();
  TempoXP.add(message.author.id)
  if(dados.xp >= 400){
  dados.xp = 0;
  dados.level += 1;
  message.reply(`🎊 | Você upou para o level ${dados.level}, parabéns!`)
  dados.save();
  }
  setTimeout(() => {
        TempoXP.delete(message.author.id);
  }, 40000);      
  } 
  }
  })
  Database.Guilds.findOne({ "_id": message.guild.id}, function (erro, documento) { 
  if (documento) {   
  valor = documento.prefix;
  let prefixo = valor; //Prefixo do BOT
  if(!message.content.startsWith(prefixo)) return ;       
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase(); //Comando
  let args = messageArray.slice(1); //Argumentos
  let arquivocmd = client.commands.get(command.slice(prefixo.length));
  if (arquivocmd) arquivocmd.run(client, message, args, Database); //Handler
  }
  })  
});
client.login("NjcxMDQ5NDkwMzQ5Njg2ODI1.Xi8LKg.jQhltD4G76HLUtbLZJhISVx1YT8"); //Login do Bot
