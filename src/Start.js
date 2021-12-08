const
    Logs = require("./Modules/Logs.js"),
    GuildsCheck = require("./Modules/GuildsCheck.js"),
    Configuration = require("./Modules/Configuration.js"),
    Discord = require('discord.js'),
    PrettyMilliseconds = require('pretty-ms');

const StartUpDate = new Date().getTime();
Logs.log("log", "Start", "Start.js is now being executed...");

const Client = new Discord.Client({
    intents: new Discord.Intents(32767), // all intents
});

Client.on("ready", async () => {
    if (Configuration.client.guildCheckOnStartUp) {
        await GuildsCheck.leaveGuilds(Client, true).catch(error => {
            Logs.log("error", "Start", error);
        });
    };
    Logs.log("log", "Start", "Client is ready!");
});

(async () => {
    const Output = await Client.login(Configuration.client.token).catch(error => {
        Logs.log("error", "Start", error);
        return;
    });
    Logs.log("log", "Start", `Client logged in! Output: '${Output}'`)
})();

Logs.log("log", "Start", `Start.js has finished being executed in ${PrettyMilliseconds(new Date().getTime() - StartUpDate)}.`);