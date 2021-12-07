// require needed modules
const
    Logs = require("./Modules/Logs.js"),
    GuildsCheck = require("./Modules/GuildsCheck.js"),
    Configuration = require("./Modules/Configuration.js"),
    prettyMilliseconds = require('pretty-ms');

// log that the start file has been executed
// also create a new date so we can log how long it took later
const StartUpDate = new Date().getTime();
Logs.log("log", "Start", "Start.js is now being executed...");



// log that the start file has finsihed being executed
// use the date from the start of the file to say how long it took
Logs.log("log", "Start", `Start.js has finished being executed in ${prettyMilliseconds(new Date().getTime() - StartUpDate)}.`);