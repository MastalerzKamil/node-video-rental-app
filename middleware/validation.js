// source: https://www.freecodecamp.org/news/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7/
const { body } = require('express-validator/check')

const validate = (method) => {
  switch (method) {
    case 'addMovie': {
     return [
        body('title', `title doesn't exists`).exists(),
        body('type', `type doesn't exists or invalid format`)
          .exists()
          .isIn(['movie', 'series', 'episode']),
        body('year', `year doesn't exists`).exists().isInt(),
        body('plot', `plot doesn't exists or invalid format`)
          .exists()
          .isIn(['short', 'full']),
       ]
    }
  }
};

module.exports = validate;