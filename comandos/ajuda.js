const Discord = require ('discord.js')

exports.run = async (client, message, args, Database) => {
      
    message.author.createDM()
    message.channel.send(`${message.author}, olhe sua caixa de mensagens.`).then (msg => msg.delete(5000))

    const embed3 = new Discord.RichEmbed()
    .setTitle("Painel de Ajuda")   
    .setDescription("Olá, sou o **Smash**, um bot **optimizado** e com diversificadas funções, espero que **goste**!")
    .addField('<:sydneyoperahouse:672134186739564584> | Menu Principal', `Para voltar ao painel principal.`)
    .addField('<:phone:672132596725055488> | Suporte', `Caso queira entrar em contato com os criadores, [clique aqui.](https://discord.gg/Myy9MhY)`)
    .addField('<:seoandweb:672131751031734272> | Menu de comandos', `Veja todos meus comandos.`)
    .setColor ("#00FF00")
    .setThumbnail(client.user.avatarURL)
    .setFooter("Página: 1")
    .setTimestamp()
    
        message.author.send(embed3).then(async dados =>{
        await dados.react("✅");
        await dados.react("😜");                          
        let filtro1 = (reaction,usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id
        let filtro2 = (reaction,usuario) => reaction.emoji.name === "😜" && usuario.id === message.author.id
        let filtro3 = (reaction,usuario) => reaction.emoji.name === "🔙" && usuario.id === message.author.id
        let collector1 = dados.createReactionCollector(filtro1, {max: 10, time: 2*60*1000})
        let collector2 = dados.createReactionCollector(filtro2, {max: 10, time: 2*60*1000})
        let collector3 = dados.createReactionCollector(filtro3, {max: 10, time: 2*60*1000})
        
        collector1.on('collect', reaction=>{
        if(reaction.emoji.name === "✅")
        {
        const embed1 = new Discord.RichEmbed()
        .setTitle(" <:seoandweb:672131751031734272> | Menu de comandos")
        .setDescription("**O meu prefix é:** `!.`\n\n`role` `registro` `warn` ")
        .setColor ("#00FF00")
        .setFooter("Página: 2")
        .setTimestamp()
        dados.edit(embed1)
        reaction.remove(message.author.id)
        dados.react("🔙");
        }}) // Coletor 1

        collector3.on('collect', reaction=>{
        if(reaction.emoji.name === "🔙")
        {
        dados.edit(embed3)
        dados.react("🔙");
        reaction.remove(message.author.id)
        reaction.remove()
        }}) // Coletor 3
})
}  
exports.help = {
    name: 'ajuda'
}