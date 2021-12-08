/**
 * @module
 * Logs.js
 * @description
 * Functions used to log messages in console
 */
module.exports = {
    /**
     * @description
     * Object of colors for logs
     */
    colors: {
        log: "\x1b[37m", // white
        warn: "\x1b[33m", // yellow
        error: "\x1b[31m", // red
    },
    /**
     * @description
     * Log a message in console
     * @example
     * Logs.log("log", "Hello world!");
     * @param {('log'|'warn'|'error')} Type - Type of log
     * @param {string} Name - Name of the file or action
     * @param {string} Message - Message to log 
     * @returns {void}
     */
    log: function (Type, Name, Message) {
        if (!Type) throw "Type is required.";
        if (!Name) throw "Name is required.";
        if (!Message) throw "Message is required.";
        if (!Type.match('log|warn|error')) throw "Type must be 'log', 'warn', or 'error'.";

        let Time = new Date().toLocaleString("en-US", { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: "America/New_York" });

        console.log(this.colors[Type], `${Time} | [${Type.toUpperCase()}: ${Name}]: ${Message}`);

        return;
    },
};