var parsePost = require('./parse-post')

module.exports = function(source) {
  return 'module.exports = ' + JSON.stringify(parsePost(source))
}
