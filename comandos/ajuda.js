const Discord = require ('discord.js')

exports.run = async (client, message, args, Database) => {
      
    message.author.createDM()
    message.channel.send(`${message.author}, olhe seu privado!`).then (msg => msg.delete(5000))

    const embed3 = new Discord.RichEmbed()
    .setTitle("Painel de Ajuda")   
    .setDescription("▪ Use '⚙️' para ver os comandos da administração.\n▪ Use '🎮' para ver os comandos de utilidade.\n▪ Use '🔙' para voltar.")
    .setColor ("#00FF00")
    .setThumbnail(bot.user.avatarURL)
    .setFooter("Página: 1")
    .setTimestamp()
    
        message.channel.send(embed3).then(async dados =>{
        await dados.react("⚙️");
        await dados.react("🎮");
        await dados.react("🔙");                          
        let filtro1 = (reaction,usuario) => reaction.emoji.name === "⚙️" && usuario.id === message.author.id
        let filtro2 = (reaction,usuario) => reaction.emoji.name === "🎮" && usuario.id === message.author.id
        let filtro3 = (reaction,usuario) => reaction.emoji.name === "🔙" && usuario.id === message.author.id
        let collector1 = dados.createReactionCollector(filtro1, {max: 1, time: 2*60*1000})
        let collector2 = dados.createReactionCollector(filtro2, {max: 1, time: 2*60*1000})
        let collector3 = dados.createReactionCollector(filtro3, {max: 1, time: 2*60*1000})
        collector1.on('collect', reaction=>{
        if(reaction.emoji.name === "⚙️")
        {
        const embed1 = new Discord.RichEmbed()
        .setTitle("▸ Administração:")
        .setDescription("**`▪ <role> <usúario> <cargo>`**\n")
        .setColor ("#00FF00")
        .setFooter("Página: 2")
        .setTimestamp()
        dados.edit(embed1)
        }}) // Coletor 1
        collector2.on('collect', reaction=>{
        if(reaction.emoji.name === "🎮")
        {
        const embed2 = new Discord.RichEmbed()
        .setTitle("▸ Utilidade:")
        .setDescription("**`▪ <perfil> <usúario>`**\n**`▪ <ping>`**")
        .setColor ("#00FF00")
        .setFooter("Página: 3")
        .setTimestamp()
        dados.edit(embed2)
        }}) // Coletor 2
        collector3.on('collect', reaction=>{
        if(reaction.emoji.name === "🔙")
        {
        dados.edit(embed3)
        }}) // Coletor 3
})
}  
exports.help = {
    name: 'ajuda'
}