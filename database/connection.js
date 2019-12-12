const config = require('../config');
const db = require('mongoose');

db.connect(`${config.host}/${config.db_name}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  })
  .then(() => console.log('Connected to the database...'));

const connect = () => {
  db.connect(`${config.host}/${config.db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('Connected to the database...'));
}

const closeConnection = () => db.connection.close()
  .then(() => console.log('Disconnected with database...'));

module.exports = {
  db,
  connect,
  closeConnection,
};