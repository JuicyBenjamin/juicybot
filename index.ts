import DiscordJS, { Intents } from 'discord.js'
const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on('ready', () => {
  console.log('The client is ready!')
})

client.on('messageCreate', (message) => {
  console.log(message)
  if (message.content.toLowerCase() === 'ping') {
    message.reply({
      content: 'pong',
    })
  }
})

client.login(process.env.DJS_TOKEN)
