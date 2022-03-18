import * as DiscordJS from 'discord.js'
import { Intents } from 'discord.js'
import axios from 'axios'
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
  if (message.channelId === '924233797086634015') {
    if (message.content.toLocaleLowerCase() === '!pasta') {
      axios.get(`${process.env.COPYPASTA}stories.json`).then((resp) => {
        const stories = Object.values(resp.data)
        const randStory: any = stories[Math.floor(Math.random() * stories.length)]
        const story = 'story'
        if (story in randStory) {
          //console.log(randStory.story);
          message.channel.send(randStory.story)
        }
      })
    }
  }

  if (message.channel.type == 'DM') {
    console.log(message.author)
    if (message.author.id == process.env.JIB || message.author.id == process.env.JUICYBENJAMIN) {
      console.log(message.content)
      axios
        .post(`${process.env.COPYPASTA}stories.json`, {
          story: message.content,
        })
        .then((response) => {
          console.log(response)
        })
    }
  }
})

client.login(process.env.DJS_TOKEN)
