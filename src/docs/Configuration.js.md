# docs / Confgiuration.js
Doccumentation for `src/Configuration.js`.

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
        activity: {
            type: "",
            content: "",
        },
        status: "",
    },
};
```