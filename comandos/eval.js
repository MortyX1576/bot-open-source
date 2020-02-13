const Discord = require('discord.js')
const { inspect } = require('util');

exports.run = async (bot, message, args) => 
{          
    let evaled;
    try {
      evaled = await eval(args.join(''))      
      
      const embed = new Discord.RichEmbed()        
      .addField(`📤 **Entrada:**`, `\`\`\`${args.join(' ')}\`\`\``)      
      .addField(`📥 **Saida:**`, `\`\`\`${inspect(evaled)}\`\`\``)
      .setColor('RED')
      .setFooter(message.author.tag, message.author.avatarURL).setTimestamp()
             
      message.channel.send(embed);
    }
    catch (error) {
      console.error(error);
      message.reply("houve um erro durante a avaliação");
    }  
}
exports.help = {
    name: 'eval'  
}