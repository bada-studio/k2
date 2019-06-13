const env = process.env.NODE_ENV || 'development';
const cfg = require('./Config.' + env);

module.exports = cfg;