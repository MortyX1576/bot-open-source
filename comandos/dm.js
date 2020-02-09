const Discord = require('discord.js');

exports.run = async (client, message) => {
  
  await message.author.createDM(); // cria uma dm

  // embed "principal"
  const embed = new Discord.RichEmbed().setDescription('Exemplo.');

  message.author.send(embed).then(async dados => {
    await dados.react('⚙️');
    await dados.react('🙂');
    let filtro = (reaction, usuario) => (reaction.emoji.name === '⚙️' || reaction.emoji.name === '🙂') && usuario.id === message.author;
    let collector = dados.createReactionCollector(filtro, { max: 1, time: 2 * 60 * 1000 });

    // se o usúario reagiu ao emoji, ele vai coletar
    collector.on('collect', reaction => {
      if (reaction.emoji.name === '⚙️') {
        //
        const embed1 = new Discord.RichEmbed().setDescription('Exemplo 1.');
        dados.edit(embed1); // ai aqui 'ele' vai editar a embed principal e vai substituir por essa..
      } else if (reaction.emoji.name === '🙂') {
        const embed2 = new Discord.RichEmbed().setDescription('Exemplo 2.');
        dados.edit(embed2);
      }
    });
  });
};

exports.help = {
  name: 'dm'
}