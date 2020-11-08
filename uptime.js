const Discord = require('discord.js');
const colours = require("../colours.json")

module.exports.run = async(bot, message, args) => {
    if(message.author.id !== "719929554575294544") return message.channel.send(new Discord.MessageEmbed().setTitle(':x: | Vous êtes Pas Le Owner Du Bot !').setColor('#FF0000'))

    let aEmbed266 = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .addField("**:white_check_mark:  | Bot En Ligne Depuis...**", (Math.round(bot.uptime / (1000 * 60 * 60 * 24)) % 30) + " Jours, " + (Math.round(bot.uptime / (1000 * 60 * 60))) + " heures, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " Minutes, est " + (Math.round(bot.uptime / 1000) % 60) + " Secondes", true)
    message.channel.send(aEmbed266)

}

module.exports.config = {
    name: "uptime",
}