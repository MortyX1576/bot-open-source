const Discord = require ('discord.js')

exports.run = (client, message, args) => {

    const cal1 = parseInt(args[0], 10)
    const operation = args[1]    
    const cal2 = parseInt(args[2], 10)
    
    if (!["+", "-", "x", "/"].includes(operation)) return message.reply("Escolha um operador valido!");

    let real;

    switch(operation) {
        case "+": real = cal1 + cal2;
            break;
        case "-": real = cal1 - cal2;
            break;
        case "/": real = cal1 / cal2;
            break;
        case "x": real = cal1 * cal2;
      }

    const embed = new Discord.RichEmbed().setTitle("Calculadora")
    .setDescription(`A resposta do seu \`\`cálculo\`\` é:\n\`\`\`${real}\`\`\``)
    .setColor('#00FFFF')
    .setFooter(message.author.tag, message.author.avatarURL).setTimestamp()

    message.channel.send(embed)
}

exports.help = {
  name:'calcular'
}