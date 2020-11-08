const { Client, Message } = require("discord.js");

module.exports.run =  (Client, message, args) => {
    const user = message.mentions.users.first();
    const reason = args.splice(1).join(' ');
    user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas!");
};

module.exports.config = {
    name: "kick",
    aliases: ['kick'],
    description: "Kick un membre du serveur",
    cooldown: 10,
    usage: '<votre_message>',
    permissions: false,
    args: true
};
