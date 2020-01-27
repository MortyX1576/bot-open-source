const Discord = require ('discord.js')

exports.run = (client,message,args) => {

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];

    } catch (e) {

        return message.channel.send(`Unable to reload: ${args[0]}`);
    }
    message.channel.send(`Você reiniciou o ${args[0]}`);
}
exports.help = {
    name: 'reload'
}