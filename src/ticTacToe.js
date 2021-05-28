const {MessageEmbed} = require("discord.js")

const gameTTT = (bot) => {

    let x = ":regional_indicator_x:"

    let o = ':o2:'
console.log("game tarting ttt")
    const gameBoard = [
        [":white_large_square:",":white_large_square:",":white_large_square:"],
        [":white_large_square:",":white_large_square:",":white_large_square:"],
        [":white_large_square:",":white_large_square:",":white_large_square:"],
    ]


   

    




    const showGame = new MessageEmbed().setTitle("Tic Tac Toe with Shru 2.0 :D").setDescription(gameBoard)
    let gameTitleMsg = "Tic Tac Toe :\"+/\+"
    bot.reply(gameTitleMsg,{
        embed: showGame
    }).then((embedMessage)=> {
        let reactions = ["1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
        for(reaction of reactions){
            embedMessage.react(reaction)
            gameTitleMsg= "Start"
        }
        

    
    })
}






module.exports ={
    game_ttt: gameTTT
}