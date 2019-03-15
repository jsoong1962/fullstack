//  keys.js - figure out what set of credentials to return, commit this to github
if(process.env.NODE_ENV === 'production') {
  // we are in production - return prod set of keys;
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
