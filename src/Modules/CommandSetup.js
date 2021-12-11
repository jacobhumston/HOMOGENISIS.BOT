const
    LogsModule = require("./Logs.js"),
    FileSystem = require('fs'),
    Configuration = require("./Configuration.js"),
    Discord = require('discord.js');

/**
 * @module
 * CommandSetup.js
 * @description
 * Functions to set up commands
 */
module.exports = {
    /**
     * @description
     * Setup commands
     * @example
     * CommandSetup.setupCommands(Discord.Client);
     * @param {typeof Discord.Client} Client - Discord client object
     * @param {boolean} [Log=false] - Log actions
     * @returns {Promise<void>}
     */
    setupCommands: async function(Client, Log) {
        if (!Client) throw "Client is required.";
        if (!Log) Log = false;

        try {
            const Guild = await Client.guilds.fetch(Configuration.client.guildID);
            const GuildCommandManager = Guild.commands;
            const Commands = [];

            if (Log) LogsModule.log("log", "CommandSetup", `Command setup started!`);

            for (const File of FileSystem.readdirSync("./src/Commands")) {
                for (let CommandFile of FileSystem.readdirSync("./src/Commands/" + File)) {
                    if (CommandFile.endsWith(".json")) continue;
                    CommandFile = require("../Commands/" + File + "/" + CommandFile);

                    const CommandObject = {};
                    CommandObject.name = CommandFile.usage;
                    CommandObject.description = CommandFile.description;

                    if (CommandFile.options) CommandObject.options = CommandFile.options;

                    Commands.push(CommandObject);
                };
            };

            await GuildCommandManager.set(Commands);
        } catch (error) {
            LogsModule.log("error", "CommandSetup", error);
        };

        if (Log) LogsModule.log("log", "CommandSetup", `Command setup finished.`);

        return;
    },
};