import * as DiscordJS from 'discord.js'
import { Intents } from 'discord.js'
import * as dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on('ready', () => {
  console.log('The bot is ready')
  if (client.user) {
    client.user.setActivity('The demise of Botnex!', { type: 'WATCHING' })
  } else {
    console.log('Benji you idiot, this fucking thing is null')
  }
})

client.on('messageCreate', (message) => {
  if (message.content.toLocaleLowerCase() === 'ping') {
    message.reply({
      content: 'pong',
    })
  }
})

client.login(process.env.DJS_TOKEN)
