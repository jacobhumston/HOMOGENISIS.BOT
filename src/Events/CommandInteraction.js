const Discord = require('discord.js');

/**
 * @module 
 * Events/CommandInteraction.js
 * @description
 * Event for command interactions
 */
module.exports = {
    /**
     * @description
     * Run and establish the event
     * @param {typeof Discord.Client} Client - Discord client object
     * @return {Promise<void>}
     */
    run: async function(Client) {
        Client.on("interactionCreate", async Interaction => {
            if (!Interaction.isApplicationCommand()) return;
            
        });
        return;
    },
};