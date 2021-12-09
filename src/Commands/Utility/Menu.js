const
    Discord = require('discord.js'),
    FileSystem = require('fs'),
    Fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args)).catch(error => {
        return;
    }),
    Configuration = require("../../Modules/Configuration.js"),
    PrettyMilliseconds = require('pretty-ms');

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
            .setColor(Configuration.client.embedColor)
            .setTitle(`Menu`)
            .setDescription(`Hello <@${Interaction.user.id}>! I'm a bot that is dedicated to this server specifically. Below you can find more useful info.\n> **Version:** \`${Configuration.version}\`\n> **Ping:** ${PrettyMilliseconds(Client.ws.ping)}\n> **Uptime:** ${PrettyMilliseconds(Client.uptime)}`)
            .addField("GitHub", `HOMOGENISIS.BOT is open souce, please [click here](https://github.com/jacobhumston/HOMOGENISIS.BOT) to go to the repository.\n> **Latest commits:**\n> Development: [${BranchData.development["sha"].substring(0, 7)}](${BranchData.development["html_url"]})\n> Current: [${BranchData.current["sha"].substring(0, 7)}](${BranchData.current["html_url"]})`);

        const CommandTexts = [];
        for (const File of FileSystem.readdirSync("./src/Commands")) {
            const Commands = [];
            let Emoji;
            for (let CommandFile of FileSystem.readdirSync("./src/Commands/" + File)) {
                if (CommandFile.endsWith(".json")) {
                    Emoji = require("../../Commands/" + File + "/" + CommandFile).emoji;
                    continue;
                };
                CommandFile = require("../../Commands/" + File + "/" + CommandFile);
                Commands.push(CommandFile);
            };
            CommandTexts.push(`**${Emoji} ${File}:** ${Commands.map(Command => `\`/${Command.usage}\``).join(", ")}`);
        };

        Embed.addField("Commands", CommandTexts.join("\n"));
        
        await Interaction.editReply({ embeds: [Embed] }).catch(error => {
            return;
        });
        return;
    },
};