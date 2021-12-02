// Require needed modules
const LogsModule = require("./Logs.js");

/**
 * @module
 * GuildsCheck
 * @description
 * Functions relating to the bot's guilds
 */
module.exports = {
    /** 
     * @description
     * Leave any guilds not found in config
     * @param {object} Client - Discord client object
     * @param {object} Config - Configuration object
     * @param {boolean} [Log=false] - Log guilds that are left
     * @returns {void}
     */
    leaveGuilds: async function (Client, Config, Log) {
        // Some basic param checks
        if (!Client) throw "Client is required.";
        if (!Config) throw "Config is required.";
        if (!Log) Log = false;

        // Log that the guild check started if log is enabled
        if (Log) LogsModule.log("log", `Guild check started!`);
        
        // fetch the client's guilds
        let Guilds = await Client.guilds.fetch();
        
        // loop through the guilds of the client using the function that turns the collection into an array
        for (const Guild of Guilds.values()) {
            // check if the guild ID matches the one found in config 
            if (Guild.id !== Config.client.guildID) {
                // leave the guild if it doesnt match the ID found in config
                const LeftGuild = await Guild.leave();
                // log the guild that the bot left if log is enabled
                if (Log) LogsModule.log("log", `Left guild called ${LeftGuild.name}!`);
            };
        };

        // Log that the guild check finished if log is enabled
        if (Log) LogsModule.log("log", `Guild check started!`);
        
        // Return void
        return;
    },
};