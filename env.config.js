const path = require('path');

module.exports = {
  THEME_NAME: 'wp-hrm',
  // Change the PROXY_TARGET as per your MAMP settings eg - 'localhost:8080'
  PROXY_TARGET: 'localhost', 
  HOST: 'localhost',
  PORT: 3000,
  PATHS: {
    src: unipath('src'),
    compiled: unipath(path.resolve(__dirname, 'compiled')),
    modules: unipath('node_modules'),
    base: unipath('.'),
  }
};

function unipath(base) {
  return function join() {
    const _paths = [base].concat(Array.from(arguments));
    return path.resolve(path.join.apply(null, _paths));
  }
}
