const router = require('express').Router()
const Discord = require('discord.js')
const fetch = require('node-fetch');
const btoa = require('btoa');
const fetchUserInfo = require('../util.js').fetchUserInfo
const CLIENT_TOKEN = process.env.TOKEN
const CLIENT_SECRET = process.env.SECRET

const client = new Discord.Client()
client.login(CLIENT_TOKEN)


router.get('/', async (req,res) => {
  
  const user = await fetchUserInfo(req.cookies)
  
  res.render('index', {client,user})
  
  //client.channels.get('666995196797648918').send(`${req.session.user.username} Logou no Site`)
  
})

router.get('/login', (req,res) => {
  
  res.redirect('https://discordapp.com/api/oauth2/authorize?client_id=666328569953124382&redirect_uri=https%3A%2F%2Fsmoke-discord-bot.glitch.me%2Fcallback&response_type=code&scope=identify%20guilds')
  
})

router.get('/callback', async (req, res) => {
  if (!req.query.code) throw new Error('NoCodeProvided');
  const code = req.query.code;
  const creds = btoa(`666328569953124382:${CLIENT_SECRET}`);
  const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=https://smoke-discord-bot.glitch.me/callback`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${creds}`,
      },
    });
  const json = await response.json();
  
  await res.cookie('userToken', json.access_token)
  await res.cookie('userRefreshToken', json.refresh_token)
  
  setTimeout(() => {
    res.redirect('/');
  }, 1000)
  
  const user = await fetchUserInfo({"userToken": json.access_token, "userRefreshToken": json.refresh_token})
  
  console.log('foi')
});

router.get('/logout', async (req,res) => {
  
  const user = await fetchUserInfo(req.cookies)
  
  //client.channels.get('666995196797648918').send(user.username + "#" + user.discriminator + " deslogou do site!!")
  
  res.cookie('userToken', null)
  res.cookie('userRefreshToken', null)

  res.redirect('/')
  
})








module.exports = router