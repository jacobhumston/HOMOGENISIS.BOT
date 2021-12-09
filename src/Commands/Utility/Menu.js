const
    Discord = require('discord.js'),
    FileSystem = require('fs');

/**
 * @module 
 * Commands/Menu.js
 * @description
 * Menu command
 */
module.exports = {
    name: "Menu",
    usage: "menu",
    description: "Help menu.",
    hidden: false,
    staffOnly: false,
    /**
     * @description
     * Use the command
     * @param {typeof Discord.Client} Client - Discord client object
     * @param {typeof Discord.BaseCommandInteraction} Interaction - Command interaction object
     * @returns {Promise<void>}
     */
    use: async function(Client, Interaction) {
        const Embed = new Discord.MessageEmbed()
            .setColor("23272A")
            .setTitle(`Help Menu`)
            .setAuthor(Client.user.username, Client.avatarURL({ dynamic: true }))
            .setDescription("Hello, this is a test!");
        await Interaction.editReply({ embeds: [Embed] }).catch(error => {
            return;
        });
        return;
    },
};