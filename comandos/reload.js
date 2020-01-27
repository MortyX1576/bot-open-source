const Discord = require ('discord.js')

exports.run = (client,message,args) => {

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];

    } catch (e) {

        return message.channel.send(`**Não existe o comando**` + args[0]); 
    }
    message.channel.send(`**Smash** | ${args[0]} foi reiniciado com sucesso!`);

}
exports.help = {
    name: 'reload'
}