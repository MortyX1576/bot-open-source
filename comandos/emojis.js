const Discord = require('discord.js')
const teste = require('../embed.json')
let i = 0,ArrayEmojis=[],final;
exports.run = async (client, message, args, Database) => {    
let emojis = message.guild.emojis.map(emoji =>{
//console.log(emoji.name)
})
const emojiList = await message.guild.emojis.map(e=>e.toString()).join(" ' , ' ");
ArrayEmojis.push(emojiList)
//console.log(ArrayEmojis)
//message.channel.send(emojiList);
ListarEmojis(5)
function ListarEmojis(pagina){
  let getPage = pagina;
  for (i; i <=getPage;i++){
  final = i;
  }    
  setTimeout(function() {
  console.log(ArrayEmojis[5])
  console.log(ArrayEmojis)
  const embed = new Discord.RichEmbed()
  .setTitle("Emojis")
  .setDescription(`${ArrayEmojis[final]}`)
  message.channel.send(embed)
  },3000)
}
}
exports.help = {
    name: 'emojis'
}