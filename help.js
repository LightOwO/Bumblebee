const Discord = require("discord.js");
const colours = require("../colours.json");
    
    
    module.exports.run = async (bot, message, args) => {
            
        if(args[0] == "help") return message.channel.send(`Just do ${prefix} help instead.`)
    
        if(args[0]) {
            let command = args[0];
            let prefix = (config.prefix)
            if(bot.commands.has(command)) {
                var SHembed = new Discord.MessageEmbed()
                .setColor(colours.blue_light)
                .setAuthor(`"LightOwO#0001`, bot.user.displayAvatarURL)
                .setThumbnail(bot.user.displayAvatarURL)
                .setDescription(`Le prefix du bot "Bumblebee" est : &`)
                message.channel.send(SHembed)
                
            }}
    
        if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead`)
    
                let Nembed = new Discord.MessageEmbed()
                .setTitle(`Liste des commandes :`, bot.user.displayAvatarURL)
                .setDescription('Le Préfix de **Bumblebee** est `&` Le bot contient actuellement `81 Commandes.`')
                .addFields(
                    { name: 'Administration - (11)', value: '`addrole`, `annonce`, `config`, `selogs`, `setprefix`, `clear`, `removerole`, `sondage`, `raidon`, `raidoff`, `lock`, `unlock`' },
                    { name: 'Configuration - (5)', value: '`config`, `setjoin`, `setleave`, `setlogs`, `setprefix`' },
                    { name: 'Economy - (3)', value: '`daily`, `balance`, `transfer`' },
                    { name: 'Fun - (14)', value: '`8ball`, `gay`, `calin`, `cat`, `dog`, `frapper`, `rps`, `hug`, `kiss`, `clap`, `love`, `bienvenue`, `blague`, `amitié`' },
                    { name: 'Modération - (8)', value: '`ban`, `kick`, `tempkick`, `tempban`, `warn`, `unwarn`, `mute`, `unmute`' },
                    { name: 'Musique - (6)', value: '`join`, `leave`, `play`, `stopmusic`, `skip`, `back`' },
                    { name: 'NSFW - (8)', value: '`ass`, `boobs`, `fuck`, `gif`, `hentai`, `pussy`, `lick`, `slap`' },
                    { name: 'Divertissement - (18', value: '`about`, `spotify`, `leaderboard`, `say`, `avatar`, `botinfo`, `serverinfo`, `sondage`, `userinfo`, `channelinfo`, `embed`, `help`, `invite`, `ping`, `rank`, `stats`, `support`, `newticket`' },
                    { name: 'Owner - (7)', value: '`whitelist`, `blacklist`, `stop`, `eval`, `serverlist`, `uptime`, `reload`' },
                    { name: 'Lien Utile', value: '[Invitation](https://discord.com/oauth2/authorize?client_id=774362243726311475&scope=bot&permissions=8)' },
        
        
                )
                .setColor("#000000")
                .setThumbnail("https://tse1.mm.bing.net/th?id=OIP.yMmrePIRXtPegVrAqYQL8QHaHa&pid=Api&P=0&w=300&h=300")
                .setImage("https://cdn.discordapp.com/attachments/774921183313395722/774955027575472128/abbeille.jpg")
                .setFooter("LightOwO#0001")
                .setTimestamp()
                message.channel.send(Nembed);
            }

module.exports.config = {
    name: "help"
}