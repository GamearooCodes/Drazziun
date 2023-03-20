const { Logs } = require('ram-api.js');


class ConsoleLog extends Logs {
    constructor() {
        super('Drazziun');
    }
}

module.exports = ConsoleLog;