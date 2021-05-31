const {MessageEmbed} = require("discord.js")

const help  = (bot) => {
 

    let helpmsg = new MessageEmbed().setTitle("Command List")
    .addFields(
        {name:"s!wthr",value:"Gets the real time weather"},
        {name:"s!milk",value:"??? 🤫"},
        {name:"More comming soon.........",value:"..."}
    )

    bot.reply(helpmsg)


}


module.exports = {
    help: help
}

