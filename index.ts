import * as DiscordJS from 'discord.js'
import { Intents } from 'discord.js'
import * as dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
  partials: ['CHANNEL'],
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_TYPING],
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
  if (message.content.toLocaleLowerCase() === 'b') {
    message.reply({
      content: 'ß',
    })
  }

  if (message.channel.type == 'DM') {
    console.log(message.author)
    if (message.author.id == process.env.JIB) {
      console.log(message.content)
      ;async () => {
        const copyPasta = process.env.COPYPASTA ?? 'null'
        const rawResponse = await fetch(copyPasta, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(message.content),
        })
        const content = await rawResponse.json()

        console.log(content)
      }
    }
  }
})

client.login(process.env.DJS_TOKEN)
