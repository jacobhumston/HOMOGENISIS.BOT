// require needed modules
const LogsModule = require("./Logs.js");

/**
 * @module
 * GuildsCheck.js
 * @description
 * Functions relating to the bot's guilds
 */
module.exports = {
    /** 
     * @description
     * Leave any guilds not found in config
     * @example
     * GuildsCheck.leaveGuilds(Discord.Client, require("./Configuration.js"), true);
     * @param {object} Client - Discord client object
     * @param {object} Config - Configuration object
     * @param {boolean} [Log=false] - Log guilds that are left
     * @returns {Promise<void>}
     */
    leaveGuilds: async function (Client, Config, Log) {
        // some basic param checks
        if (!Client) throw "Client is required.";
        if (!Config) throw "Config is required.";
        if (!Log) Log = false;
 
        // log that the guild check started if log is enabled
        if (Log) LogsModule.log("log", "GuildsCheck", `Guild check started!`);

        // fetch the client's guilds
        let Guilds = await Client.guilds.fetch();

        // loop through the guilds of the client using the function that turns the collection into an array
        for (let Guild of Guilds.values()) {
            // check if the guild ID matches the one found in config 
            if (Guild.id !== Config.client.guildID) {
                // we have to fetch the guild to get the leave function
                Guild = await Guild.fetch();
                // leave the guild if it doesnt match the ID found in config
                const LeftGuild = await Guild.leave();
                // log the guild that the bot left if log is enabled
                if (Log) LogsModule.log("log", "GuildsCheck", `Left guild called ${LeftGuild.name}...`);
            };
        };

        // log that the guild check finished if log is enabled
        if (Log) LogsModule.log("log", "GuildsCheck", `Guild check finished.`);

        // return void
        return;
    },
};
