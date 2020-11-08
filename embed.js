const Discord = require("discord.js")
const botconfig = require('../db/config.json')
const colours = require('../colours.json')
const superagent = require("superagent")
 
 
module.exports.run = async (bot, message, args) => {
        message.delete();
 
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission")
 
        let channel = message.mentions.channels.first()
        if(!args[0]) return message.channel.send(":white_check_mark: | Merci de précisez le salon")
 
        let author = args[1]
        if(!args[1]) return message.channel.send(":white_check_mark: | Merci de précisez l'autheur")
 
        let description = args[2]
        if(!args[2]) return message.channel.send(":white_check_mark: | Merci de précisez la description")
 
        let CustomEmbed = new Discord.MessageEmbed()
        .setAuthor(`${author}`)
        .setDescription(`${description}`)
        .setColor('RANDOM')
        .setFooter("Zigol | CustomEmbed")
 
        channel.send(CustomEmbed)
}
 
 
module.exports.config = {
    name: "embed",
}