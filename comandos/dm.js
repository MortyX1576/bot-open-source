const Discord = require ('discord.js')

exports.run = (client, message) => {


   const embed = new Discord.RichEmbed()
   .setDescription("Isso foi um teste.")
   message.author.send(embed).then(x => x.react('😢'))
  let filtro = (reaction,usuario) => reaction.emoji.name === "📤" && usuario.id === message.author.id;
  const coletor = x.createReactionCollector(filtro, {max: 1, time: 60000});     
  coletor.on("collect", msg1 =>{
  
  const embed1 = new Discord.RichEmbed()
  .setDescription("Eae..")
    
}

exports.help = {
   name: 'dm'
}