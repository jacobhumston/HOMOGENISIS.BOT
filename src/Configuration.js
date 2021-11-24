/** 
 * @module
 * Configuration Module 
 * [Docs](./docs/Configuration.js.md)
 */
module.exports = {
    version: "v1.0.pre-beta",
    staffPermissionRequirement: "ADMINISTRATOR",
    client: {
        token: "",
        intents: [
            "GUILDS",
            "GUILD_MEMBERS",
        ],
        activity: {
            type: "WATCHING",
            content: "fun events.",
        },
        status: "",
    },
};