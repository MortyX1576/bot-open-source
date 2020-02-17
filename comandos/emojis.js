const Discord = require('discord.js')
const teste = require('../embed.json')
let i;
exports.run = async (client, message, args, Database) => {    
let emojis = message.guild.emojis.map(emoji =>{
//console.log(emoji.name)
})
const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
message.channel.send(emojiList);
ListarEmojis(5)
function ListarEmojis(pagina){
  let getPage = pagina+5;
  for (i =  1; i <=getPage;i++){
  message.channel.send(`${i} Looping`)
  }
}
}
exports.help = {
    name: 'emojis'
}