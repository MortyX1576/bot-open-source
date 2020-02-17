const Discord = require('discord.js')
const teste = require('../embed.json')
let i = 0,ArrayEmojis=[],final;
exports.run = async (client, message, args, Database) => {    
let emojis = message.guild.emojis.map(emoji =>{
//console.log(emoji.name)
})
const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
ArrayEmojis.push(emojiList)
//console.log(ArrayEmojis)
//message.channel.send(emojiList);
ListarEmojis(0)
function ListarEmojis(pagina){
  let getPage = pagina+5;
  for (i; i <=getPage;i++){
  final = i;
  }
  const embed = new Discord.RichEmbed()
  .setTitle("Emojis")
  .setDescription(`${ArrayEmojis[final]}`)
  message.channel.send(embed)
}
}
exports.help = {
    name: 'emojis'
}