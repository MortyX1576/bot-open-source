const Discord = require ('discord.js')
const index = require ('../index.js')

exports.run = (bot,message,args) => {

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)]
        bot.comands.delete(args[0])
        const pull = require (`./${args[0]}.js`)
        bot.commands.set(args[0], pull)
        console.log(pull)

    } catch (e) {
        return message.channel.send(`<:7685_no:671412271951380500> | Não existe o comando **${args[0].toUpperCase()}**.`); 
    }
    message.channel.send(`<:2990_yes:671412271985065996> | **${args[0].toUpperCase()}** foi reiniciado com sucesso!`);

}
exports.help = {
    name: 'reload'
}