const { body } = require('express-validator/check')

const validate = (method) => {
  switch (method) {
    case 'addMovie': {
     return [
        body('title', `title doesn't exists`).exists(),
        body('type', `type doesn't exists`)
          .exists()
          .isIn(['movie', 'series', 'episode']),
        body('year', `year doesn't exists`).exists().isInt(),
        body('plot', `plot doesn't exists`)
          .exists()
          .isIn(['short', 'full']),
       ]
    }
  }
};

module.exports = validate;