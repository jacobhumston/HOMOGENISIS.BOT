const Discord = require("discord.js"),
    Fetch = (...args) =>
        import("node-fetch")
            .then(({ default: fetch }) => fetch(...args))
            .catch((error) => {
                return
            })

/**
 * @module
 * Commands/Utility/QuickLinks.js
 * @description
 * QuickLinks command
 */
module.exports = {
    name: "Cat",
    usage: "cat",
    description: "Get a random cat image.",
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
    use: async function (Client, Interaction) {
        Fetch("https://api.thecatapi.com/v1/images/search")
            .then((res) => res.json())
            .then((json) => {
                Interaction.editReply({
                    content: "Here you go! 🐈 ID#" + json[0].id,
                    files: [
                        {
                            attachment: json[0].url,
                        },
                    ],
                })
            })
            .catch((error) => {
                Interaction.editReply({ content: "For some reason I couldn't fetch the cat image...\n`" + error + "`" })
            })
    },
}
