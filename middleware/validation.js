// source: https://www.freecodecamp.org/news/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7/
const { body } = require('express-validator/check')

const validate = (method) => {
  switch (method) {
    case 'addMovie': {
     return [
        body('title', `title doesn't exists`).exists(),
        body('type', `type invalid format`)
          .optional()
          .isIn(['movie', 'series', 'episode']),
        body('year', `year doesn't exists`).optional().isInt(),
        body('plot', `plot invalid format`)
          .optional()
          .isIn(['short', 'full']),
      ]
    }
    case 'addComment': {
      return [
        body('movie', `movie id doesn't exists`).exists(),
        body('text', `text doesn't exists`).exists(),
        body('rate', `Rate invalid format or diesn't exists`)
          .isFloat()
          .exists()
      ]
    }
  }
};

module.exports = validate;