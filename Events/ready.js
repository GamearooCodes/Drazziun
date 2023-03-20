const RamApi = require("../Source/required/api");
const ConsoleLog = require("../Source/required/logger");

module.exports = {
    name: 'ready',
    once: true,
    async run(client) {
        //! for commands scheduler

        new RamApi().version_checkAsync();

        new ConsoleLog().infoAsync(`I am online`);
    }
}