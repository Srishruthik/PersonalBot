const {MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")

require("dotenv").config()

const weatherFunc = (bot,args) => {    
    let location = args[0] + " " + ( args[1] === undefined ? "" : args[1])
    const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_TOKEN}&q=${location}&aqi=no`


    fetch(url)
    .then(data =>  data.json())
    .then(data => {

        const location = data.location

        const current = data.current
        
       
        let emededWeatherUI = new MessageEmbed()
        .setTitle(`${location.name}, ${location.country}`)
        .setThumbnail("https:"+current.condition.icon)
        .addFields(
            { name: 'Temperature', value: `${current.temp_f}F (${current.temp_c})C`, },

            { name: 'Wind Speed', value: `${current.wind_mph} mph (${current.temp_c} kph)`, },

            { name: 'Feels like', value: `${current.feelslike_f}F (${current.feelslike_c})C`, },

            { name: 'Humidity', value: `${current.humidity}`, },
            
            {name:'Precipitation',value: `${current.precip_in}in(${current.precip_mm}mm)`}

            
            )

            .setFooter(`Requested by: ${bot.author.tag} (NOTE: The data shown may not be exact)`)
            .setTimestamp()

        bot.reply(emededWeatherUI)
        console.log(location)
        console.log(current)
    }).catch((error) => {
        console.log(error)
        bot.reply("Dude, the city that you entered doesn't exist ¯\_(ツ)_/¯ OR something is wrong with shru's brain 😅 ")
    })



    
}








module.exports = {

    weatherFunc:weatherFunc
    
}