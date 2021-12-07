// require needed modules
const
  Logs = require("./Modules/Logs.js"),
  GuildsCheck = require("./Modules/GuildsCheck.js"),
  Configuration = require("./Modules/Configuration.js"),
  Discord = require('discord.js'),
  prettyMilliseconds = require('pretty-ms');

// log that the start file has been executed
// also create a new date so we can log how long it took later
const StartUpDate = new Date().getTime();
Logs.log("log", "Start", "Start.js is now being executed...");

// create discord client
const Client = new Discord.Client({
  intents: new Discord.Intents(32767),
});

// client login
Client.login(Configuration.client.token).catch(error => {
  Logs.log("log", "Start", error);
});

// log that the start file has finsihed being executed
// use the date from the start of the file to say how long it took
Logs.log("log", "Start", `Start.js has finished being executed in ${prettyMilliseconds(new Date().getTime() - StartUpDate)}.`);