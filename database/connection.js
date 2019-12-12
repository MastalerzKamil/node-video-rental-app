const config = require('../config');
const db = require('mongoose');

db.connect(`${config.host}/${config.db_name}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  }, (err) => {
  if (err)
      console.error(err);
  else
      console.log('Connected to the database');
});

module.exports = db;