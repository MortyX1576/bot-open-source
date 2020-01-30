const Discord = require('discord.js')
const { inspect } = require('util');

exports.run = async (bot, message, args) => 
{          
    let evaled;
    try {
      evaled = await eval(args.join(' '));
      message.channel.send(inspect(evaled));
      //console.log(inspect(evaled));
    }
    catch (error) {
      console.error(error);
      message.reply("houve um erro durante a avaliação");
    }  
}
exports.help = {
    name: 'eval'  
}