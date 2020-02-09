const Discord = require("discord.js");
exports.run = async (client, message) => {

   const embed = new Discord.RichEmbed()
   .setDescription("a")

  message.author.send(embed).then(x =>{  
  x.react("📤")
  let filtro = (reaction,usuario) => reaction.emoji.name === "📤" && usuario.id === message.author.id;
  const coletor = x.createReactionCollector(filtro, {max: 1, time: 60000});     
  coletor.on("collect", msg1 =>{            

   const embed1 = new Discord.RichEmbed()
   .setDescription("a")
   message.edit(embed)
})})}

exports.help = {
  name: "dm"
}