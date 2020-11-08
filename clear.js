const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply(":x: ❱ Vous n'avez pas la permission.");
    if(!args[0])
    return message.reply(":x: ❱ ?clear <entrer le nombre à supprimer>");
 
    message.channel.bulkDelete(args[0]).then(() => {
 
        let embed374 = new Discord.MessageEmbed()   
        .setTitle(`:white_check_mark:  ❱ ${args[0]} messages ont été supprimés !`)
        .setDescription("")
        .setColor("#FF0000")
        message.channel.send(embed374)
    })
}
 
module.exports.config = {
    name: "clear"
}