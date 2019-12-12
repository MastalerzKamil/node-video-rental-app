const DEVELOMPENT = 'development';

function getEnvType() {
  if (process.env.NODE_ENV === 'test') {
    return DEVELOMPENT;
  }
  return process.env.NODE_ENV || DEVELOMPENT;
}

module.exports = { getEnvType };