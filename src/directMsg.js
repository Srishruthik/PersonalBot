const DM_msg = async(bot,message, client) => {
    let user = message[0]
    let msg = ""
    for(let i = 1;i<message.length;i++){
        msg+=message[i]
        msg+=" "
    }
    if (bot.author.tag === "XxShruthikxX#6969"){
        console.log(client.users)
      await  client.users.fetch(user).then(async(user) => {
           await user.send(msg)
           
        })
        .then(() => {
            console.log(`sucessfull sended ${msg} to ${user}`)
        })
    }else{
        bot.reply("No lol only XxShruthikxX#3705 can use it ")
    }
}

module.exports = {
    DM_Msg:DM_msg
}