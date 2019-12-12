async function addMovie(req, res) {
  const { title, type, year, plot } = req.body;
  res.status(200).send({result: 'Success'});
}

module.exports = {
  add: addMovie
}