require("dotenv").config()
const {Client}  = require("discord.js")
const client = new Client()

const {game_ttt} = require("./ticTacToe.js")

const PREFIX = "s!"
client.on("ready",() => {
    console.log(`${client.user.tag} has logged on!`)
})


client.on("message",(message) => {
    if(message.author.bot) return;
    
    if(message.content.startsWith(PREFIX)){

        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/)
        console.log(CMD_NAME)
        if(CMD_NAME == "ttt"){
            game_ttt(message)
        }
        


    }
    


})

client.login(process.env.TOKEN)



