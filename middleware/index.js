const errors = require('./errors');
const movieValidation = require('./validation');
const omdapi = require('./omdapi');
const database = require('./database');

module.exports = {
  errors,
  movieValidation,
  omdapi,
  database
};
