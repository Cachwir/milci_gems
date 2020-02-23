const fs = require('fs');

const configPath = './config.json';
const config = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

module.exports = config;