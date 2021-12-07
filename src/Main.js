require("./Modules/Logs.js").log("log", "Main", "This is a test to see if the colors work.");
require("./Modules/Logs.js").log("warn", "Main", "This is a test to see if the colors work.");
require("./Modules/Logs.js").log("error", "Main", "This is a test to see if the colors work.");
console.log("---------------------------------------")
require("./Modules/Logs.js").log("asdjkladsl", "Main", "This is a test to see if the colors work.").catch(error => {
    require("./Modules/Logs.js").log("error", "Main", error);
});