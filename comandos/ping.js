const Discord = require('discord.js')
exports.run = async (client, message, args) => 
{    
    const msg = await message.channel.send(`🏓 Calculando...`);
    let embed = new Discord.RichEmbed()
    .setTitile("Smash Ping:")    
    .setColor("BLUE")    
    .setDescription(`<:wifi:671435056228728842> Latência: ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms!
    <:wifi:671435056228728842> Latência API: ${Math.round(message.client.ping)}ms!`)
    msg.edit(embed) 
}
exports.help = {
    name: 'ping'
}