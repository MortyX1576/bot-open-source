const Discord = require('discord.js');
const moment = require('moment');
const cpu = require('pidusage');
const { version } = require('discord.js');
require('moment-duration-format');
exports.run = async (bot, message, args) => {
cpu(process.pid, async (err, stats) => {
const duration = moment.duration(bot.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
const embed = new Discord.RichEmbed()
.setTitle('Smoke Status')
.setDescription(`
🛠 RAM Usada: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB
⏰ Uptime: ${duration}

🚻 Usuários: ${bot.users.size}

📊 Servidores: ${bot.guilds.size.toLocaleString()}

📡 Canais: ${bot.channels.size.toLocaleString()}

🎥 Status: ${bot.user.presence.status}

📠 Game: ${bot.user.presence.game}

🧾 Discord.js: v${version}

🗳 Uso CPU: ${Math.round(stats.cpu)}%

📙 Node.js: ${process.version}

🗃 Dependencies: ${Object.keys(require('../package').dependencies).length}

🔉 Voz: ${bot.voiceConnections.size}`)
.setColor('BLACK');  
message.channel.send(embed);
})
}
exports.help = {
    name: 'botinfo'
}
