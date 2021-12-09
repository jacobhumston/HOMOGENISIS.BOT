const
    Discord = require('discord.js'),
    FileSystem = require('fs'),
    Fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args)).catch(error => {
        return;
    }),
    Configuration = require("../../Modules/Configuration/.js");

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
        const BranchData = {
            current: await Fetch("https://api.github.com/repos/jacobhumston/HOMOGENISIS.BOT/commits/current").then(res => res.json()),
            development: await Fetch("https://api.github.com/repos/jacobhumston/HOMOGENISIS.BOT/commits/development").then(res => res.json()),
        };
        
        const Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Menu`)
            .setDescription(`Hello <@${Interaction.user.id}>! HOMOGENISIS.BOT is a Discord bot dedicated to the HOMOGENISIS Community Discord. Below you can find more useful info.\n**Version:** \`${Configuration.version}\``)
            .addField("GitHub", `HOMOGENISIS.BOT is open souce, please [click here](https://github.com/jacobhumston/HOMOGENISIS.BOT) to go to the repository.\n\n**Latest commits:**\nDevelopment: [${BranchData.development["sha"].substring(0, 7)}](${BranchData.development["html_url"]}) \nCurrent: [${BranchData.current["sha"].substring(0, 7)}](${BranchData.current["html_url"]})`)
        
        await Interaction.editReply({ embeds: [Embed] }).catch(error => {
            return;
        });
        return;
    },
};