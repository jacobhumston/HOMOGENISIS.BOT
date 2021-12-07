/**
 * @module
 * Logs.js
 * @description
 * Functions used to log messages in console
 */
module.exports = {
    /**
     * @description
     * object of colors for logs
     */
    colors: {
        log: "\x1b[37m",
        warn: "\x1b[33m",
        error: "\x1b[31m",
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
        // some basic param checks
        if (!Type) throw "Type is required.";
        if (!Name) throw "Name is required.";
        if (!Message) throw "Message is required.";
        if (!Type.match('log|warn|error')) throw "Type must be 'log', 'warn', or 'error'.";

        // get the current time
        let Time = new Date().toLocaleString([], { hour: 'numeric', minute: 'numeric', hour12: true });

        // log the message in console
        // this will output as (example): 
        // 5:00 PM | [ERROR: Logs]: something went wrong
        console.log(this.colors[Type], `${Time} | [${Type.toUpperCase()}: ${Name}]: ${Message}`);

        // return void
        return;
    },
};