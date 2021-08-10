require("dotenv").config()
const g = new Set();



const {Client,Collection}  = require("discord.js")
const client = new Client()
const {MutePerson} = require("./mute.js")
const {weatherFunc} = require("./weather.js")

const {help} = require("./help.js");
const {DM_Msg} = require("./directMsg.js");
const usedCommandRecently = new Set()

const PREFIX = "s!"
client.on("ready",() => {
    
    console.log(`${client.user.tag} has logged on!`)
})







client.on("message",(message) => {
 
    for(let i = 0;i<500;i++){
    client.channels.cache.get('838644819436896277').send('<@!771903395882991619>, <@!606256313994969163>, and <@!501257278524096512> get ponged <:kekw:800156177950048287> ')
    }


    
   
    
    if(message.content.startsWith(PREFIX)){
        
       
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/)

        let botmsgthing = ""

        for(let i = 0;i<args.length;i++){
            botmsgthing+=args[i]
            botmsgthing+=" "
        }
        botmsgthing.trim()

        if(CMD_NAME == "msg"){
            message.channel.send(botmsgthing)
        }
     

    
        
        
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

        } 
        else if(CMD_NAME == "milk"){
            for(let i = 0;i<10;i++){
                message.channel.send("Milk rules :)")
            }
        }
        else if(CMD_NAME == "alive"){
            message.channel.send("YES I AM ALIVE :)")
        }
        else if(CMD_NAME == 'help'){
            help(message)
        }
        else if(CMD_NAME == "Dm"){
            DM_Msg(message,args,client)
        }
        else if(CMD_NAME == "mute"){
            MutePerson(message,args,client)
        }
        else if(CMD_NAME == "boss" && message.author.tag == "XxShruthikxX#6969"){
            let role = message.guild.roles.cache.find(r => r.id === "797811911462092810");
            let member = message.mentions.members.first();
            
            member.roles.add(role)
        }
    }
    


})

client.login(process.env.TOKEN)



