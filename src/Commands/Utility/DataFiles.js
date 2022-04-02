const Discord = require("discord.js"),
    FileSystem = require("fs"),
    PrettyMilliseconds = require("pretty-ms"),
    tmp = require("tmp")

/**
 * @module
 * Commands/Utility/DataFiles.js
 * @description
 * DataFiles command
 */
module.exports = {
    name: "DataFiles",
    usage: "datafiles",
    description: "Get data files.",
    hidden: true,
    staffOnly: true,
    options: null,
    /**
     * @description
     * Use the command
     * @param {typeof Discord.Client} Client - Discord client object
     * @param {typeof Discord.CommandInteraction} Interaction - Command interaction object
     * @returns {Promise<void>}
     */
    use: async function (Client, Interaction) {
        const files = []
        const StartTime = new Date().getTime()
        const GuildMembers = await Interaction.guild.members.fetch()
        const tmpobj = tmp.fileSync({
            postfix: ".json",
            prefix: "guildmembers",
        })
        FileSystem.writeFileSync(tmpobj.name, JSON.stringify(GuildMembers.toJSON()), "utf-8")
        files.push({ attachment: tmpobj.name, name: "guildmembers.json" })
        const tmpobj2 = tmp.fileSync({ postfix: ".json", prefix: "guild" })
        FileSystem.writeFileSync(tmpobj2.name, JSON.stringify(Interaction.guild), "utf-8")
        files.push({ attachment: tmpobj2.name, name: "guild.json" })
        Interaction.editReply({
            content: `Fetched files in ${PrettyMilliseconds(new Date().getTime() - StartTime)}.`,
            files: files,
        })
    },
}
