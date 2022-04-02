const LogsModule = require("./Logs.js"),
    Configuration = require("./Configuration.js"),
    Discord = require("discord.js")

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
     * GuildsCheck.leaveGuilds(Discord.Client, true);
     * @param {typeof Discord.Client} Client - Discord client object
     * @param {boolean} [Log=false] - Log actions
     * @returns {Promise<void>}
     */
    leaveGuilds: async function (Client, Log) {
        if (!Client) throw "Client is required."
        if (!Log) Log = false

        if (Log) LogsModule.log("log", "GuildsCheck", `Guild check started!`)

        let Guilds = await Client.guilds.fetch()

        for (let Guild of Guilds.values()) {
            if (Guild.id !== Configuration.client.guildID) {
                Guild = await Guild.fetch()
                const LeftGuild = await Guild.leave()
                if (Log) LogsModule.log("log", "GuildsCheck", `Left guild called ${LeftGuild.name}...`)
            }
        }

        if (Log) LogsModule.log("log", "GuildsCheck", `Guild check finished.`)

        return
    },
}
