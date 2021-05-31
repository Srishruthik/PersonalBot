require("dotenv").config()
const {Client,Collection}  = require("discord.js")
const client = new Client()

const {weatherFunc} = require("./weather.js")

const {help} = require("./help.js")
const usedCommandRecently = new Set()

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

    
        
        
        if(CMD_NAME == "wthr"){

            if(usedCommandRecently.has(message.author.id)){
                message.reply("Chill Fam, you are in cooldown. Wait `30` seconds 🥺")

            }
            else{

            weatherFunc(message,args)

            usedCommandRecently.add(message.author.id)
            setTimeout(() => {
                usedCommandRecently.delete(message.author.id)
            },30000)
         } 

        } else if(CMD_NAME == "milk"){
            for(let i = 0;i<5;i++){
                message.channel.send("Milk rules :)")
            }
        }
        else if(CMD_NAME == 'help'){
            help(message)
        }
        


    }
    


})

client.login(process.env.TOKEN)



