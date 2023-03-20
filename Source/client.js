const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const mongoose = require("mongoose");
const fs = require('fs');
const path = require("path");
require('dotenv').config();

class BotClient extends Client {
    constructor() {
        super({
            intents: [GatewayIntentBits.Guilds],
            partials: [Partials.User],
        })
        this.Commands = new Collection(); // slash commands

    }
    start() {
        const eventPath = path.join(__dirname, '../Events');
        const eventFiles = fs.readdirSync(eventPath).filter(file => file.endsWith('.js'));

        for (const file of eventFiles) {
            const filePath = path.join(eventPath, file);

            const event = require(filePath);

            if (event.once) {
                this.once(event.name, (...args) => event.run(...args));

            } else {
                this.on(event.name, (...args) => event.run(...args));
            }
        }
        this.login(process.env.TOKEN);
    }
}

module.exports = BotClient;