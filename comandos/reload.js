const Discord = require ('discord.js')

exports.run = (client,message,args) => {

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];

    } catch (e) {

        return message.channel.send(`<:7685_no:671412271951380500> | Não existe o comando **${args[0].toUpperCase()}**.`); 
    }
    message.channel.send(`<:2990_yes:671412271985065996> | **${args[0].toUpperCase()}** foi reiniciado com sucesso!`);

}
exports.help = {
    name: 'reload'
}