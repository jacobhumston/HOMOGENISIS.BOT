const
    Discord = require('discord.js'),
    FileSystem = require('fs'),
    Configuration = require("../Modules/Configuration.js");

/**
 * @module 
 * Events/CommandInteraction.js
 * @description
 * Event for command interactions
 */
module.exports = {
    /**
     * @description
     * Run and establish the event
     * @param {typeof Discord.Client} Client - Discord client object
     * @returns {Promise<void>}
     */
    run: async function(Client) {
        Client.on("interactionCreate", async Interaction => {
            if (!Interaction.isApplicationCommand()) return;
            
            let Command;
            Loop: for (const File of FileSystem.readdirSync("./src/Commands")) {
                for (let CommandFile of FileSystem.readdirSync("./src/Commands/" + File)) {
                    if (CommandFile.endsWith(".json")) continue;
                    
                    CommandFile = require("../Commands/" + File + "/" + CommandFile);
                    
                    if (Interaction.command.name === CommandFile.usage) {
                        Command = CommandFile;
                        break Loop;
                    };
                };
            };
            /**
             * @description
             * Respond to an error
             * @param {typeof Error} error - Error object
             * @returns {Promise<void>}
             */
            async function respondError(error) {
                let Developer;
                Developer = await Client.users.fetch(Configuration.permissions.developerUserID).catch(error => {
                    Developer = "Error finding user.";
                });
                if (Developer.tag) Developer = Developer.tag;
                await Interaction.channel.send(`<@${Interaction.user.id}>, something went wrong, please use the command again. If this happens more then once, please notify \`${Developer}\` with the info below.\`\`\`\n${error}\`\`\``).catch(error => {
                    return;
                });
                return;
            };
            
            if (!Command) return;
            await Interaction.deferReply({ ephemeral: Command.hidden }).catch(async error => {
                await respondError(error);
            });
            await Command.use(Client, Interaction).catch(async error => {
                await respondError(error);
            });
        });
        return;
    },
};