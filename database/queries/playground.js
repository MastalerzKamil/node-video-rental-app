const { getMovieByTitle } =require('./movies');
const { connect, closeConnection } = require('../connection');

async function testFindByTitle() {
  const result = await getMovieByTitle('Avatar');
  console.log(result);
  await closeConnection();
}

testFindByTitle();