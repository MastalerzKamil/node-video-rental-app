const env = require('../env').getEnvType();
const config = require(__dirname + '/../config/config.json')[env];

module.exports = config;