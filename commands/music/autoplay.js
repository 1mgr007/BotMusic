const { MessageEmbed } = require("discord.js");
const { status } = require("../../utils/distube.js");

module.exports = {
    name: "autoplay",
    category: "music",
    aliases: [ "ap" ],
    description: "AutoPlay Music",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    inVoiceChannel: true,
    sameVoiceChannel: true,
    execute(message, args) {
        const queue = message.client.distube.getQueue(message);

        if(!queue) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription(`❌ There is no music playing.`);
            return message.channel.send(thing);
        }

        let mode = message.client.distube.toggleAutoplay(message);

        let thing = new MessageEmbed()
            .setColor(message.client.color)
            .setAuthor(message.client.user.username, message.client.user.displayAvatarURL())
            .setDescription("Set autoplay mode to **" + (mode ? "On" : "Off") + "**")
            .setFooter(status(message.author.tag, queue), message.author.displayAvatarURL());
        message.channel.send(thing);
    }
}