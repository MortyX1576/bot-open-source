const Discord = require ('discord.js')

exports.run = async (client, message,args) => {

     message.channel.send(`${message.author}, olhe sua caixa de mensagens!`).then (msg => msg.delete(5000))

    const embed3 = new Discord.RichEmbed()
    .setTitle("Painel de Ajuda")   
    .setDescription("**▪ Use '⚙️' para ver os comandos da administração.\n▪ Use '🎮' para ver os comandos de utilidade.\n▪ Use '🔙' para voltar.**")
    .setColor ("#00FF00")
    .setFooter("Página: 1")
    .setTimestamp()
    
        message.channel.send(embed3).then(async dados =>{
        await dados.react("⚙️");
                                 
        let filtro1 = (reaction,usuario) => reaction.emoji.name === "⚙️" && usuario.id === message.author.id
        let collector1 = dados.createReactionCollector(filtro1, {max: 1, time: 2*60*1000})

        collector1.on('collect', reaction=>{
        if(reaction.emoji.name === "⚙️")
        {
        const embed1 = new Discord.RichEmbed()
        .setDescription("Teste.")
        .setColor ("#00FF00")
        dados.edit(embed1)
        // <a:RingingBell:671788063063670824>
// a:loading:671469442957574214>
        }}) // Co
})
}

exports.help = {
  name: 'dm'
}