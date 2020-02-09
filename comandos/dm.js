const Discord = require ('discord.js')

exports.run = async (client, message) => {

        message.author.createDM()
        message.channel.send(`${message.author}, olhe sua caixa de mensagens!`).then (msg => msg.delete(5000))

        // embed inical
        const embed3 = new Discord.RichEmbed()
        .setTitle("Teste 1234.")   
        .setDescription("Teste 123.")
    
        message.author.send(embed3).then(async dados =>{ // coletor de emoji
        await dados.react("⚙️");                         
        let filtro1 = (reaction,usuario) => reaction.emoji.name === "⚙️" && usuario.id === message.author.id
        let collector1 = dados.createReactionCollector(filtro1, {max: 1, time: 2*60*1000})

        collector1.on('collect', reaction=>{
        if(reaction.emoji.name === "⚙️") // quando o cara reagir ao emoji, vai edit a embed principal e vai mandar essa embed:
        {
        const embed1 = new Discord.RichEmbed()
        .setDescription("Teste.")
        .setColor ("#00FF00")
        dados.edit(embed1)
      
        }})
})
}

exports.help = {
  name: 'dm'
}