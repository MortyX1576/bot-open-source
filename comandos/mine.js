const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (args[0] == null) {return message.channel.send(`${message.author.username}, digite um nickname.`)}

  var embed1 = new Discord.RichEmbed()
  
  .setColor(0x151515)
  .setTitle(`**Arcanium** | Minecraft`)
.setThumbnail(bot.user.displayAvatarURL)
.setDescription(`Reaja com o emoji para ver sua **Skin, Head & Body**\n\n<:head:670290274416853002> | Head\n<:body:670290274744008754> | Body\n<:skin:670290274618048542> | Skin\n<:capa:670371369791389726> | Capa\n\n`)
.setFooter(`© Arcanium`)
    
      message.channel.send(embed1).then(async msg => {
    
      await msg.react('🙂')
          await msg.react('670290274744008754')
            await msg.react('670290274618048542')
                await msg.react('670371369791389726')

  const admfilterOPA = (reaction, user) => reaction.emoji.id === '🙂' && user.id === message.author.id;
  const admOPA = msg.createReactionCollector(admfilterOPA, { time: 240000 })
  
  //Referente ao emoji: 👤
  
              admOPA.on('collect', async bot => {
  
  var emoji1 = new Discord.RichEmbed()
  
      .setColor(0x151515)  
      .setTitle(`**Arcanium**`)
      .setDescription(`Mostrando HEAD do Jogador: **${args[0]}**`)
      .setImage(`https://minotar.net/avatar/${args[0]}`)
      .setFooter(`© Arcanium`)
  
  await msg.edit(emoji1)
  });
  
  
  
  const admfilterCHANGE = (reaction, user) => reaction.emoji.id === '670290274744008754' && user.id === message.author.id;
  const admCHANGE = msg.createReactionCollector(admfilterCHANGE, { time: 240000 })
  
  //Referente ao emoji: 🔧
  
              admCHANGE.on('collect', async bot => {
  
  var emoji1 = new Discord.RichEmbed()

  .setColor(0x151515)  
      .setTitle(`**Arcanium**`)
      .setDescription(`Mostrando BODY do Jogador: **${args}**`)
      .setImage(`https://minotar.net/body/${args}`)
      .setFooter(`© Arcanium`)
  
  await msg.edit(emoji1)
  });
  
  const admfilterMOOD = (reaction, user) => reaction.emoji.id === '670290274618048542' && user.id === message.author.id;
  const admMOOD = msg.createReactionCollector(admfilterMOOD, { time: 240000 })
  
  //Referente ao emoji: 🔧
  
              admMOOD.on('collect', async bot => {
  
  var emoji1 = new Discord.RichEmbed()

  .setColor(0x151515)  
      .setTitle(`**Arcanium**`)
      .setDescription(`Mostrando BODY do Jogador: **${args}**\nBaixe a skin [aqui](https://minotar.net/skin/${args})`)
      .setImage(`https://minotar.net/skin/${args}`)
      .setFooter(`© Arcanium`)
  
  await msg.edit(emoji1)
  });  


 const admfilterOOLA = (reaction, user) => reaction.emoji.id === '670371369791389726' && user.id === message.author.id;
  const admOOLA = msg.createReactionCollector(admfilterOOLA, { time: 240000 })
  
  //Referente ao emoji: 👤
  
              admOOLA.on('collect', async bot => {
  
  var emoji1 = new Discord.RichEmbed()
  
      .setColor(0x151515)  
      .setTitle(`**Arcanium**`)
      .setDescription(`Mostrando CAPA do Jogador: **${args}**`)
   .setImage(`http://s.optifine.net/capes/${args}.png?size=2048`)
      .setFooter(`© Arcanium`)
  
  await msg.edit(emoji1)
  });
  


      })
    }
module.exports.help = {
    name: 'mine'
    }