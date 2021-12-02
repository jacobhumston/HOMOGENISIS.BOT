/**
 * @module
 * Logs
 * @description
 * Functions used to log messages in console
 */
module.exports = {
    /**
     * @description
     * Log a message in console
     * @param {('log'|'warn'|'error')} Type - Type of log
     * @param {string} Message - Message to log 
     * @returns {void}
     */
    log: function (Type, Message) {
        // Some basic param checks
        if (!Type) throw "Type is required.";
        if (!Message) throw "Message is required."

        // Log the message in console
        console.log(`[${Type}] ${Message}`);

        // Return void
        return;
    },
};