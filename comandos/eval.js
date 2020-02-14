const Discord = require('discord.js')
const { inspect } = require('util');

  exports.run = async (bot, message, args) => {

    let evaled;
    try {
      evaled = await eval(args.join(' '));
      const embed = new Discord.RichEmbed()        
      .addField(`📥 Entrada:`, `\`\`\`cs\n${args.join(' ')}\`\`\``)      
      .addField(`📤 Saida:`, `\`\`\`cs\n${inspect(evaled)}\`\`\``) // `\`\`\`cs\nRoochhan#9077\`\`\`` // ${inspect(evaled)}
      .setColor('#00FFFF')
      .setFooter(message.author.tag, message.author.avatarURL).setTimestamp()
             
      message.channel.send(embed);

    }
    catch (error) {
      console.error(error)
        const embed1 = new Discord.RichEmbed()        
        .setDescription("Houve um erro no eval, tente novamente..")
        .setFooter(message.author.tag, message.author.avatarURL).setColor('RANDOM').setTimestamp()       

        message.channel.send(embed1).then(msg => msg.delete(5 * 1000))
      }  
  };

exports.help = {
  name: 'eval'
}