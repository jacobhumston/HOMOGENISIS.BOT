/**
 * @module
 * Configuration
 * @description
 * An object containing all of the bot's configuration
 */
module.exports = {
    version: "v1.0.pre-beta",
    // Current version of the bot
    permissions: {
        staffRoleID: "914287882817114123",
        // Role that is required to use staff commands
        developerUserID: "539194357706653696",
        // Role that is required to use developer commands
    },
    client: {
        token: require("../token.json"),
        // Client token/password
        guildID: "837866184505294849",
        // Guild that the client belongs in
        guildCheckOnStartUp: true,
        // Check that the client is only in the guild it belongs in on startup
    },
};