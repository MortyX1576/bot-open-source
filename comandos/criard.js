const Discord = require('discord.js')
exports.run = async (client, message, args, Database ) =>
{    
Database.Guilds.findOne({ _id: message.guild.id},function(erro, dados) {
if (!dados) {
new Database.Guilds({
_id: message.guild.id,
prefix: "!",
canal: "0",
cargo: "0"
})}
})
}
exports.help = {
  name: "criard"
}