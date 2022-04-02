const Discord = require("discord.js"),
    Fetch = (...args) =>
        import("node-fetch")
            .then(({ default: fetch }) => fetch(...args))
            .catch((error) => {
                return
            }),
    FileSystem = require("fs")

/**
 * @module
 * Commands/Utility/QuickLinks.js
 * @description
 * QuickLinks command
 */
module.exports = {
    name: "Cat Custom",
    usage: "cat-custom",
    description: "Get a random cat image, these images are submitted by our community members.",
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
        const CatImages = []

        for (const File of FileSystem.readdirSync("./src/Images/Cats")) {
            CatImages.push("./src/Images/Cats/" + File)
        }

        const ChosenImage = CatImages[Math.floor(Math.random() * CatImages.length)]

        Interaction.editReply({
            content: "Here you go! 🐈",
            files: [
                {
                    attachment: ChosenImage,
                },
            ],
        })
    },
}
