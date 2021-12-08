// require needed modules
const
    Logs = require("./Modules/Logs.js"),
    GuildsCheck = require("./Modules/GuildsCheck.js"),
    Configuration = require("./Modules/Configuration.js"),
    Discord = require('discord.js'),
    PrettyMilliseconds = require('pretty-ms');

// log that the start file has been executed
// also create a new date so we can log how long it took later
const StartUpDate = new Date().getTime();
Logs.log("log", "Start", "Start.js is now being executed...");

// create discord client
const Client = new Discord.Client({
    // for now we want all intents
    intents: new Discord.Intents(32767),
});

// client ready event, only event not in the events folder
Client.on("ready", async () => {
    // run guild check if guildcheck is enabled on startup
    if (Configuration.client.guildCheckOnStartUp) {
        await GuildsCheck.leaveGuilds(Client, Configuration, true).catch(error => {
            Logs.log("error", "Start", error);
        });
    };
    // log that the client is ready
    Logs.log("log", "Start", "Client is ready!");
});

// all of our async functions on start go here (excluding events)
(async () => {
    // client login
    await Client.login(Configuration.client.token).catch(error => {
        Logs.log("error", "Start", error);
    });
})();

// log that the start file has finsihed being executed
// use the date from the start of the file to say how long it took
Logs.log("log", "Start", `Start.js has finished being executed in ${PrettyMilliseconds(new Date().getTime() - StartUpDate)}.`);