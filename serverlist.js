const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "719929554575294544") return message.channel.send(`Vous n'avez pas la permission.`);

    let bicon = bot.user.displayAvatarURL();

    let string = '';
    bot.guilds.cache.forEach(guild => {
    string += guild.name + '\n';})
    let bt = bot.user.username;

    let botembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(string)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL())
        .setThumbnail(bicon)

    message.channel.send(botembed);
}

module.exports.config = {
    name: "serverlistdev"
}