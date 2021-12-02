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

        // Loop through the client's guilds and leave any not matching the ID found in config
        let Guilds = await Client.guilds.fetch();
        for (const Guild of Guilds.values()) {
            if (Guild.id !== Config.client.guildID) {
                await Guild.leave();
            };
        };

        // Return void
        return;
    },
};
