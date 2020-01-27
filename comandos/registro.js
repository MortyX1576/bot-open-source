const Discord = require("discord.js");
exports.run = async (client, message, args,Database) => {
  Database.Users.findOne({ _id: message.author.id}, function(erro, dados) {
    if (dados) {
      message.reply("Voce tem Conta")
      dados.save();
    } else {
      message.reply("Voce nao tem Conta")
    }
  });
};
exports.help = {
  name: "registro"
};
