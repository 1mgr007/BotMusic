const { MessageEmbed } = require("discord.js");

// If DisTubeOptions.searchSongs = true
module.exports = async (client, message) => {

    let thing = new MessageEmbed()
        .setColor("RED")
        .setDescription(`Searching canceled!`)
    message.channel.send(thing);

}