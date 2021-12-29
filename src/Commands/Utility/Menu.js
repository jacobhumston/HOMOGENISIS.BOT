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
 * Commands/Utility/Menu.js
 * @description
 * Menu command
 */
module.exports = {
    name: "Menu",
    usage: "menu",
    description: "Help menu.",
    hidden: false,
    staffOnly: false,
    options: null,
    /**
     * @description
     * Use the command
     * @param {typeof Discord.Client} Client - Discord client object
     * @param {typeof Discord.CommandInteraction} Interaction - Command interaction object
     * @returns {Promise<void>}
     */
    use: async function(Client, Interaction) {
        const BranchData = {
            current: await Fetch("https://api.github.com/repos/jacobhumston/HOMOGENISIS.BOT/commits/current").then(res => res.json()),
        };

        const Embed = new Discord.MessageEmbed()
            .setColor(Configuration.client.embedColor)
            .setTitle(`Menu`)
            .setDescription(`Hello <@${Interaction.user.id}>! I'm a bot that is dedicated to this server specifically. Below you can find more useful info.\n> **Version:** \`${Configuration.version}\`\n> **Ping:** ${PrettyMilliseconds(Client.ws.ping)}\n> **Uptime:** ${PrettyMilliseconds(Client.uptime)}`)
            .addField("GitHub", `HOMOGENISIS.BOT is open souce, please [click here](https://github.com/jacobhumston/HOMOGENISIS.BOT) to go to the repository.\n> **Latest commits:**\n> Current: [\`${BranchData.current["sha"].substring(0, 7)}\`](${BranchData.current["html_url"]})`);

        const CommandTexts = [];
        for (const File of FileSystem.readdirSync("./src/Commands")) {
            const Commands = [];
            let Emoji;
            let Description;
            for (let CommandFile of FileSystem.readdirSync("./src/Commands/" + File)) {
                if (CommandFile.endsWith(".json")) {
                    const JSONFile = require("../../Commands/" + File + "/" + CommandFile);
                    Emoji = JSONFile.emoji;
                    Description = JSONFile.description;
                    continue;
                };
                CommandFile = require("../../Commands/" + File + "/" + CommandFile);
                Commands.push(CommandFile);
            };
            CommandTexts.push(`**${Emoji} ${File}:** ${Commands.map(Command => `\`/${Command.usage}\``).join(", ")}\n- ${Description}`);
        };

        Embed.addField("Commands", CommandTexts.join("\n\n"));
        
        await Interaction.editReply({ embeds: [Embed] }).catch(error => {
            return;
        });
        return;
    },
};