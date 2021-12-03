/**
 * @module
 * Logs.js
 * @description
 * Functions used to log messages in console
 */
module.exports = {
    /**
     * @description
     * Log a message in console
     * @example
     * Logs.log("log", "Hello world!");
     * @param {('log'|'warn'|'error')} Type - Type of log
     * @param {string} Message - Message to log 
     * @returns {void}
     */
    log: function (Type, Message) {
        // some basic param checks
        if (!Type) throw "Type is required.";
        if (!Message) throw "Message is required."
        if (!Type.match('log|warn|error')) throw "Type must be 'log', 'warn', or 'error'.";

        // log the message in console
        console.log(`[${Type}] ${Message}`);

        // return void
        return;
    },
};