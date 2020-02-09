const Discord = require('discord.js');

exports.run = async (client, message) => {
  
  await message.author.createDM(); // cria uma dm
  // embed "principal"
  const embed = new Discord.RichEmbed().setDescription('Exemplo.');

  message.author.send(embed).then(async dados => {
    await dados.react('⚙️');
    await dados.react('🙂');
    let filtro = (reaction, usuario) => (reaction, usuario) => reaction.emoji.name && usuario.id === message.author.id;
    let collector = dados.createReactionCollector(filtro, { max: 10, time: 2 * 60 * 1000 });

    // se o usúario reagiu ao emoji, ele vai coletar
    collector.on('collect', reaction => {
      if (reaction.emoji.name === '⚙️') {
        //
        embed.description = 'Exemplo 1'
        dados.edit(embed); // ai aqui 'ele' vai editar a embed principal e vai substituir por essa..
      } else if (reaction.emoji.name === '🙂') {
        embed.description = 'Exemplo 2'
        dados.edit(embed);
      }
    });
  });
};

exports.help = {
  name: 'dm'
}