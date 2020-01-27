const Discord = require("discord.js");
exports.run = async (client, message, args,Database) => {
  if(!args[0]) return message.channel.send(`❌ | ${message.author} Coloque uma Senha`)  
     Database.Usuarios.findOne({ _id: message.author.id}, function(erro, dados) {
    if (dados) {
      message.reply("🛑 | Voce já possui uma Conta Criada")      
    } else {
      message.channel.send("✅ | ${message.author} Conta Criada com Sucesso!")
      message.delete();
      new Database.Usuarios({
      nome: message.author.username,
      tag: message.author.discriminator,
      senha: args,
      xp: "0",
      level: "0"
      .save()
      })
    }
  });
};
exports.help = {
  name: "registro"
}; 