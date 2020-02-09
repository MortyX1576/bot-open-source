const Discord = require ('discord.js')

exports.run = async (client, message,args) => {

     await message.author.createDM()
     message.channel.send(`${message.author}, olhe sua caixa de mensagens!`)

    const embed3 = new Discord.RichEmbed()
    .setTitle("Teste")   
    .setDescription("David é lindo!")
    .setTimestamp()
    
        message.channel.send(embed3).then(async dados =>{
        await dados.react("🎮");
                         
        let filtro1 = (reaction,usuario) => reaction.emoji.name === "🎮" && usuario.id === message.author.id

        let collector1 = dados.createReactionCollector(filtro1, {max: 1, time: 2*60*1000})

        collector1.on('collect', reaction=>{
        if(reaction.emoji.name === "⚙️")
        {
        const embed1 = new Discord.RichEmbed()
        .setTitle("Teste.")
        .setDescription("Eae mano, miguelws é lindão!")
        dados.edit(embed1)
        // <a:RingingBell:671788063063670824>
// a:loading:671469442957574214>
        }}) // Coletor 1
       
})
}

exports.help = {
  name: 'dm'
}