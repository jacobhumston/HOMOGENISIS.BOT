const Logs = require("./Modules/Logs.js"),
    GuildsCheck = require("./Modules/GuildsCheck.js"),
    CommandSetup = require("./Modules/CommandSetup.js"),
    Configuration = require("./Modules/Configuration.js"),
    FileSystem = require("fs"),
    Discord = require("discord.js"),
    PrettyMilliseconds = require("pretty-ms")

const StartUpDate = new Date().getTime()
Logs.log("log", "Start", "Start.js is now being executed...")

const Client = new Discord.Client({
    intents: new Discord.Intents(32767), // all intents
})

Client.on("ready", async () => {
    if (Configuration.client.guildCheckOnStartUp) {
        await GuildsCheck.leaveGuilds(Client, true).catch((error) => {
            Logs.log("warn", "Start", "GuildsCheck ran into an error: " + error)
        })
    }

    await CommandSetup.setupCommands(Client, true)

    await Client.user.setActivity({ type: "PLAYING", name: "Recollection" })
    Logs.log("log", "Start", "Client is ready!")
})
;(async () => {
    for (const File of FileSystem.readdirSync("./src/Events")) {
        const Event = require("./Events/" + File)
        await Event.run(Client).catch((error) => {
            Logs.log("warn", `Events/${File.split(".")[0]}`, error)
        })
    }
    Logs.log("log", "Start", "All events ran.")

    await Client.login(Configuration.client.token).catch((error) => {
        Logs.log("error", "Start", error)
        return
    })
    Logs.log("log", "Start", `Client logged in!`)
})()

Logs.log(
    "log",
    "Start",
    `Start.js has finished being executed in ${PrettyMilliseconds(
        new Date().getTime() - StartUpDate
    )}.`
)
