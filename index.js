const { Client } = require('discord.js')
const client = new Client({intents:[3276799]})
const fs = require('fs')

client.options('ready', async() => {
    var files = fs.readdirSync('./core/').filter(file => file.endsWith('.js'))
    files.forEach(file => {
        try {
            require(`./core/${file}`).main(client)
        } catch (error) {
            console.log(`Cloudn't load ${file}`)
        }
    })
    console.log(`${client.user.username} is ready!`)
})

client.login(require('./data/config.json').token)