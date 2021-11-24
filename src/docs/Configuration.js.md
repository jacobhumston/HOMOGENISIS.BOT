# docs / Confgiuration.js
Documentation for `src/Configuration.js`.

## About
This file is used for easy customization of the project, while also holding some important information such as tokens.

Here's an example of the file blank, all the properties will be explained after:
```js
/** 
 * @module
 * Configuration Module 
 * [Docs](./docs/Configuration.js.md)
 */
module.exports = {
    version: "",
    staffPermissionRequirement: "",
    client: {
        token: "",
        intents: [],
        guilds: [],
        activity: {
            type: "",
            name: "",
            url: "",
        },
        status: "",
    },
};
```

## Properties

Below are details on each property of configuration.

---

**`version`** *string* 

Project version

---

**`staffPermissionRequirement`** *string ([PermissionResolvable](https://discord.js.org/#/docs/main/stable/typedef/PermissionResolvable))*

All commands that have `staffRequirement` enabled require the user who ran the command to have this permmision

---

**`client.token`** *string*

Client token, this is the password of the bot ([learn more...](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token))

> The default configuration requires a `token.json` file under the `src` directory. You can create one like so:
> ```json
> {
>   "token"
> }
> ```

---

**`client.intents`** - *string[] ([IntentsResolvable](https://discord.js.org/#/docs/main/stable/typedef/IntentsResolvable))* 

Client intents, its advised to not change this unless necessary ([learn more...](https://discordjs.guide/popular-topics/intents.html#gateway-intents))

---

**`client.guilds`** *string[]*

An array of guild ids that you want the bot to be used in, the bot will leave any other guilds that have not been specified here **(if the array is empty the bot will not leave any guilds)**

---


**`client.activity.type`** *string ([ActivityType](https://discord.js.org/#/docs/main/stable/typedef/ActivityType))*

Type of activity, leave as an empty string or `null` for no activity

---

**`client.activity.name`** *string* 

Activity name, required if `client.activity.type` is not an empty string and not `null`

---

**`client.activity.url`** *string* 

Twitch or YouTube stream url, only required if `client.activity.type` is `STREAMING`

---

**`client.status`** *string ([PresenceStatusData](https://discord.js.org/#/docs/main/stable/typedef/PresenceStatusData))* 

Client status, leave as an empty string or `null` to default to `online`

---
