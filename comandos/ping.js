const Discord = require('discord.js')
exports.run = async (client, message, args) => 
{    
    const msg = await message.channel.send(`🏓 Pinging....`);
    let embed = new Discord.RichEmbed()
    .setTitle("Ping do Bot")    
    .setColor("BLUE")   
    .setTimestamp()    
    .setDescription(`Latencia: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms
    Latencia API: ${Math.round(message.client.ping)}ms`);         
    msg.edit(embed)
}
exports.help = {
    name: 'ping'
}