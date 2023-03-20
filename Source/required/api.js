const { RamApiPro } = require("ram-api.js");
require('dotenv').config();

class RamApi extends RamApiPro {
    constructor() {
        super(process.env.PROKEY, "v13");
    }
}

module.exports = RamApi;