/** 
 * @module
 * Configuration Module 
 * 
 */
module.exports = {
    version: "v1.0.pre-beta",
    staffPermissionRequirement: "ADMINISTRATOR",
    client: {
        token: require("./token.json"),
        intents: [
            "GUILDS",
            "GUILD_MEMBERS",
        ],
        guilds: [],
        activity: {
            type: "WATCHING",
            name: "fun events.",
            url: "",
        },
        status: "",
    },
};