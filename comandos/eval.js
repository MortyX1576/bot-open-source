const Discord = require('discord.js')
const { inspect } = require('util');

exports.run = async (bot, message, args) => 
{          
    let evaled;
    try {
      evaled = await eval(args.join(' '));
      const embed = new Discord.RichEmbed()        
      .addField(`Entrada:`,` ${args}`)      
      .addField(`Saida:`,` ${inspect(evaled)}`);       
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