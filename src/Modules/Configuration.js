/**
 * @module
 * Configuration.js
 * @description
 * An object containing all of the bot's configuration
 */
module.exports = {
    version: "v1.2.pre-beta",
    // current version of the bot
    permissions: {
        staffRoleID: "914287882817114123",
        // role that is required to use staff commands
        developerUserID: "539194357706653696",
        // user that is allowed to use developer commands
    },
    client: {
        token: require("./../token.json").token,
        // client token/password
        guildID: "837866184505294849",
        // guild that the client belongs in
        guildCheckOnStartUp: true,
        // check that the client is only in the guild it belongs in on startup
    },
};