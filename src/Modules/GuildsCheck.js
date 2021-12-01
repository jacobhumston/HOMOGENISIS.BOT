module.exports = {
    /**
     * @description
     * Leave any guilds not found in config
     * 
     * @param {Discord.Client} Client
     * @param {JSON} Config 
     * @returns {void}
     */
    leaveGuilds: async function (Client, Config) {
        // Some basic param checks
        if (!Client) throw "Client is required.";
        if (!Config) throw "Config is required."

        // Loop through the client's guilds and leave any not matching the ID
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