const Discord = require("discord.js");
exports.run = async (client, message, args,Database) => {
  Database.Guilds.findOne({ _id: message.guild.id}, function(erro, dados) {   
  if(message.channel.id != dados.canal) return message.reply("Voce nao está em um canal de Registro")
  message.channel.send("Clique no Emoji para se Registrar").then(x =>{  
  x.react("📤")
  let filtro = (reaction,usuario) => reaction.emoji.name === "📤" && usuario.id === message.author.id;
  const coletor = x.createReactionCollector(filtro, {max: 1, time: 60000});     
  coletor.on("collect", msg1 =>{            
  message.author.send(`${message.author} Painel de Registro Enviado na sua DM`)
  message.author.createDM()
      //if(!args.length <= 6) return message.reply("Senha muito Fraca! Use acima de 6 Caracters")
      Database.Usuarios.findOne({ _id: message.author.id}, function(erro, dados) {
      if(dados) return message.reply("🛑 | Voce já possui uma Conta Criada")    
      let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
      .on('collect', c => {
      message.channel.send(`✅ | ${message.author} Conta Criada com Sucesso!`)
      new Database.Usuarios({
      _id: message.author.id,
      nome: message.author.username,
      tag: message.author.discriminator,
      senha: `${args}`,
      xp: "0",
      level: "0",
      logado: true
      }).save()
      })})})})}) //banco de dados
};
exports.help = {
  name: "registro"
}; 