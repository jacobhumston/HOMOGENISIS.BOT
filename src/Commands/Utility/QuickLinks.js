const Discord = require("discord.js")

/**
 * @module
 * Commands/Utility/QuickLinks.js
 * @description
 * QuickLinks command
 */
module.exports = {
    name: "QuickLinks",
    usage: "quicklinks",
    description: "Get links quickly.",
    hidden: false,
    staffOnly: false,
    options: [
        {
            type: "STRING",
            name: "link",
            description: "Link to send.",
            required: true,
            choices: [
                {
                    name: "Recollection",
                    value: "https://www.roblox.com/games/6502616004/recollection",
                },
                {
                    name: "Discord Invite",
                    value: "https://discord.gg/RyMkFzywsT\nhttps://discord.gg/recollection",
                },
                {
                    name: "Group",
                    value: "https://www.roblox.com/groups/9924945/HOMOGENISIS",
                },
                {
                    name: "Recollection Wiki",
                    value: "https://recollection-roblox.fandom.com/wiki/Recollection_Wiki",
                },
            ],
        },
    ],
    /**
     * @description
     * Use the command
     * @param {typeof Discord.Client} Client - Discord client object
     * @param {typeof Discord.CommandInteraction} Interaction - Command interaction object
     * @returns {Promise<void>}
     */
    use: async function (Client, Interaction) {
        Interaction.editReply(Interaction.options.getString("link"))
    },
}
