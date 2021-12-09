/**
 * @module
 * Configuration.js
 * @description
 * An object containing all of the bot's configuration
 */
module.exports = {
    version: "v1.0.beta",
    permissions: {
        staffRoleID: "914287882817114123",
        developerUserID: "539194357706653696",
    },
    client: {
        token: require("./../token.json").token,
        guildID: "837866184505294849",
        guildCheckOnStartUp: true,
    },
};