const Discord = require("discord.js");
exports.run = async (client, message, args,Database) => {
  Database.Guilds.findOne({ _id: message.guild.id}, function(erro, dados) {
    console.log(message.channel)
  if(message.guild.channel != dados.canal) return message.reply("Voce nao está em um canal de Registro")
  if(!args[0]) return message.channel.send(`❌ | ${message.author} Coloque uma Senha`)  
  //if(!args.length <= 6) return message.reply("Senha muito Fraca! Use acima de 6 Caracters")
     Database.Usuarios.findOne({ _id: message.author.id}, function(erro, dados) {
    if(dados) return message.reply("🛑 | Voce já possui uma Conta Criada")    
      message.delete();
      message.channel.send(`✅ | ${message.author} Conta Criada com Sucesso!`)
      new Database.Usuarios({
      _id: message.author.id,
      nome: message.author.username,
      tag: message.author.discriminator,
      senha: `${args}`,
      xp: "0",
      level: "0"     
      }).save()
     })}) //banco de dados
};
exports.help = {
  name: "registro"
}; 